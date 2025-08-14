import fs from 'fs'
import Jimp from 'jimp'
export const name = 'setppbot'
export const prefix = true 

async function prepareImage(filePath) {
  const image = await Jimp.read(filePath)
  image.resize(640, 640)
  const buffer = await image.quality(80).getBufferAsync(Jimp.MIME_JPEG)
  return buffer
}

export default async function(Gos,m,args,text,bot){
   if(!bot.isOwner) return bot.reply("Only owner!!")
   if(bot.media?.mimetype !== 'image/jpeg') return bot.reply('Please send image message with caption .setppgroup or reply image with text reply .setppgroup!!')
   bot.reply('Loading...')
   let path = './trash/ppgroup.jpeg'
   fs.writeFileSync(path,bot.media?.buffer)
   let buffer = await prepareImage(path)
   await Gos.updateProfilePicture(bot.botNumber,buffer)
   fs.unlinkSync(path)
   bot.reply('Sukses')
} 