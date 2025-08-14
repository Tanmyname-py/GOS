import { exec } from 'child_process'

export function convertWebmToMp4(inputPath, outputPath) {
  const command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf 23 -preset fast "${outputPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Gagal mengonversi video: ${error.message}`);
      return
    }
    return outputPath
  });
}
