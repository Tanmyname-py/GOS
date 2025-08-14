import fs from 'fs'
import Jimp from 'jimp'
export const name = 'setppgroup'
export const prefix = true 

async function prepareImage(filePath) {
  const image = await Jimp.read(filePath)
  image.resize(640, 640)
  const buffer = await image.quality(80).getBufferAsync(Jimp.MIME_JPEG)
  return buffer
}

export default async function(Gos,m,args,text,bot){
   if(!bot.isGroup) return bot.reply('Only in group')  
   if(!bot.isBotAdmin) return bot.reply('bot must be admin!!')
   if(!bot.isAdmin) return bot.reply('Only admin!!')
   if(bot.media?.mimetype !== 'image/jpeg') return bot.reply('Please send image message with caption .setppgroup or reply image with text reply .setppgroup!!')
   bot.reply('Loading...')
   let path = './trash/ppgroup.jpeg'
   fs.writeFileSync(path,bot.media?.buffer)
   let buffer = await prepareImage(path)
   await Gos.updateProfilePicture(bot.sender,buffer)
   fs.unlinkSync(path)
   bot.reply('Sukses')
} 