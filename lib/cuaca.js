const axios = require('axios');
const fs = require('fs');

async function downloadFile(url, outputPath) {
    const response = await axios.get(url, {
        responseType: 'stream' // Mengatur responseType ke 'stream' untuk mengunduh file
    });

    const writer = fs.createWriteStream(outputPath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

// Contoh penggunaan
const url = 'https://raw.githubusercontent.com/kodewilayah/permendagri-72-2019/main/dist/base.csv';
const outputPath = 'base.csv';

downloadFile(url, outputPath)
    .then(() => {
        console.log('File berhasil diunduh!');
    })
    .catch(err => {
        console.error('Terjadi kesalahan saat mengunduh file:', err);
    });