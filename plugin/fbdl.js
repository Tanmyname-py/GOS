import Fbdl from '../tools/fbdl.js'
import axios from "axios"
import fs from "fs"
export const name = 'fbdl'
export const prefix = true


export default async function(Gos,m,args,text,bot){
  try{
    let path = './trash/fbdl.mp4'
    if(!args[0]) return bot.reply(bot.settings.mess.nourl)
    let result = await Fbdl(args[0])
    bot.reply(bot.settings.mess.wait)
    bot.reply(`Result ${result[1]}`)
    const response = await axios.get(result[1], {
      responseType: 'arraybuffer'
    });
    const buffer = Buffer.from(response.data);
    fs.writeFileSync(path,buffer)
  await Gos.sendMessage(bot.sender,{ video : { url : path }, caption : bot?.settings?.mess.success })
   fs.unlinkSync(path)
  } catch(error){
    bot.reply(bot?.settings.mess?.error + error)
  }
}