import axios from "axios" 
import * as cheerio from "cheerio"


export default async function Fbdl(url){
    try {
        let baseUrl = 'https://snapsave.io/api/ajaxSearch/facebook'
        let response = await axios.post(baseUrl,{
          p : "facebook",
          q : decodeURIComponent(url),
          lang : "id",
          w : ""
        },{
         headers : {
          "Content-Type" :  " application/x-www-form-urlencoded; charset=UTF-8",
          "Accept" : "*/*",
          "X-Requested-With" : "XMLHttpRequest"          
         }
        })
      if(response.status === 200){
         let vid = []
         const $ = cheerio.load(response.data.data)
         const datavid =  $('.tab__content').find('a').each((i,el)=>{
             let url = $(el).attr('href')
             vid.push(url)
         })
         return {
           vid
         }
      }
        
    }
    catch (error){
        console.log(error)
    }
}


