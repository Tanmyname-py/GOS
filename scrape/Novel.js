const axios = require("axios");
const cheerio = require("cheerio");
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
function sanitizeText(text) {
  return text.replace(/[^\x00-\x7F]/g, " ");
}

async function searchNovel(title) {
  const baseUrl = "https://sakuranovel.id";
  const searchUrl = `${baseUrl}/?s=${encodeURIComponent(title)}`;

  try {
    const response = await axios.get(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);
    const results = [];
    $(".flexbox2-item").each((_, element) => {
      const title = $(element).find("a").attr("title") || "Unknown";
      const url = $(element).find("a").attr("href") || "Unknown";
      const imgUrl = $(element).find("img").attr("src") || "Unknown";
      const synopsis = $(element).find(".synops p").text().trim() || "No synopsis available.";
      const genres = [];
      $(element)
        .find(".genres a")
        .each((_, genreElement) => {
          genres.push($(genreElement).text().trim());
        });
      const hasAdultContent = genres.some((genre) =>
        ["Adult", "Ecchi", "Mature"].includes(genre)
      );
      results.push({
        title,
        url,
        imgUrl,
        synopsis,
        genres,
        warning: hasAdultContent
          ? "Novel ini mungkin mengandung konten dewasa mohon bijak dalam memilih bacaan"
          : null,
      });
    });

    return results;
  } catch (error) {
    console.error("Terjadi kesalahan saat memproses:", error.message);
    return [];
  }
}

async function getChNovel(url) {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  };

  try {
    const response = await axios.get(url, { headers });
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $(".series-titlex h2").text().trim();
    const alternativeTitle = $(".series-titlex span").text().trim();
    const status = $(".series-infoz.block .status").text().trim();
    const type = $(".series-infoz.block .type").text().trim();
    const rating = $(".series-infoz.score span[itemprop='ratingValue']").text().trim();
    const bookmarkCount = $(".favcount span").text().trim();
    const country = $(".series-infolist li:contains('Country') span a").text().trim();
    const published = $(".series-infolist li:contains('Published') span").text().trim();
    const author = $(".series-infolist li:contains('Author') span").text().trim();
    const totalChapters = $(".series-infolist li:contains('Total Chapter') span").text().trim();
    const tags = [];
    $(".series-infolist li:contains('Tags') span a").each((_, el) => {
      tags.push($(el).text().trim());
    });

    const genres = [];
    $(".series-genres a").each((_, el) => {
      genres.push($(el).text().trim());
    });
    const synopsis = $(".series-synops").text().trim();
    const chapters = [];
    $(".series-chapterlists li").each((_, el) => {
      const chapterTitle = $(el).find(".flexch-infoz a").attr("title").trim();
      const chapterUrl = $(el).find(".flexch-infoz a").attr("href").trim();
      const chapterDate = $(el).find(".flexch-infoz a span.date").text().trim();
      chapters.push({ title: chapterTitle, url: chapterUrl, date: chapterDate });
    });

    // Hasil akhir
    return {
      title,
      alternativeTitle,
      status,
      type,
      rating,
      bookmarkCount,
      country,
      published,
      author,
      totalChapters,
      tags,
      genres,
      synopsis,
      chapters,
    };
  } catch (error) {
    console.error("Error fetching novel details:", error.message);
    return null;
  }
}

async function dlNovel(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text().trim();
        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage([595, 842]);
        let yPosition = 800; 
        const content = $('.text-left').html();
        const contentText = $('.text-left').text().trim();
        const sanitizedContentText = sanitizeText(contentText);
        const lines = sanitizedContentText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        
        for (const line of lines) {
            if (yPosition <= 50) {
                yPosition = 800;
                page = pdfDoc.addPage([595, 842]);
            }
            page.drawText(line, { x: 50, y: yPosition, size: 12 });
            yPosition -= 20;
        }

        const images = $('.text-left img');
        for (const img of images) {
            const imgUrl = $(img).attr('src');
            const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
            const imageBytes = imgResponse.data;
            const imageExt = path.extname(imgUrl).toLowerCase();
            let pdfImage;
            if (imageExt === '.jpg' || imageExt === '.jpeg') {
                pdfImage = await pdfDoc.embedJpg(imageBytes);
            } else if (imageExt === '.png') {
                pdfImage = await pdfDoc.embedPng(imageBytes);
            }
            const { width, height } = pdfImage.scale(0.5);
            page.drawImage(pdfImage, { x: 50, y: yPosition - height - 20, width, height });
            yPosition -= height + 40;
        }

        const pdfBytes = await pdfDoc.save();
        const outputPath = path.join(__dirname, `${title}.pdf`);
        fs.writeFileSync(outputPath, pdfBytes);

        console.log(`Novel berhasil disimpan ke PDF: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        return null;
    }
}
module.exports = { searchNovel,getChNovel,dlNovel }