import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { downloadMediaMessage } from '@whiskeysockets/baileys'


/**
 * downloadaFile function 
 * @param {string} url - URL 
 * @param {string} outputPath
 */
export default async function downloadFile(url, outputPath) {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream' 
    })

    const writer = fs.createWriteStream(outputPath)
    response.data.pipe(writer)
    await new Promise((resolve, reject) => {
      writer.on('finish', () => {
        resolve()
      })
      writer.on('error', reject)
    })
    return outputPath
  } catch (error) {
    console.error(`${error.message}`)
  }
}

