import fs from 'fs'
export const name = 'rvo'
export const prefix = true 


export default async function (Gos,m,args,text,bot){
  let isViewOnce = bot?.quoted?.imageMessage?.viewOnce ?? bot?.quoted?.videoMessage?.viewOnce ?? false
  let path = './trash/result'
  if(!isViewOnce) return bot.reply('Please reply is a message view once ')
  bot.reply('Loading.....')
  if (!bot?.media?.mimetype) return bot.reply('Please reply image or video from view once message ')
  let exts = bot?.media?.mimetype === 'image/jpeg' ? bot?.media?.mimetype.replace('image/','.')
  : bot?.media?.mimetype.replace('video/','.')
  fs.writeFileSync(path + exts,bot.media?.buffer)
  if(exts === '.jpeg'){
     await Gos.sendMessage(bot.sender,{ image : { url : path + exts },caption : 'success'})
  } else if (exts === '.mp4'){
     await Gos.sendMessage(bot.sender,{ video  : { url : path + exts },caption : 'success'}) 
  }
  fs.unlinkSync(path + exts)
}