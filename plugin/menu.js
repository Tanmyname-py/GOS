import fs from 'fs'
export const name = 'menu'
export const prefix = true 

let thumb = './data/media/thumb.jpg'
let groupMenu = `*Group-Menu*
> .kick
> .del
> .setppgroup
> .promote
> .demote
> .linkgc
> .setnamegc
> .setdescgc
> .hidetag
> .tagall
> .closegc
> .opengc
> .invite
> .welcome [ on || off ]
> .setwelcome 
`
let downloadMenu = `*Download Menu*
> .play 
> .ttdl
> .ytmp3
> .ytmp4 
> .igdl `

let searchMenu = `*Search Menu*
> .yts
> .pin
> .lyrics`
let ownerMenu =  `*Owner Menu*
> .addprem 
> .delprem 
> .addowner 
> .delprem
> .settppbot`
let toolsMenu = `*Tools Menu*
> .tourl
> .rvo
> .sticker || .s
> .tomp3
> .ping
`
let aiMenu = ``

export default async function(Gos,m,args,text,bot){
   let menu = `Hello 🍀 ${bot.user} ${bot.settings.info} I'm  ${bot.botName} How i can assist  you ?  
__________________________________
                   *List Menu*
__________________________________
${groupMenu}${downloadMenu}
${searchMenu}
${ownerMenu}
${toolsMenu}`
   let button =  [{name: "cta_url",buttonParamsJson: `{"display_text":"Creator : ${bot.settings.author} ","url":"https://www.youtube.com/@grzyzegt1429","merchant_url":"https://youtube.com/Tan"}`}]
   bot.reply('Loading....')
   bot.sendInteractiveImageWithButton(Gos, m, thumb, 'List Menu',menu,button)
}