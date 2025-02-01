import requests

url = 'https://i.pinimg.com/originals/c8/56/4a/c8564a53ab234f0ff5a4f6f5f92f9650.gif'

data = requests.get(url)

with open('file.mp4','wb') as f :
   f.write(data.content)