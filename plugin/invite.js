export const name = 'invite'
export const prefix = true 

export default async function(Gos,m,args,text,bot){
  if(!bot.isGroup) return bot.reply(bot.settings.only.group)
  if(!args[0]) return bot.reply('Please Input a phone number')
  let phoneNumber = args[0].startsWith('@') ? args[0].replace('@','') : args[0]
  let checkNumber = await Gos.onWhatsApp(phoneNumber)
      let numberExists = checkNumber[0]?.exists ? true : false 
      if(!numberExists) return bot.reply('Invalid PhoneNumber Not exists on WhatsApp!!')
  let thumb = './data/media/thumb.jpg'
  let metadata = await Gos.groupMetadata(bot.sender)
  let nameGroup = metadata?.subject  
  let response = await Gos.groupInviteCode(bot.sender)
  let info = `Come on Join to my Group\n${"https://chat.whatsapp.com/" + response}`
  let button =  [{name: "cta_url",buttonParamsJson: `{"display_text":"Join ${nameGroup} ","url":"${'https://chat.whatsapp.com/' + response}","merchant_url":"${'https://chat.whatsapp.com/' + response}"}`}]
  bot.sendInteractiveImageWithButton(Gos, m, thumb, 'Invite Group',info,button,phoneNumber + '@s.whatsapp.net')
}