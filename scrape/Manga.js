const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');
const path = require('path');

async function searchManga(title) {
    try {
        const url = `https://komikcast01.com/?s=${encodeURIComponent(title)}`;
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9"
        };
        const { data: html } = await axios.get(url, { headers });
        const $ = cheerio.load(html);
        const mangaList = [];
        $('.list-update_item').each((_, element) => {
            const mangaTitle = $(element).find('.list-update_item-info .title').text().trim();
            const mangaUrl = $(element).find('a').attr('href');
            const thumbnailUrl = $(element).find('.list-update_item-image img').attr('src');
            if (mangaTitle && mangaUrl && thumbnailUrl) {
                mangaList.push({
                    title: mangaTitle,
                    url: mangaUrl,
                    thumbnail: thumbnailUrl
                });
            }
        });

        return mangaList;
    } catch (error) {
        console.error('Error fetching manga data:', error.message);
        return [];
    }
}

async function detailManga(url) {
    try {
        const { data } = await axios.get(url); // Ambil halaman HTML
        const $ = cheerio.load(data);

        // Ambil informasi utama
        const title = $("h1.komik_info-content-body-title").text().trim();
        const thumbnail = $("div.komik_info-cover-image img").attr("src");
        const genres = [];
        $("span.komik_info-content-genre a").each((i, el) => {
            genres.push($(el).text().trim());
        });
        const sinopsis = $("div.komik_info-description-sinopsis").text().trim();
        const rating = $("div.data-rating strong").text().replace("Rating", "").trim();
        const release = $("span.komik_info-content-info-release b").next().text().trim();
        const author = $("span.komik_info-content-info:contains('Author:')").text().replace("Author:", "").trim();
        const status = $("span.komik_info-content-info:contains('Status:')").text().replace("Status:", "").trim();
        const type = $("span.komik_info-content-info-type a").text().trim();
        const updatedOn = $("span.komik_info-content-update time").text().trim();

        // Ambil daftar chapter
        const chapters = [];
        $("ul#chapter-wrapper li.komik_info-chapters-item").each((i, el) => {
            const chapterTitle = $(el).find("a.chapter-link-item").text().trim();
            const chapterUrl = $(el).find("a.chapter-link-item").attr("href");
            const chapterTime = $(el).find("div.chapter-link-time").text().trim();
            chapters.push({ chapterTitle, chapterUrl, chapterTime });
        });

        // Buat objek hasil
        const mangaDetails = {
            title,
            thumbnail,
            genres,
            sinopsis,
            rating,
            release,
            author,
            status,
            type,
            updatedOn,
            chapters,
        };

        return mangaDetails;
    } catch (error) {
        console.error("Error fetching manga details:", error.message);
        return null;
    }
}


async function dlManga(url) {
    try {
        const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = response.data;
        const imageUrls = [...html.matchAll(/<img src="(https?:\/\/[^"]+\.jpg)"/g)].map(match => match[1]);

        if (imageUrls.length === 0) {
            console.log("Tidak ada gambar ditemukan.");
            return null;
        }
        const titleMatch = html.match(/<h1 itemprop="name">([^<]+)<\/h1>/);
        const pdfTitle = titleMatch ? titleMatch[1].replace(/[^a-zA-Z0-9]/g, '_') : 'Manga';
        const tempDir = path.join(__dirname, 'temp_images');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }
        const imagePaths = [];
        for (const [index, imageUrl] of imageUrls.entries()) {
            const imagePath = path.join(tempDir, `image_${index + 1}.jpg`);
            const writer = fs.createWriteStream(imagePath);
            const imageResponse = await axios({
                url: imageUrl,
                method: 'GET',
                responseType: 'stream',
            });
            imageResponse.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });

            imagePaths.push(imagePath);
        }
        const pdfDoc = await PDFDocument.create();
        for (const imagePath of imagePaths) {
            const imageBytes = fs.readFileSync(imagePath);
            const image = await pdfDoc.embedJpg(imageBytes);
            const page = pdfDoc.addPage([image.width, image.height]);
            page.drawImage(image, {
                x: 0,
                y: 0,
                width: image.width,
                height: image.height,
            });
        }
        const pdfBytes = await pdfDoc.save();
        const pdfPath = path.join(__dirname, `${pdfTitle}.pdf`);
        fs.writeFileSync(pdfPath, pdfBytes);
        for (const imagePath of imagePaths) {
            fs.unlinkSync(imagePath);
        }
        fs.rmdirSync(tempDir);

        console.log(`PDF berhasil dibuat: ${pdfPath}`);
        return pdfPath;
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return null;
    }
}

module.exports = { searchManga,detailManga,dlManga }

