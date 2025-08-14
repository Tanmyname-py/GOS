import axios from 'axios'

export default async function Ytdl(url){  
    try {
    const res = await axios.get(`https://vatis.tech/app/api/youtube-downloader?url=${url}`)
    return {
     author : '@Tan',
     title : res.data.title,
     vid : res.data.videoUrl,
     aud : res.data.audioUrl
     } 
    } catch (err){ 
     return { eror : err.message } 
    } 
}