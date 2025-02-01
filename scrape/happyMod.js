const axios = require('axios');
const cheerio = require('cheerio');

async function cariApkMod(judul) {
    const url = `https://ind.happymod.com/search.html?q=${encodeURIComponent(judul)}`;
    
    try {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
        };

        // Request ke URL dengan headers
        const { data } = await axios.get(url, { headers });
        const $ = cheerio.load(data);

        // Ambil semua elemen dengan struktur yang diminta
        const hasil = [];
        $('.container-left .pdt-app-box').each((_, element) => {
            const title = $(element).find('.pdt-app-h3 a').text().trim();
            const link = 'https://ind.happymod.com' + $(element).find('.pdt-app-h3 a').attr('href');

            if (title && link) {
                hasil.push({ title, url: link });
            }
        });

        return hasil;
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        return [];
    }
}

// Contoh penggunaan
(async () => {
    const hasil = await cariApkMod('Minecraft');
    console.log(hasil);
})();
