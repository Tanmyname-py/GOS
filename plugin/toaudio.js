import vidToAudio from '../lib/converter.js'
import fs from "fs"
export const name  = 'tomp3'
export const prefix = true

export default async function(Gos,m,args,text,bot){
     if(!bot?.media) return bot.reply('No media send please input video to convert ')
     if(bot?.media?.mimetype !== 'video/mp4') return bot.reply('Please input only video to convert')
      bot.reply(bot.settings.mess.wait)
      fs.writeFileSync('./trash/input.mp4',bot.media?.buffer)
      let path = await vidToAudio('./trash/input.mp4','./trash/result.mp3')
      bot.sendAudio(path,'tomp3 converter')
      fs.unlinkSync(path)
     
}