const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
/**
 * Scrapes wallpapers based on the provided query.
 * @param {string} query - The title of the wallpaper to search for.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of wallpapers.
 */
async function wallpapers(query) {
  const url = `https://moewalls.com/?s=${encodeURIComponent(query)}`;
  
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const results = [];

    // Select each wallpaper entry
    $(".entry-tpl-grid").each((_, element) => {
      const title = $(element).find("a.g1-frame").attr("title");
      const detailUrl = $(element).find("a.g1-frame").attr("href");
      const imageUrl = $(element).find("img").attr("src");
      const resolution = $(element).find(".entry-resolutions a").text();

      if (title && detailUrl && imageUrl) {
        results.push({
          title,
          detailUrl,
          imageUrl,
          resolution,
        });
      }
    });

    return results;
  } catch (error) {
    console.error("Error scraping wallpapers:", error.message);
    return [];
  }
}
/**
 * Scrapes video download details from the given URL.
 * @param {string} url - The URL of the detail page.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the title and video URL.
 */
async function downloadVideo(url) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    const $ = cheerio.load(data);
    const title = $("h1.entry-title").text().trim();
    const videoUrl = $("video > source").attr("src");

    if (!videoUrl) {
      throw new Error("Video URL not found.");
    }

    return { title, videoUrl };
  } catch (error) {
    console.error("Error scraping video details:", error.message);
    return null;
  }
}

/**
 * Downloads the video from the given URL.
 * @param {string} url - The URL of the video to download.
 * @param {string} filename - The filename to save the video as.
 * @returns {Promise<void>}
 */
async function saveVideo(videoUrl, filename) {
  try {
    const { data } = await axios.get(videoUrl, {
      responseType: "stream",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const videoPath = path.join(__dirname, filename);

    const writer = fs.createWriteStream(videoPath);

    data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    console.error("Error downloading video:", error.message);
  }
}
module.exports = { wallpapers,downloadVideo, saveVideo};
