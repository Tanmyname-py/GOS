import axios from "axios"
import * as cheerio from "cheerio"


async function getLyricsLinks(songTitle) {
    /*
    * SCRAPE BY @TAN
    * SOURCE https://github.com/Tanmyname-py/scrape/blob/main/src/js/Lyrics.js
    */
    try {
        const searchUrl = `https://search.azlyrics.com/suggest.php?q=${encodeURIComponent(songTitle)}&x=f8d387986925b283a5f9b08dae3f3c633b1291ba3ed13aeb3a02fe8a9961120a`;
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Connection": "keep-alive"
        };
        const  data = await axios.get(searchUrl, { headers });
        return data.data.songs
    } catch (error) {
        return { error: `Gagal mengambil data: ${error.message}` };
    }
}

async function getLyrics(url) {
    try {
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Connection": "keep-alive"
        };
        const { data } = await axios.get(url, { headers });
        const $ = cheerio.load(data);
        let title = $(".div-share h1").text().replace('Lirik lagu "', "").replace('"', "").trim() || "Unknown";
        let artist = $(".lyricsh h2 a").text().trim() || "Unknown";
        let lyrics = $(".ringtone").next("b").nextAll("div").first().html() || "";
        lyrics = lyrics
            .replace(/<br\s*\/?>/g, "\n")
            .replace(/\n{2,}/g, "\n")
            .replace(/<!--.*?-->/gs, "")
            .trim();

        return {
            title: title,
            artist: artist,
            lyrics: lyrics
        };

    } catch (error) {
        return { error: `❌ Gagal mengambil data: ${error.message}` };
    }
}

export { getLyricsLinks,getLyrics }