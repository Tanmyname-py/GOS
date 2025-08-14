const axios = require('axios'); // If in Node.js

async function getFileBuffer(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer' // Important for binary data
    });
    // In Node.js, you can convert it to a Buffer
    const buffer = Buffer.from(response.data);
    return buffer;
  } catch (error) {
    console.error('Error fetching file as buffer:', error);
    throw error;
  }
}

// Example usage:
getFileBuffer('https://example.com/some-image.jpg')
  .then(buffer => {
    console.log('File buffer obtained:', buffer);
    // You can now process or save the buffer
  })
  .catch(error => {
    // Handle error
  });
  
  
  
  
import axios from 'axios';

async function downloadFileAsBuffer(url) {
  try {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'arraybuffer' // Important: set responseType to 'arraybuffer'
    });

    // response.data will be an ArrayBuffer
    const buffer = Buffer.from(response.data); // Convert ArrayBuffer to Node.js Buffer (if in Node.js)
    console.log('File downloaded as buffer successfully. Buffer size:', buffer.length);
    return buffer;

  } catch (error) {
    console.error('Axios request failed:', error);
  }
}

// Example usage:
// downloadFileAsBuffer('https://example.com/image.png')
//   .then(buffer => {
//     // Do something with the buffer, e.g., save it to a file
//     // fs.writeFileSync('image.png', buffer);
//   });


const axios = require('axios');
const fs = require('fs'); // For saving the stream to a file

async function downloadFileAsStream(url, outputPath) {
  try {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream' // Important: set responseType to 'stream'
    });

    // Create a write stream to save the file
    const writer = fs.createWriteStream(outputPath);

    // Pipe the response data stream to the file writer
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('Download complete!');
        resolve();
      });
      writer.on('error', (err) => {
        console.error('Error writing file:', err);
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

// Example usage:
// downloadFileAsStream('https://example.com/largefile.zip', './downloaded_file.zip');