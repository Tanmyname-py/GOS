const fs = require("fs").promises;
const path = require("path");
const fetch = require("node-fetch");

async function getWeatherByRegion(userInput) {
    const baseUrl = "https://api.bmkg.go.id/publik/prakiraan-cuaca";

    try {
        // Path ke file wilayah.json
        const filePath = path.join(__dirname, "../database/wilayah.json");

        // Membaca file wilayah.json
        const data = await fs.readFile(filePath, "utf-8");
        const wilayahData = JSON.parse(data);

        // Cari kecocokan wilayah dengan tingkat IV (kode terpanjang)
        let bestMatch = wilayahData
            .filter(w => w.id.split(".").length === 4) // Hanya kode tingkat IV
            .find(w => w.wilayah.toLowerCase() === userInput.toLowerCase());

        if (!bestMatch) {
            bestMatch = wilayahData
                .filter(w => w.id.split(".").length === 4)
                .find(w => w.wilayah.toLowerCase().includes(userInput.toLowerCase()));
        }

        if (!bestMatch) {
            console.error("Wilayah tidak ditemukan atau bukan tingkat IV.");
            return null;
        }

        const wilayahId = bestMatch.id;
        console.log(`Menggunakan ID Wilayah: ${wilayahId}`);

        // Panggil API BMKG dengan headers agar tidak diblokir
        const apiUrl = `${baseUrl}?adm4=${wilayahId}`;
        console.log(`Fetching data from: ${apiUrl}`);

        const weatherResponse = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!weatherResponse.ok) {
            throw new Error(`HTTP error! Status: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        return weatherData;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Contoh penggunaan
const wilayahInput = "Labuhan Lalar"; // Contoh input user (harus tingkat IV)
getWeatherByRegion(wilayahInput).then(data => console.log(data));
