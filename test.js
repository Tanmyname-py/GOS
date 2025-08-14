// index.js
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore
} from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import qrcode from 'qrcode-terminal'

async function startWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, console)
    },
    browser: ['MyBot', 'Chrome', '1.0.0']
  })

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, pairingCode } = update

    if (!state.creds.registered && pairingCode) {
      console.log(`📱 Pair this device by entering this code on your main WhatsApp: ${pairingCode}`)
    }

    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
      switch (reason) {
        case DisconnectReason.loggedOut:
          console.log('❌ Session expired or logged out. Restarting login...')
          return startWhatsApp()
        case DisconnectReason.connectionReplaced:
          console.log('⚠️ Connection replaced. This session is already in use elsewhere.')
          return
        case DisconnectReason.timedOut:
          console.log('⏱ Connection timed out. Reconnecting...')
          return startWhatsApp()
        default:
          console.error('❗ Unexpected disconnect reason:', reason)
          return
      }
    } else if (connection === 'open') {
      console.log('✅ Connected to WhatsApp successfully!')
    }
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const sender = msg.key.remoteJid
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || ''

    if (text === 'ping') {
      await sock.sendMessage(sender, { text: 'pong' })
    }
  })

  // Cek jika belum login dan tidak ada pairing code → login gagal
  if (!state.creds.registered) {
    console.log('🕓 Menunggu pairing code...')
    setTimeout(() => {
      if (!state.creds.registered) {
        const boomErr = new Boom('Timeout: Pairing code expired or not used in time', { statusCode: 408 })
        console.error(boomErr.output.payload)
        process.exit(1)
      }
    }, 2 * 60 * 1000) // 2 menit timeout pairing
  }

  return sock
}

startWhatsApp().catch((err) => {
  const boom
  