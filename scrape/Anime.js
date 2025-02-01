const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function OtakuSearch(judulAnime) {
    const url = `https://otakudesu.cloud/?s=${encodeURIComponent(judulAnime)}&post_type=anime`;
   
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    };

    try {
        const response = await fetch(url, { headers });
        const body = await response.text();
        const $ = cheerio.load(body);

        const results = [];

        $('.chivsrc li').each((index, element) => {
            const titleElement = $(element).find('h2 a');
            const title = titleElement.text();
            const animeUrl = titleElement.attr('href');
            const imageUrl = $(element).find('img').attr('src');
            const genres = $(element).find('.set').first().next().text().replace('Genres : ', '').trim();
            const rating = $(element).find('.set').last().text().replace('Rating : ', '').trim();

            results.push({
                title,
                genres,
                rating,
                imageUrl,
                animeUrl
            });
        });

        return results;
    } catch (error) {
        console.error('Error fetching anime info:', error);
        return [];
    }
}

async function OtakuDetail(url) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    };

    try {
        const response = await fetch(url, { headers });
        const body = await response.text();
        const $ = cheerio.load(body);

        const title = $('.jdlrx h1').text().trim();
        const japaneseTitle = $('.infozin p').eq(1).text().replace('Japanese: ', '').trim();
        const score = $('.infozin p').eq(2).text().replace('Skor: ', '').trim();
        const producer = $('.infozin p').eq(3).text().replace('Produser: ', '').trim();
        const type = $('.infozin p').eq(4).text().replace('Tipe: ', '').trim();
        const status = $('.infozin p').eq(5).text().replace('Status: ', '').trim();
        const totalEpisodes = $('.infozin p').eq(6).text().replace('Total Episode: ', '').trim();
        const duration = $('.infozin p').eq(7).text().replace('Durasi: ', '').trim();
        const releaseDate = $('.infozin p').eq(8).text().replace('Tanggal Rilis: ', '').trim();
        const studio = $('.infozin p').eq(9).text().replace('Studio: ', '').trim();
        const genres = $('.infozin p').eq(10).text().replace('Genre: ', '').trim();
        const synopsis = $('.sinopc').text().trim();
        const thumbnail = $('.fotoanime img').attr('src'); // Ambil URL gambar

        const episodeLinks = [];
        $('.episodelist ul li span a').each((index, element) => {
            episodeLinks.push($(element).attr('href'));
        });

        return {
            title,
            japaneseTitle,
            score,
            producer,
            type,
            status,
            totalEpisodes,
            duration,
            releaseDate,
            studio,
            genres,
            synopsis,
            episodeLinks,
            thumbnail
        };
    } catch (error) {
        console.error('Error fetching anime details:', error);
        return null;
    }
}

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
            const provider = $(element).text().replace(/(\d{3}p)/, '').trim();

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


module.exports = { OtakuSearch,OtakuDetail,OtakuDl } 