import yt_dlp

# URL video yang ingin diunduh
video_url = "https://rr2---sn-npoe7nss.googlevideo.com/videoplayback?expire=1738262933&ei=FVmbZ5bsA_Kfn88PjciPkAw&ip=2a04:3543:1000:2310:30da:13ff:fead:6be6&id=aa4b3cde94e043b2&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ==&rms=au,au&susc=bl&eaua=XoyAojhFhFc&mime=video/mp4&vprv=1&rqh=1&dur=1414.489&lmt=1678342172354993&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRAIgNE8rvMLrHUphq4bgsE5UF2yKH_erAhGtUi93i9HM7SgCIDFwaejPUIfF8-3JZAqSgjUFQbO4BlsMlvjg9HJyOrOC&rm=sn-npoly7l,sn-uxa3vhnxa-q2nl7s&rrc=104,40&fexp=24350590,24350737,24350825,24350827,24350961,24351028&req_id=d5e6afacd8f6a3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&cmsv=e&met=1738235072,&mh=nL&mip=114.122.133.159&mm=29&mn=sn-npoe7nss&ms=rdu&mt=1738234853&mv=m&mvi=2&pl=22&tso=901&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms,tso&lsig=AGluJ3MwRQIhAKrwEA9l-OmhJUZBh5OaZjO4azWeOUYKNHG37wyThfvRAiB2XK8pXPq4G8pxUFI-6BU3jLGSYg2OJ7xaQ8kAIMR3TQ=="

def download_video(url):
    ydl_opts = {
        "outtmpl": "%(title)s.%(ext)s",  # Nama file sesuai judul video
        "format": "bestvideo+bestaudio/best",  # Pilih kualitas terbaik
        "add_header": ["User-Agent: Mozilla/5.0"],  # Hindari 403 Forbidden
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([url])
            print("✅ Video berhasil diunduh!")
        except Exception as e:
            print(f"❌ Gagal mengunduh: {e}")

# Jalankan fungsi download
download_video(video_url)
