import fs from 'fs'
import Jimp from 'jimp'
import { uploadToTop4Top,uploadToCatbox} from '../tools/tourl.js'
export const name = 'tourl'
export const prefix = true 
async function prepareImage(filePath) {
  const image = await Jimp.read(filePath)
  const buffer = await image.quality(80).getBufferAsync(Jimp.MIME_JPG)
  return buffer
}
export default async function(Gos,m,args,text,bot){
  try {
  if(!bot?.media?.mimetype) return bot.reply('Input is a media message!')
  bot.reply('Loading.....')
  let ext = bot?.media?.mimetype.split('/')
  let exts = '.' + ext[1]
  fs.writeFileSync('./trash/res'+exts,bot.media?.buffer)
  try{
  let result = await uploadToTop4Top('./trash/res'+exts)
  bot.reply(`*Success Convert To url*\n\n*URL :* ${result[0]}`)
  } catch (error){
    bot.reply('Eror uploading something with wrong' + error)
    let result = await uploadToCatbox('./trash/res'+exts)
    bot.reply(`Success convert to url ${result}`)
  }
  } catch (error){
     bot.reply("Something with wrong"+ error)
  }
}