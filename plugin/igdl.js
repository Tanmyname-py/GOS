import fs from 'fs'
import Igdl from '../tools/igdl.js'

export const name = 'igdl'
export const prefix = true 

export default async function(Gos,m,args,text,bot){
    let url = args[0]
    const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv|guide|stories|explore\/tags|[a-zA-Z0-9._]{1,30})(?:\/[a-zA-Z0-9._-]+)*(?:\/)?(?:\?.*)?$/;
    const match = regex.test(url)
    if(!args) return bot.reply("Please input url from ig")
    if (!match) return bot.reply("Please input url from instagram!!")
    let result = await Igdl(url)
    if (result?.photoList?.length !== 0){
        bot.reply("Loading....")
        let img = result.photoList[0]
        await Gos.sendMessage(bot.sender,{image : { url : img},caption : 'Success'})
    } else if(result?.vid){
        bot.reply('Loading....')
        let thumb = result?.thumb
        let video = result?.vid
        await Gos.sendMessage(bot.sender,{ video : {url : video }, caption : "success"})
    }
     

}