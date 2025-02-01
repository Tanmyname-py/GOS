//Recode by @Tan 
//Thanks for Dev @Fernazer
const chalk = require("chalk")
const fs = require("fs")

global.autoTyping = false
global.autoRecord = false 
global.autoblockmorroco = true 
global.autokickmorroco = true 
global.antispam = true
global.wlcm = []
global.wlcmm = []
global.versi = '1.1.'
global.thumbnail = fs.readFileSync("./data/image/thumb.jpg")
global.ig = '--'
global.yt = 'Tan'
global.ttowner = '@codenametan'
global.ownername = '@Tan'
global.owner = ['6285198468895','6282339835060']
global.ownernomer = '6282339835060'
global.socialm = 'GitHub: Tanmyname'
global.location = 'Indonesia' 
global.nodana = '6282339835060' // KOSONG KAN JIKA TIDAK ADA
global.nogopay = '6282339835060 ' // KOSONG KAN JIKA TIDAK ADA 
global.noovo = '' // KOSONG KAN JIKA TIDAK ADA
//==================setting Payment Name===========================\\
global.andana = 'Tan' // KOSONG KAN JIKA TIDAK ADA
global.angopay = 'Tan' // KOSONG KAN JIKA TIDAK ADA
global.anovo = ''
//==================setting bot===========================\\
global.botname = "Tv2"
global.ownernumber = '6282339835060'
global.botnumber = '6285198468895'
global.ownername = '@Tan'
global.ownerNumber = ["6282339835060@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.gris = '`'
global.wagc = "https://chat.whatsapp.com/DuolGpi5CIWDR8dYO6E1pC"
global.saluran = "12036332976784226@newsleter"
global.themeemoji = '🪀'
global.wm = "Tv2 | 6285198468895"
global.botscript = 'Ngk ada wle😂' //script link
global.packname = "Sticker By"
global.author = "\n\n\n\n\nCreate by Tv2\nNo hape/wa : 6285198468895"
global.creator = "6285198468895@s.whatsapp.net"
global.eggsnya = '15' // id eggs yang dipakai
global.location3 = '1' // id location
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.hiasan2 = `	◦  `
//===========================//
global.prefix = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0
//media target
global.thum = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
wait: 'Sedang memproses Permintaan...',
   success: "Sukses",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana?",
       link: "Link Nya Mana?",
   },
   error: {
       fitur: "Mohon Maaf Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Maaf Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
       private: "Maaf Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
       owner: "Maaf Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       admin: "Maaf Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       badmin: "Maaf Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "ᴍᴀᴀғ ᴋᴀᴍᴜ ʙᴇʟᴏᴍ ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ᴘʀᴇᴍɪᴜᴍ sɪʟᴀᴋᴀɴ ʙᴇʟɪ ᴅɪ ᴏᴡɴᴇʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ  .ᴏᴡɴᴇʀ",
   }
}
 
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
