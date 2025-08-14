import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function vidToAudio(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(inputPath)) {
      return reject(new Error(`File input tidak ditemukan: ${inputPath}`))
    }
    const command = `ffmpeg -i "${inputPath}" -vn -acodec libmp3lame -y "${outputPath}"`
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(stderr)
        return reject(error)
      }
      resolve(outputPath)
    })
  })
}