import fs from "fs"
export const name = "setwelcome"
export const prefix = true 


export default async function(Gos,m,args,text,bot){
   if(!args[0]) return bot.reply("Please input a text to set Welcome ")
   if(!bot.isGroup) return bot.reply(bot.settings.only.group)
   if(!bot.isAdmin && !bot.isOwner) return  bot.reply(bot.settings.only.admin)
   let data = fs.readFileSync('./data/welcome.json')
   let textWelcome = JSON.parse(data)
   let welcome = args.join(' ')
   textWelcome["text"] = welcome
   fs.writeFileSync("./data/welcome.json",JSON.stringify(textWelcome))
   bot.reply("Success to set welcome ")
}