import pkg from  "@whiskeysockets/baileys"
const { 
generateWAMessageContent,
generateWAMessageFromContent,
prepareWAMessageMedia,
proto
} = pkg
import fs from 'fs'
import path from 'path'
import { tmpdir } from 'os'
import ffmpeg from 'fluent-ffmpeg'
import nwbpx from 'node-webpmux';
import { fileURLToPath } from 'url'
const { Image } = nwbpx
function makeid(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function convertToWebp(inputPath, outputPath) {
  try {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-vcodec', 'libwebp',
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '00:00:00.0',
        '-t', '00:00:10.0',
        '-preset', 'default',
        '-an', '-vsync', '0'
      ])
      .output(outputPath)
      .on('end', () => resolve(outputPath))
      .on('error', reject)
      .run()
  })
  } catch (error){
     console.log(error)
  }
}

async function addExifToSticker(inputPath, metadata) {
  const img = new Image()
  await img.load(inputPath)

  const json = {
    'sticker-pack-id': 'https://github.com/yourname',
    'sticker-pack-name': metadata.packname || 'Sticker Pack',
    'sticker-pack-publisher': metadata.author || '@Tan',
    emojis: metadata.categories || [""]
  }

  const exifAttr = Buffer.from([
    0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00,
    0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x16, 0x00, 0x00, 0x00
  ])
  const jsonBuff = Buffer.from(JSON.stringify(json), 'utf-8')
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)

  img.exif = exif

  const outPath = path.join(tmpdir(), `${makeid()}.webp`)
  await img.save(outPath)

  return outPath
}

export async function sendImgAsSticker(sock, jid, imagePath, metadata = {}) {
 try {
  const webpPath = path.join(tmpdir(), `${makeid()}.webp`)
  await convertToWebp(imagePath, webpPath)
  const finalPath = await addExifToSticker(webpPath, metadata)

  const buffer = fs.readFileSync(finalPath)

  await sock.sendMessage(jid, {
    sticker: { url: finalPath }
  })

  console.log('Proccess successfull')
  } catch (err){
     await sock.sendMessage(jid, {
      text: `❌ Failed to send sticker:\n${err.message}`
    })
  }
}

const MAX_FILE_SIZE = 1.5 * 1024 * 1024
const MAX_DURATION = 10

function getVideoInfo(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) return reject(err)
      const duration = metadata?.format?.duration || 0
      resolve({ duration })
    })
  })
}

function checkFileSize(filePath) {
  const { size } = fs.statSync(filePath)
  return size
}

function convertVideoToAnimatedWebp(inputPath, outputPath, cutDuration = MAX_DURATION) {
 try{
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .inputOptions(['-t', `${cutDuration}`])
      .outputOptions([
        "-vcodec",
        "libwebp",
        "-vf",
        "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
        "-loop",
        "0",
        "-ss",
        "00:00:00",
        "-t",
        "00:00:05",
        "-preset",
        "default",
        "-an",
        "-vsync",
        "0",
      ])
      .toFormat('webp')
      .save(outputPath)
      .on('end', () => resolve(outputPath))
      .on('error', err => reject(new Error(`Konversi gagal: ${err.message}`)))
  })
  } catch (error){
     console.log(error)
  }
}


export async function sendVideoAsSticker(sock, jid, videoPath, metadata = {}) {
  try {
    const { duration } = await getVideoInfo(videoPath)
    if (duration > MAX_DURATION) {
      return await sock.sendMessage(jid, {
        text: `❌ Video duration is too long (${duration.toFixed(1)} seconds). Maximum 10 seconds. Cut it first, okay!`
      })
    }
    const fileSize = checkFileSize(videoPath)
    if (fileSize > MAX_FILE_SIZE) {
      return await sock.sendMessage(jid, {
        text: `❌ Video size is too large (${(fileSize / 1024 / 1024).toFixed(2)} MB). Maximum 1.5MB`
      })
    }

    const tempWebp = path.join(tmpdir(), `${makeid()}.webp`)
    await convertVideoToAnimatedWebp(videoPath, tempWebp)
    const finalSticker = await addExifToSticker(tempWebp, metadata)
    await sock.sendMessage(jid, {
      sticker: { url: finalSticker }
    })

    console.log('Proccess successfull')
  } catch (err) {
    console.error('Shomething with wrong', err)
    await sock.sendMessage(jid, {
      text: `❌ Failed to send sticker:\n${err.message}`
    })
  }
}

export async function sendInteractiveImageWithButton(Gos, msg, imagePathOrUrl, title,caption,buttons = [],sender) {
  const jid = msg.key.remoteJid
  const pushname = msg.pushName || 'Pengguna'
  const ownername = 'Tan'
 async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Tan.waUploadToServer
    });
    return imageMessage;
  }
  let sendchat = generateWAMessageFromContent(
    sender || jid,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: title || '',
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './data/media/thumb.jpg' } }, { upload: Gos.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: caption },
                  nativeFlowMessage: {
                  buttons,
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: msg }
  );

  await Gos.relayMessage(sendchat.key.remoteJid, sendchat.message, {
    messageId: msg.key.id,
  })
}

export async function sendImgInteractive(Gos,msg,imgurl = [],title = [],caption){
      const createImage = async (url) => {
      const { imageMessage } = await generateWAMessageContent({
        image: { url },
      }, {
        upload: Gos.waUploadToServer,
      });
      return imageMessage;
    };
    const cards = await Promise.all(imgurl.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: title[index].toString() || `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
        })
    })));
    const m = generateWAMessageFromContent(msg.key.remoteJid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: caption || `Result`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, { quoted: msg });

    await Gos.relayMessage(m.key.remoteJid, m.message, {
        messageId: msg.key.id
    });

}