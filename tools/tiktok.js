import axios from "axios"

export async function ttSearch(query){
 try{
  const response = await axios.get(`https://velyn.mom/api/search/tiktoksearch?query=${encodeURIComponent(query)}`,{
     header : {
       accept: "application/json"
     }
  })
  
  return response.data
  
 }catch(error){
   console.log(error)
 }
}

