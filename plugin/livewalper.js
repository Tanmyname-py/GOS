import { liveWalpaper } from '../tools/walpaper.js'
export const name = 'livewalpaper'
export const prefix = true 

export default async function(Gos,m,args,text,bot){
   if(!args[0]) return bot.reply('Please input text to search walpaper')
   bot.reply(bot.settings.mess.wait)
   let texts = args.join(' ')
   let result = await liveWalpaper(texts)
   let thumbs = []
   let title = []
   let listurl = []
   let caption = 'To download the wallpaper, please enter the command .walpaperdl'
   for(let thumb of result){
     thumbs.push(thumb.thumb)
     title.push(thumb.title)
     listurl.push(thumb.url)
   }
   await bot.sendImgInteractive(Gos,m,thumbs,listurl,caption)
   
}