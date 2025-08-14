import { getContentType } from "@whiskeysockets/baileys";
import chalk from "chalk";
import caseHandler from "./lib/case.js";
import pluginHandler from "./lib/plugin.js";
import configBot from "./config/config.js";

/* handler Message */
export default async function handlerMessage(Gos, msg) {
 try {
  const message = msg.message;
  if (!message) return;
  const nameUser = msg.pushName || "";
  const keyJid = msg.key.remoteJid;
  const type = getContentType(message);
  const text =
   msg.message?.conversation ??
   msg.message.extendedTextMessage?.text ??
   msg.message[type].caption ??
   "";
  const isGroup = keyJid.endsWith("@g.us");
  //const sender = isGroup ? msg.key.participant : msg.key.remoteJid
  if (isGroup) {
   console.log(chalk.bold(chalk.yellow("=========================")));
   console.log(
    chalk.bgYellow(
     chalk.black(
      `Chat Group ${chalk.blue(keyJid)} from ${chalk.red(nameUser)} message =>  ${chalk.bold(text)}`,
     ),
    ),
   );
   console.log(chalk.bold(chalk.yellow("=========================")));
  } else {
   console.log(chalk.bold(chalk.yellow("=========================")));
   console.log(
    chalk.bgYellow(
     chalk.black(
      `Chat from ${chalk.blue(keyJid)} Name ${chalk.red(nameUser)} message =>  ${chalk.bold(text)}`,
     ),
    ),
   );
   console.log(chalk.bold(chalk.yellow("=========================")));
  }
  const prefixes = ["!", ".", "#"]; //prefix list
  const prefixUsed = prefixes.find((p) => text.startsWith(p)); // prefix validation
  if (!prefixUsed) return;
  const withoutPrefix = text.slice(prefixUsed.length).trim();
  const [cmd, ...args] = withoutPrefix.split(/\s+/);
  const command = cmd?.toLowerCase();
  const textAfterCommand = args.join(" ");
  let config = await configBot(Gos, msg);
  const argsParsed = {
   prefix: prefixUsed,
   command,
   args,
   text: textAfterCommand,
   raw: text,
  };

  await caseHandler(Gos, msg, keyJid, argsParsed, config); // Case Handler command
  await pluginHandler(Gos, msg, config); // Plugin Handler command
 } catch (error) {
  console.log(error);
 }
}
