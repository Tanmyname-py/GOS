import { getLyricsLinks,getLyrics } from "../tools/lyric.js"
export const name = 'lyrics'
export const prefix = true 

export default async function(Gos,m,args,text,bot){
    if(!args[0]) return bot.reply('Please input title songs to search lyrics')
   bot.reply(bot.settings.mess.wait)
   let title = args.join(' ')
   let link = await getLyricsLinks(title)
   if (!link[0]) return bot.reply(bot.settings.mess.error + " Undefined Songs")
   let result = await getLyrics(link[0].url)
   let info = `*TITLE :* ${result.title}\n*ARTIST :* ${result.artist}\n\n${result.lyrics}`
   bot.reply(info)
} 