import axios from "axios"
import fs from "fs"
export const name = "bratvid"
export const prefix = true


export default async function(Gos,m,args,text,bot){
    let command = args.join(' ')
    let result = await axios.get(`https://velyn.mom/api/maker/bratgif?text=${encodeURIComponent(command)}&format=mp4`)
   console.log(result)
   /*
   bot.sendVideoAsSticker(Gos,bot.sender,'./brat.mp4')
   fs.unlinkSync('./brat.mp4')
   */
}