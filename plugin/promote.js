export const name = 'promote'
export const prefix = true 


export default async function(Gos,m,args,text,bot){
   if(!args[0]) return bot.reply('Input or tag  number to promote')
   if (!bot.isGroup) return bot.reply('only in Group') 
   if(!bot.isAdmin) return bot.reply('Only admin!!')
   if(!bot.isBotAdmin) return bot.reply('The bot must be an Admin first!!')
   if(!bot.isAdmin) return bot.reply('only Admin group')
   let phoneNumber = args[0].startsWith('@') ? args[0].replace('@','') + `@s.whatsapp.net` : args[0] + `@s.whatsapp.net`
   let checkNumber = await Gos.onWhatsApp(phoneNumber)
   let numberExists = checkNumber[0]?.exists ? true : false 
   if(!numberExists) return bot.reply('Invalid PhoneNumber Not exists on WhatsApp!!') 
   await Gos.groupParticipantsUpdate(bot.sender, [phoneNumber], 'promote')
   bot.reply('Success')
  
    
}