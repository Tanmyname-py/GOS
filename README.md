# BASE SC GOS 
# HOW RUN BOT IN TERMUX 
## INSTALASION PKG
**COPY THIS COMMAND 👇** 
Give permission to your Android storage
```sh
termux-setup-storage
```
1. UPDATE AND UPGRADE PKG TERMUX
```sh
pkg update -y && pkg upgrade -y
```
2. INSTALL NODEJS
```sh
pkg install nodejs -y
```
3. INSTALL PYTHON(opsional)
```sh
pkg install python3 -y
```
4. INSTALL GIT
```sh
pkg install git -y
```
5. INSTALL FFMPEG
```sh
pkg install ffmpeg -y
```
6. INSTALL IMAGEMAGICK
```sh
pkg install imagemagick -y
```
7. INSTALL LIBWEBP
```sh
pkg install libwebp -y
```
8. INSTALL YARN (OPSIONAL)
```sh
pkg install yarn
```
### HOW TO RUN 
1. Go to the dir the bot file in the SIM. You can change the name on the dir download adjust the file sc bot where you saved 
```sh
cd /sdcard/Download
```
3. Copy and move files to Dir Home on Termux
```sh
cp -r GOS.zip $HOME
```
4. Go to Dir Home in Termux
```
cd $HOME
```
5. Ekstrak file
```
unzip GOS.zip
```
6. move to the extract directory
```sh
cd GOS
```
7. Install library 
```sh
npm install 
```
8. If install succees run bot
```sh
npm start
```
**Enter your number according to your country number and WhatsApp bots ready for use** 
<img src="https://github.com/Tanmyname-py/GOS/blob/main/data/image/thumb.jpg" alt="Gos icon">
