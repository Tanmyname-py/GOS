import axios from "axios"
import * as cheerio from "cheerio"

export async function liveWalpaper(query){
     let result = []
     let response = await axios.get(`https://moewalls.com/?s=${encodeURIComponent(query)}`)
     const $ = cheerio.load(response.data)
     $('.entry-featured-media').find('a').each((i,el)=> {
      let title = $(el).attr('title')
      let url = $(el).attr('href')
      let thumb = $(el).find('img').attr('src')
      result.push({title,url,thumb})
     })
     return result
}

export async function getWalpaper(url){
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const video = $('video').find('source').attr('src')
    return video
} 
