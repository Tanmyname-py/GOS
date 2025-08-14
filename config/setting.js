let days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = [ "January","February","March","April","May","June","July","August","September","October","November","December"]
const Time = new Date()
let hours  = Time.getHours()
let minute = Time.getMinutes() < 10 ? '0' + Time.getMinutes().toString() : Time.getMinutes()
let seconds = Time.getSeconds().toString()
let day = days[Time.getDay()]
let date = Time.getDate()
let month = months[Time.getMonth()]
let years = Time.getFullYear()
let info = hours >= 0 && hours < 11 ? "Good Morning 🌅" : ( hours > 11 && hours < 17 ? "Good afternoon 🌄" : ( hours > 17 && hours < 20 ? "Good evening 🌆" : "Good night 🌉"))
const  settings = {
   author : "@Tan",
   botName : "Gos",
   version : "1.0.0",
   superOwner : `62628262726272`,
   month,
   day,
   time : `${hours < 10 ? '0' + hours.toString() : hours }:${minute}`,
   seconds,
   date : `${day} ${month}/${date}/${years}`,
   info,
   platform : {
     yt : 'https://youtube.com/@grzyzegt1429?si=rwDQPtk9A0dwkcvy',
     github : "https://github.com/Tanmyname-py",
     ig : "",
     fb : "",
     tt : "@codenametan",
   },
   gc : "",
   newsletter : "",
      only: {
       group: "Sorry, this feature can only be used in groups.",
       private: "Sorry, this feature can only be used in private chats.",
       owner: "Sorry, this feature can only be used by the bot owner.",
       admin: "Sorry, this feature can only be used by the admin",
       badmin: "Sorry, you can't use this feature because the bot is not a group admin.",
       premium : "Sorry, you are not a premium user yet. Please request premium access from the owner."
   },
   mess : {
    wait : 'Loading.....',
    success : "Success",
    error : "An unexpected error occurred",
    notext : "Please input text or reply message",
    nourl : "Please input url"
   }
}

export default settings 