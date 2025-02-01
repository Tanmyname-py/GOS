const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require("node-fetch");
/**
 * Mengambil daftar stiker berdasarkan judul.
 * @param {string} title - Judul stiker untuk pencarian.
 * @returns {Promise<Array>} - Array objek yang berisi data stiker (judul, URL gambar, URL kumpulan stiker).
 */
async function getStickers(title) {
  try {
    const searchUrl = `https://stickers.wiki/id/telegram/search/?q=${encodeURIComponent(title)}`;

    const { data } = await axios.get(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const $ = cheerio.load(data);
    const stickers = [];

    // Ambil setiap elemen yang mengandung stiker
    $('a[href^="/id/telegram/"]').each((index, element) => {
      const stikerTitle = $(element)
        .find('div.font-bold')
        .text()
        .trim();
      const imageUrl = $(element)
        .find('img')
        .attr('src');
      const detailUrl = `https://stickers.wiki${$(element).attr('href')}`;

      if (stikerTitle && imageUrl && detailUrl) {
        stickers.push({
          title: stikerTitle,
          imageUrl,
          detailUrl,
        });
      }
    });

    return stickers;
  } catch (error) {
    console.error('Error fetching stickers:', error.message);
    return [];
  }
}


async function dlStickers(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const stickers = [];

    $(".sticker").each((index, element) => {
      const sticker = {
        id: $(element).data("id"),
        type: $(element).data("type"),
        emoji: $(element).data("emoji"),
        number: $(element).data("number"),
        img: $(element).find("img").attr("src"),
        alt: $(element).find("img").attr("alt"),
      };
      stickers.push(sticker);
    });

    return { stickers };
  } catch (error) {
    console.error("Error fetching and parsing data:", error);
    throw error;
  }
}

module.exports = { getStickers,dlStickers };