import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'

export default async function Igdl(url){
    const base_url = 'https://savereels.io/api/ajaxSearch'
    const payload = {
       q : url,
       w : "",
       v : "v2",
       lang : "en",
       cftoken : ""  
    }
    const encode = new URLSearchParams(payload).toString();
    const requests = await axios.post(base_url,encode,{
       header : {
        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept" : "*/*",
        "X-Requested-With" : "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      }
    })
    const photoList = []
    const $ = cheerio.load(requests.data.data)
    const photo = $('.photo-option').find('option').each((i,e) => {
      const option = $(e).attr('value')
      photoList.push(option)
    })
    const vid = $('.download-items__btn').find('a').attr('href')
    const thumb = $(".download-items__thumb").find('img').attr('src')
    return {
      photoList,
      vid,
      thumb
    }

    }

