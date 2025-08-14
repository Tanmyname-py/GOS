import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getContentType } from '@whiskeysockets/baileys'
import chalk from 'chalk'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export  default async function pluginHandler(sock,m,config) {
  const plugins = [];
  const files = await fs.readdir(path.join(__dirname, '../plugin'));
  for (const file of files) {
   if (file.endsWith('.js')) {
     const pluginPath = path.join(__dirname, '../plugin', file);
     const plugin = await import(`file://${pluginPath}`);
      plugins.push({
      name: plugin.name,
      prefix: plugin.prefix,
      run: plugin.default,
    });
  }
}
  const type = getContentType(m.message)
  const text = m.message?.conversation ?? m.message.extendedTextMessage?.text ?? m?.message[type]?.caption ?? ''
  if (!text) return;
  const prefixSymbol = ['.','#','!','?','']
  const [cmdRaw, ...args] = text.trim().split(/\s+/);
  const isPrefixed = prefixSymbol.find(p => cmdRaw.startsWith(p))
  const cmd = isPrefixed ? cmdRaw.slice(1) : cmdRaw
  for (const plugin of plugins) {
    if (plugin.name === cmd.toLowerCase() && (!plugin.prefix || isPrefixed)) {
      try {
        await plugin.run(sock, m, args, text,config);
        return;
      } catch (e) {
        throw new Error(chalk.red.bold(e))
      }
    }
  }
}
