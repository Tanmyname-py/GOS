const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function OtakuDl(url) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    };

    try {
        const response = await fetch(url, { headers });
        const body = await response.text();
        const $ = cheerio.load(body);

        // Mengambil judul anime dari elemen yang sesuai
        const title = $(".subheading h2[itemprop='name']").text().trim();

        // Mengambil URL episode
        const episodeUrl = url;

        // Mengambil URL thumbnail
        const thumbnailUrl = $('.cukder img').attr('src');

        // Mengambil URL streaming dari iframe
        const streamingUrl = $('#embed_holder iframe').attr('src');

        // Struktur penyimpanan link download berdasarkan resolusi dan provider
        const downloadLinks = {
            '360p': [],
            '480p': [],
            '720p': []
        };

        // Mengambil URL download dari semua provider
        $('.download ul li').each((index, element) => {
            const link = $(element).find('a').attr('href');
            const resolutionMatch = $(element).text().match(/(\d{3}p)/);
            const provider = $(element).text().replace(/(\d{3}p)/, '').trim(); // Menghapus resolusi untuk mendapatkan provider

            if (resolutionMatch) {
                const resolution = resolutionMatch[0];
                if (downloadLinks[resolution]) {
                    downloadLinks[resolution].push({ provider, link });
                }
            }
        });

        // Mengambil URL download dari mirror streaming
        $('.mirrorstream ul li').each((index, element) => {
            const link = $(element).find('a').attr('href');
            const resolutionMatch = $(element).prev().text().match(/(\d{3}p)/);
            const provider = $(element).find('a').text().trim(); 

            if (resolutionMatch) {
                const resolution = resolutionMatch[0]; 
                if (downloadLinks[resolution]) {
                    downloadLinks[resolution].push({ provider, link });
                }
            }
        });

        return {
            title,
            episodeUrl,
            thumbnailUrl,
            streamingUrl,
            downloadLinks
        };
    } catch (error) {
        console.error('Error fetching streaming and download links:', error);
        return null;
    }
}



 //test
OtakuDl('https://otakudesu.cloud/episode/cu2byo-s2-episode-1-sub-indo/')
    .then(data => console.log(data))
    .catch(err => console.error(err));
