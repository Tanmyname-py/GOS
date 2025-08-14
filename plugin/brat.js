import axios from "axios";
import fs from "fs";
export const name = "brat";
export const prefix = true;

export default async function (Gos, m, args, text, bot) {
  try {
    if (!args[0]) return bot.reply("Error undefined args ");
    let texts = args.join(" ");
    bot.reply(bot.settings.mess.wait);
    let response = await axios.get(
      `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(texts)}`,
      {
        responseType: "stream",
      },
    );
    const writer = fs.createWriteStream("./trash/brat.jpg");
    response.data.pipe(writer);
    bot.sendImgAsSticker(Gos, bot.sender, "./trash/brat.jpg");
  } catch (error) {
    bot.reply(bot.settings.mess.error + error);
  }
}
