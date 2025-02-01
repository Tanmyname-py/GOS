const chalk = require('chalk')
const fs = require('fs')

global.toolsmenu = (prefix) => {
return`${global.gris}TOOLS MENU${global.gris}
> obfus
> ping
> myip
> sticker/s
> toqr
> brat
> bratvid
> tourl
> top4top
> tomp3
> tomp4
> togif 
> toimg
> hdvid
> hd/remini
> rvo
> checklimit
> math 
`   
},
global.animemenu = (prefix) => {
return`${global.gris}ANIMEMENU${global.gris}
> wallpaper
> wallpaperdl
> mangas / Manga Search 
> novels / Search Novel
> noveld / Detail Novel
> noveldl / Download novel
> animes / Search Anime 
> animed / Detail Anime 
> animedl / Download Anime
`   
},
global.ownermenu = (prefix) => {
return`${global.gris}OWNERMENU${global.gris}
> savekontak
> savekontakv2 
> pushkontak
> pushkontakv2
> cekidgc
> self
> clearall
> pinchat
> unpinchat
> gconly
> autotyping
> public
> setpppanjang
> setppgcpanjang
> addcase
> join
> poll
> bcimage
> bcvideo 
> creategc
> setexif
> userjid
> setbotname
> setbotbio
> delppbot
> restart
> setppbot
> addlimit
> listlimit 
> banuser
> addprem
> delprem
> addowner
> delowner
> addvn
> delvn
> addsticker
> delsticker
> addimage
> delimage
> addvideo
> delvideo
> block
> unblock del
> leavegc
`}
global.gamemenu = (prefix, hituet) => {
return`${global.gris}ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ${global.gris}
> tebakkata
┃  🔰 *tebaktebakan
┃  🔰 *tebaklirik*
┃  🔰 *tebakgambar*
┃  🔰 *tebaklagu*
┃  🔰 *tebakkimia*
┃  🔰 *asahotak*
┃  🔰 *siapaaku*
┃  🔰 *susunkata*
┃  🔰 *tekateki*
┃  🔰 *tebakbendera*
┃  🔰 *tebakbenderav2*
┃  🔰 *tebakkabupaten*
┃  🔰 *caklontong*
┃  🔰 *family100*
┃  🔰 *werewolf*
┗━━━━━━━━━━━➤
`}

global.downloadmenu = (prefix) => { 
return`${global.gris}DOWNLOADMENU${global.gris}
> pins /search from pinterest 
> pindl /get mp4 and gif 
> pin /get image 
> stickers /search sticker
> sdl /download sticker 
> tiktokslide
> infogithub
> repo
> gitclone
> ytsearch/yts
> ytmp3
> capcutdl
> play
> tt/tiktok
> ytmp4
> gitclone
> gdrive
`}

global.groupmenu = (prefix) => {
return`${global.gris}GROUPMENU${global.gris}
> autosimi
> mute
> setwelcome
> setleft
> welcome on/off
> linkgc
> invite
> delete
> setppgroup
> delppgroup
> setname
> setdesc
> add
> kick
> promote
> demote
> hidetag
> totag
> tagall
> editinfo
> opentime
> closetime
> resetlink
> getbio
> vote
> upvote
> downvote
> checkvote
> delvote
> react
`}

global.aimenu = (prefix) => {
return`${global.gris}AIMENU${global.gris}
> gemini
> gpt4o 
> gpt4omini
> claude
> llama3
> wizardlm
> gemma
`}
global.storemenu = (prefix) => {
return`${global.gris}s ᴛ ᴏ ʀ ᴇ - ᴍ ᴇ ɴ ᴜ${global.gris}
┏━━━━━━━━━━━➤
┃  🔰 *list*
┃  🔰 *addlist*
┃  🔰 *dellist*
┃  🔰 *update*
┃  🔰 *jeda*
┃  🔰 *tambah*
┃  🔰 *kurang*
┃  🔰 *kali*
┃  🔰 *bagi*
┃  🔰 *delsetdone*
┃  🔰 *changedone*
┃  🔰 *setdone*
┃  🔰 *delproses*
┃  🔰 *changeproses*
┃  🔰 *setproses*
┃  🔰 *proses <reply chat>*
┃  🔰 *done <reply chat>*
┗━━━━━━━━━━━➤
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
