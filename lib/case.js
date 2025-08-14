import Ytdl from './ytdl.js'
import axios from 'axios'
import yts from 'yt-search'
import downloadFile from './tools.js'
import downloadAnyMedia from './tools.js'
import { getLyricsLinks, getLyrics } from "../tools/lyric.js"
import vidToAudio from './converter.js'
import fs from 'fs'
import os from "os"
import { runtime, formatp } from "../tools/mytools.js"
import speed from "performance-now"
import process from 'process'
const badword = fs.readFileSync('./data/badword.json')
const premium = fs.readFileSync('./data/premium.json', 'utf8')
const owner = fs.readFileSync('./data/owner.json')
export default async function caseHandler(Gos, msg, sender, argsParsed, bot) {
  try {
    const sleep = async (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    const command = argsParsed.command
    const text = argsParsed.text
    const context = msg.message?.extendedTextMessage?.contextInfo
    const deleteKey = {
      remoteJid: msg.key.remoteJid,
      fromMe: context?.participant === Gos.user.id,
      id: context?.stanzaId,
      participant: context?.participant
    };
    const fcall = {
      key: {
        remoteJid: msg.key.remoteJid,
        fromMe: false,
        id: msg.key.id,
        participant: msg.key.participant || msg.participant || undefined // aman untuk grup
      },
      message: msg.message
    }

    const sendAudio = async (music, caption, title, thumb, urlFrom) => {
      await Gos.sendMessage(sender, {
        audio: { url: music },
        mimetype: 'audio/mpeg',
        caption: caption || '',
        contextInfo: {
          externalAdReply: {
            title: title || '',
            body: 'YouTube MP3 Downloader',
            thumbnailUrl: thumb || 'https://g.top4top.io/p_3315mdtvp0.jpeg',
            mediaType: 2,
            sourceUrl: urlFrom || 'https://g.top4top.io/p_3315mdtvp0.jpeg'
          }
        }
      });

    }


    const sendVideo = async (video, text) => {
      await Gos.sendMessage(sender, { video: { url: video }, caption: text })
    }
    const sendPhoto = async (photo, text) => {
      await Gos.sendMessage(sender, { image: { url: photo }, caption: text })
    }

    const reply = (teks) => {
      Gos.sendMessage(sender,
        {
          text: teks,
          contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 100,
            isForwarded: true,
            "externalAdReply": {
              "showAdAttribution": true,
              "containsAutoReply": true,
              "title": `Reply message`,
              "body": `Hello world`,
              "previewType": "VIDEO",
              "thumbnailUrl": 'https://g.top4top.io/p_3315mdtvp0.jpeg',
              "sourceUrl": 'https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t'
            }
          }
        },
        { quoted: msg })
    }

    const Loading = async () => {
      reply('Loading......')
    }
    switch (command) {
      case 'pin': {
        if (!text) return reply('Errorr Search unknown keyword')
        const response = await axios.get(`https://api.paxsenix.biz.id/tools/search-pinterest?q=${text}&limit=5`)
        Loading()
        let result = response.data.results
        for (let results of result) {
          let title = results.caption
          let img = results.media.images.original.url
          await sendPhoto(img, title)

        }
        break
      }
      case 'ttdl': {
        if (!text) return reply('Please input url from tiktok ')
        const response = await axios.get(`https://api.paxsenix.biz.id/dl/tiktok?url=${text}`)
        let result = response.data
        let title = result.detail.description
        let video = result.downloadUrls?.video || ''
        let music = result.downloadUrls?.music || ''
        if (!video) return reply('Error Download video')
        if (!music) return reply('Erorr Download Music')
        Loading()
        await sendVideo(video, title)
        await sendAudio(music)
        break
      }
      case 'yts': {
        if (!text) return reply('Please input query to search ')
        let response = await yts(text)
        const result = response.all
        let count = 0
        Loading()
        for (let results of result) {
          count += 1
          let title = results.title
          let thumb = results.thumbnail
          let url = results.url
          //console.log({title,thumb,url})
          let caption = `*Title :* ${title}\n*Url :* ${url} `
          await sendPhoto(thumb, caption)
          if (count === 4) break
        }
        break
      }
      case 'ytmp3': {
        if (!text) return reply('Input url from YouTube ')
        await Loading()
        let result = await Ytdl(text)
        let title = result.title
        let video = result.vid
        const path = await downloadFile(video, `./trash/${title}.mp4`)
        let pathres = await vidToAudio(path, `./trash/${title}.mp3`)
        await sendAudio(pathres, title)
        fs.unlinkSync(path)
        fs.unlinkSync(pathres)
        break
      }
      case 'ytmp4': {
        if (!text) return reply('Input url from YouTube ')
        await Loading()
        let result = await Ytdl(text)
        let title = result.title
        let video = result.vid
        sendVideo(video, title)
        break
      }
      case 'play': {
        if (!text) return reply('Please Input song title')
        await Loading()
        let result = await yts(text)
        let title = result.all[1].title
        let description = result.all[1].description
        let thumb = result.all[1].thumbnail
        let url = result.all[1].url
        let upload = result.all[1].ago
        let view = result.all[1].views
        let duration = result.all[1].timestamp
        console.log({ title, description, thumb, url, upload, view, duration })
        let info = `*Music Downloader*\n\n*Title* ${title}\n*Description* ${description}\n*Url* ${url}\n*Uploaded* ${upload}\n*View* ${view}\n*Duration* ${duration}\n\nWait downloaded Music.......`
        await sendPhoto(thumb, info)
        let getvid = await Ytdl(url)
        console.log(getvid);
        let video = getvid.vid
        let path = await downloadFile(video, `./trash/${title}.mp4`)
        let pathres = await vidToAudio(path, `./trash${title}.mp3`)
        await sendAudio(pathres, description, title, thumb, url)
        fs.unlinkSync(path)
        fs.unlinkSync(pathres)
        break
      }
      case 'addprem': {
        if (!bot.isOwner) return reply('Only owner Bot!!')
        let data = JSON.parse(premium)
        if (!text) return reply('Input or tag a number to add user premium')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        let checkNumber = await Gos.onWhatsApp(phoneNumber)
        let numberExists = checkNumber[0]?.exists ? true : false
        if (!numberExists) return reply('Invalid PhoneNumber Not exists on WhatsApp!!')
        let checkAlreadyNumber = data.includes(phoneNumber.replace('@s.whatsapp.net', ''))
        if (checkAlreadyNumber) return reply(`The number @${phoneNumber.replace('@s.whatsapp.net', '')} has already Premium!!`)
        data.push(phoneNumber.replace('@s.whatsapp.net', ''))
        fs.writeFileSync('./data/premium.json', JSON.stringify(data))
        reply(`@${phoneNumber.replace('@s.whatsapp.net', '')} Add to user premium`)
        break

      }
      case 'addowner': {
        if (!bot.isOwner) return reply('Only owner Bot!!')
        let data = JSON.parse(owner)
        if (!text) return reply('Input or tag a number to add owner!!')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        let checkNumber = await Gos.onWhatsApp(phoneNumber)
        let numberExists = checkNumber[0]?.exists ? true : false
        if (!numberExists) return reply('Invalid PhoneNumber Not exists on WhatsApp!!')
        let checkAlreadyNumber = data.includes(phoneNumber.replace('@s.whatsapp.net', ''))
        if (checkAlreadyNumber) return reply(`The number @${phoneNumber.replace('@s.whatsapp.net', '')} has already owner!!`)
        data.push(phoneNumber.replace('@s.whatsapp.net', ''))
        fs.writeFileSync('./data/owner.json', JSON.stringify(data))
        reply(`@${phoneNumber.replace('@s.whatsapp.net', '')} Add to Owner Bot`)
        break

      }
      case 'delowner': {
        if (!bot.isOwner) return reply('Only owner Bot!!')
        let data = JSON.parse(owner)
        if (!text) return reply('Input or tag a number to del owner!! ')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        let checkNumber = await Gos.onWhatsApp(phoneNumber)
        let numberExists = checkNumber[0]?.exists ? true : false
        if (!numberExists) return reply('Invalid PhoneNumber Not exists on WhatsApp!!')
        let checkAlreadyNumber = data.includes(phoneNumber.replace('@s.whatsapp.net', ''))
        if (!checkAlreadyNumber) return reply(`The number @${phoneNumber.replace('@s.whatsapp.net', '')} is not owner!! `)
        let indexOwnerNumber = data.indexOf(phoneNumber.replace('@s.whatsapp.net', ''))
        data.splice(indexOwnerNumber, 1)
        fs.writeFileSync('./data/owner.json', JSON.stringify(data))
        reply(`The @${phoneNumber.replace('@s.whatsapp.net', '')} has not already owner `)
        break

      }
      case 'delprem': {
        if (!bot.isOwner) return reply('Only owner Bot!!')
        let data = JSON.parse(premium)
        if (!text) return reply('Input or tag  number to del user premium!!')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        let checkNumber = await Gos.onWhatsApp(phoneNumber)
        let numberExists = checkNumber[0]?.exists ? true : false
        if (!numberExists) return reply('Invalid PhoneNumber Not exists on WhatsApp!!')
        let checkAlreadyNumber = data.includes(phoneNumber.replace('@s.whatsapp.net', ''))
        if (!checkAlreadyNumber) return reply(`The number @${phoneNumber.replace('@s.whatsapp.net', '')} is not premium!!`)
        let indexPremiumNumber = data.indexOf(phoneNumber.replace('@s.whatsapp.net', ''))
        data.splice(indexPremiumNumber, 1)
        fs.writeFileSync('./data/premium.json', JSON.stringify(data))
        reply(`The @${phoneNumber.replace('@s.whatsapp.net', '')} has not already premium user!!`)
        break

      }
      case 'del': {
        if (!bot.isGroup) return reply('Only in Group ')
        if (!bot.isBotAdmin) return reply('The bot must be an Admin first!!')
        if (!bot.isAdmin) return reply('Only admin group!! ')
        if (!bot.quoted) return reply('Reply message to delete')
        await Gos.sendMessage(sender, {
          delete: deleteKey
        });
        break
      }
      case 'kick': {
        if (!bot.isGroup) return reply('only in Group')
        if (!bot.isBotAdmin) return reply('The bot must be an Admin first!!')
        if (!bot.isAdmin) return reply('only Admin group')
        if (!text) return reply('Input or tag  number to kick')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        await Gos.groupParticipantsUpdate(sender, [phoneNumber], 'remove')
        break
      }
      case 'add': {
        if (!bot.isGroup) return reply('only in Group')
        if (!bot.isBotAdmin) return reply('The bot must be an Admin first!!')
        if (!bot.isAdmin) return reply('only Admin group')
        if (!text) return reply('Input or tag  number to add')
        let phoneNumber = text.startsWith('@') ? text.replace('@', '') + `@s.whatsapp.net` : text + `@s.whatsapp.net`
        await Gos.groupParticipantsUpdate(sender, [phoneNumber], 'add')
        break
      }
      case 's':
      case 'sticker': {
        let metadata = {
          packname: "Sticker Created By",
          author: bot.settings?.author
        }
        if (bot.media?.mimetype === "image/jpeg") {
          let path = './trash/result.jpg'
          reply('Loading....')
          fs.writeFileSync(path, bot.media?.buffer)
          await bot.sendImgAsSticker(Gos, sender, path, metadata)
          fs.unlinkSync(path)
        } else if (bot.media?.mimetype === "video/mp4") {
          reply('Loading....')
          let path = './trash/result.mp4'
          fs.writeFileSync(path, bot.media?.buffer)
          await bot.sendVideoAsSticker(Gos, sender, path, metadata)
          fs.unlinkSync(path)
        }
        break
      } case 'idgc': {
        if (!bot.isOwner) return reply(bot.settings.only.owner)
        let group = await Gos.groupFetchAllParticipating()
        for (let id in group) {
          let metadata = await Gos.groupMetadata(id)
          let nameGroup = metadata?.subject
          reply(`*Group :* ${nameGroup}\n*Id :* ${id}`)

        }
        break
      }
      case 'ping':
      case 'botstatus':
      case 'statusbot': {
        console.log(bot)
        const used = process.memoryUsage();
        const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
          return cpu;
        });

        const cpu = cpus.reduce((last, cpu, _, { length }) => {
          last.total += cpu.total;
          last.speed += cpu.speed / length;
          last.times.user += cpu.times.user;
          last.times.nice += cpu.times.nice;
          last.times.sys += cpu.times.sys;
          last.times.idle += cpu.times.idle;
          last.times.irq += cpu.times.irq;
          return last;
        }, {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
          }
        });

        let timestamp = speed();
        let latensi = speed() - timestamp;
        let neww = performance.now();
        let oldd = performance.now();

        let respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _Milliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim();

        reply(respon);
        break
      }
      case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        let metadata = await Gos.groupMetadata(sender)
        let nameGroup = metadata?.subject
        let response = await Gos.groupInviteCode(sender)
        reply(`https://chat.whatsapp.com/${response}\n\nGroup Link : ${nameGroup}`)
        break
      }
      case 'addbadword': {
        if (!text) return reply('Input texts to add badword')
        let data = JSON.parse(badword)
        data.push(text)
        fs.writeFileSync('./data/badword.json', JSON.stringify(data))
        reply('Success to add badword')
        break
      }
      case 'antitoxic': {
        if (!text) return reply('input opsion on or off !!')
        if (text !== "on" && text !== "off") return reply("Unknown command")
        if (text === "off") {
          let antitoxic = fs.readFileSync('./data/antitoxic.json')
          let data = JSON.parse(antitoxic)
          if (!data[0].status) return reply('Antitoxic already off')
          data[0]["status"] = false
          fs.writeFileSync('./data/antitoxic.json', JSON.stringify(data))
          reply('anti toxic turned off')
        } else {
          let antitoxic = fs.readFileSync('./data/antitoxic.json')
          let data = JSON.parse(antitoxic)
          if (data[0].status) return reply('Antitoxic already on')
          data[0]["status"] = true
          fs.writeFileSync('./data/antitoxic.json', JSON.stringify(data))
          reply('anti toxic turned on ')
        }
        break
      }

      case 'setnamegc': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!text) return reply('Please input a text for change name group ')
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        Gos.groupUpdateSubject(sender, text);
        reply(bot.settings.mess.success)
        break
      }
      case 'setdescgc': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!text) return reply('Please input a text for change name group ')
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        Gos.groupUpdateDescription(sender, text);
        reply(bot.settings.mess.success)
        break
      }

      case 'hidetag': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        let metadata = await Gos.groupMetadata(sender)
        console.log(metadata)

        Gos.sendMessage(sender, { text: text || '', mentions: metadata.participants.map(a => a.id) }, { quoted: msg })
        break
      }
      case 'tagall': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        let metadata = await Gos.groupMetadata(sender)
        let members = []
        for (let member of metadata.participants) {
          let listMember = `🍀 @${member.id.replace('@s.whatsapp.net', '')}`
          members.push(listMember)
        }
        let info = `---------------------------------------------
          🍀 *TAG ALL* 🍀
${members.join('\n')}
---------------------------------------------`
        Gos.sendMessage(sender, { text: info || '', mentions: metadata.participants.map(a => a.id) }, { quoted: msg })
        break
      }
      case 'closegc': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        let metadata = await Gos.groupMetadata(sender)
        if (metadata.announce) return reply('Group has already closed')
        Gos.groupSettingUpdate(sender, 'announcement')
        reply('Success closed group chat')
        break
      }
      case 'opengc': {
        if (!bot.isGroup) return reply(bot.settings.only.group)
        if (!bot.isAdmin) return reply(bot.settings.only.admin)
        if (!bot.isBotAdmin) return reply(bot.settings.only.badmin)
        let metadata = await Gos.groupMetadata(sender)
        if (!metadata.announce) return reply('Group has already open')
        Gos.groupSettingUpdate(sender, 'not_announcement')
        reply('Success open group chat')
        break
      }

    }
  } catch (error) {
    console.log(error)
  }
}
