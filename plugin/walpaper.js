import axios from "axios"
import fs from "fs"
import { getWalpaper } from '../tools/walpaper.js'
import { convertWebmToMp4 } from  '../tools/converter.js'
export const name = 'walpaperdl'
export const prefix = true 

export default async function(Gos,m,args,text,bot){
   if(!args[0]) return bot.reply('Please input url from result livewalpaper')
   bot.reply(bot.settings.mess.wait)
   let result = await getWalpaper(args[0])
   if(result.endsWith('.webm')){
       let response = await axios.get(result,{
          responseType : 'stream'
       })
       const writer = fs.createWriteStream('./trash/result.webm')
       response.data.pipe(writer)
       writer.on('finish', ()=>{
        Gos.sendMessage(bot.sender,{ video : { url : './trash/result.webm'  }, caption : bot.settings.mess.success })
       })

   }
   
}