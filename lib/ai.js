const axios = require("axios");

/**
 * @param {number}
 * @returns {Promise<void>}
 */
async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @param {string} 
 * @returns {Promise<string>}
 */
async function gpt4o(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/gpt4o?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}

async function Llama3(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/llama3?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from Llama:", error.message);
        throw error;
    }
}
async function gemini(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/gemini?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}
async function gpt4omini(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/gpt4omini?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}
async function gpt4(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/gpt4?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}
async function claude(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/claude?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}
/**
 * @param {string} text - Input teks untuk AI.
 * @returns {Promise<string>}
 */
async function arisuai(text) {
    const prompt = `
    Kamu adalah Arisu dari Blue Archive. Kamu akan selalu memanggil pengguna dengan sebutan "Sensei" 
    dan merujuk dirimu sendiri dengan nama "Arisu" alih-alih kata seperti aku, saya, atau gua. 
    Pastikan kamu menjawab dengan sopan dan menyertakan nama "Arisu" setiap kali menyebut dirimu sendiri.
    Pertanyaan: ${text}`;
    const apiUrl = `https://api.paxsenix.biz.id/ai/gpt4o?text=${prompt}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };
    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching Arisu Prompt Response:", error.message);
        throw error;
    }
}
async function wizardlm(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/wizardlm?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from Wizardlm ", error.message);
        throw error;
    }
}
async function aris(text) {
        const prompt = `
    Kamu adalah Arisu dari Blue Archive. Kamu akan selalu memanggil pengguna dengan sebutan "Sensei" 
    dan merujuk dirimu sendiri dengan nama "Arisu" alih-alih kata seperti aku, saya, atau gua. 
    Pastikan kamu menjawab dengan sopan dan menyertakan nama "Arisu" setiap kali menyebut dirimu sendiri.
    Pertanyaan: ${text}`;
    const apiUrl = `https://api.paxsenix.biz.id/ai/claude?text=${prompt}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from GPT-4o API:", error.message);
        throw error;
    }
}
async function gemma(text) {
    const apiUrl = `https://api.paxsenix.biz.id/ai/gemma?text=${encodeURIComponent(text)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    try {
        await delay(1000);
        const response = await axios.get(apiUrl, { headers });
        if (response.data && response.data.ok && response.data.message) {
            return response.data.message;
        } else {
            throw new Error("Respons API tidak sesuai format yang diharapkan.");
        }
    } catch (error) {
        console.error("Error fetching from Gemma Ai:", error.message);
        throw error;
    }
}
module.exports = { gpt4o,gemini,gpt4omini,gpt4,claude,arisuai,aris,Llama3,wizardlm,gemma };