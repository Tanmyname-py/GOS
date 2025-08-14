import json
from yt_dlp import YoutubeDL as ytdl

def Yt_search(query:str):
    try:
        search = f'ytsearch5:{query}'
        ytdl_opts = {
          'nonplaylist' : True,
          'skip_download' : True,
          'quiet': True,
          'no_warnings': True,
          'extract_flat': 'in_playlist',
          'simulate': True,
        }
        data = []
        with ytdl(ytdl_opts) as ydl:
            info = ydl.extract_info(search, download=False)
        for index,item in enumerate(info.get('entries')):
            title= item.get('title')
            url = item.get('url')
            thumb = item.get('thumbnails')[0].get('url')
            data.append({
            'title': title,
            'url' : url,
            'thumb' : thumb
            })
        return {
          'status' : 'success',
          'data' : data
         }

            
    except Exception as e:
       print(f"Eror {e}") 
    

def Ytdl(url:str,type='mp4'): 
    if type== 'mp4':
        ytdl_opts = {
         'format': 'bestvideo+bestaudio/best',
         'outtmpl' : './trash/ytdlp.%(ext)s',
         'merge_output_format': 'mp4',
         'no_warnings' : True,
        }
        with ytdl(ytdl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            title = info.get('title')
            ydl.download(url)
        #compress_video('trash/Ytresult.mp4',f"trash/{title}.mp4")     
        return {
        'status' : 'Success',
        'path' : f"./trash/{title}.mp4"
         }         
            
    elif type=='mp3':
        ytdl_opts = {
          'format': 'bestaudio/best',
          'extractaudio': True,
          'outtmpl': 'trash/%(title)s.%(ext)s',
          'postprocessors': [{
          'key': 'FFmpegExtractAudio',
          'preferredcodec': 'mp3', 
          'preferredquality': '192',
           }],
            'addmetadata': True,
            }
        with ytdl(ytdl_opts) as ydl:
            info = ydl.extract_info(url,download=False)
            title = info.get('title')
            ydl.download(url)                 
        return { 
          'status' : 'success',
          'file' : title,
          'path' : f'trash/{title}.mp3'
        }


    
if __name__ == '__main__':
    with open('./data/data.json','r') as f :
        data = json.load(f)
        url = data.get('url')
        Ytdl(url)
