import fs from "fs"
export const name = "welcome"
export const prefix = true 

export default async function(Gos,m,args,text,bot){
  if(!bot.isGroup) return bot.reply(bot.settings.only.group)
  let data = JSON.parse(fs.readFileSync('./data/swelcome.json'))
  if(!args[0]) return bot.reply("Undefined command!")
  if(args[0] !== "on" && args[0] !=="off") return bot.reply('Please input message on or off')
  if(args[0] === "on"){
     if(data.status) return bot.reply('welcome has already on')
      data["status"] = true
      fs.writeFileSync('./data/swelcome.json',JSON.stringify(data))
      bot.reply("Success set to on")
  } else {
      if(!data.status) return bot.reply('welcome has already off')
      data["status"] = false
      fs.writeFileSync('./data/swelcome.json',JSON.stringify(data))
      bot.reply("Success set to off")
  }
}