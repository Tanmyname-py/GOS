import fs from "fs"
import axios from "axios"
import Jimp from "jimp"
export const name = "qc"
export const prefix = true 

export default async function(Gos,msg,args,text,bot){
 let txt = args.join(' ')
 if(!args[0]) return bot.reply('please input text to create Qc')
 bot.reply(bot.settings.mess.wait)
 let pp = await Gos.profilePictureUrl(bot.userId, 'image').catch(() => "https://i.ibb.co/3Fh9V6p/avatar-contact.png");
const colorMap = {
  hitam: "#000000", putih: "#ffffff", merah: "#ff0000", biru: "#0000ff", kuning: "#ffff00",
  hijau: "#00ff00", ijo: "#00ff00", ungu: "#800080", pink: "#ffc0cb", oranye: "#ffa500",
  coklat: "#8b4513", abu: "#808080", pink_pastel: "#ffd1dc", cyan: "#00ffff", toska: "#40e0d0",
  lavender: "#e6e6fa", mint: "#98ff98", peach: "#ffcccb", salem: "#fa8072", emas: "#ffd700",
  silver: "#c0c0c0", navy: "#000080", maroon: "#800000", coklat_muda: "#d2b48c",
  biru_muda: "#add8e6", hijau_muda: "#90ee90", kuning_pastel: "#fdfd96", merah_muda: "#ff6961",
  biru_laut: "#4682b4", hijau_lumut: "#556b2f", ungu_muda: "#dda0dd", abu_muda: "#d3d3d3",
  karamel: "#c68e17", hijau_toska: "#20b2aa", biru_langit: "#87ceeb", coklat_tua: "#654321",
  magenta: "#ff00ff", indigo: "#4b0082", krem: "#fffdd0", coklat_kopi: "#4b2e2a",
  plum: "#dda0dd", coral: "#ff7f50", emas_tua: "#b8860b", biru_laut_tua: "#00008b",
  merah_bata: "#8b0000", salmon: "#fa8072", tomato: "#ff6347", merah_anggur: "#800020",
  sienna: "#a0522d", biru_kehijauan: "#5f9ea0", hijau_zamrud: "#50c878", aquamarine: "#7fffd4",
  chartreuse: "#7fff00", lime_green: "#32cd32", perak: "#c0c0c0", teal: "#008080", khaki: "#f0e68c",
  emas_muda: "#ffe4b5", beige: "#f5f5dc", olive: "#808000", merah_cerah: "#ff4500",
  crimson: "#dc143c", fuchsia: "#ff00ff", chocolate: "#d2691e", biru_royal: "#4169e1",
  hijau_gelap: "#006400", merah_jambu: "#ff1493", biru_es: "#e0ffff", kuning_keemasan: "#ffd700",
  jade: "#00a86b", mustard: "#ffdb58", biru_neon: "#4d4dff", aprikot: "#fbceb1",
  biru_beludru: "#483d8b", ungu_gelap: "#4b0082", pastel: "#dbb2ff", hijau_army: "#4b5320",
  pink_flamingo: "#fc74fd", ungu_terong: "#990066", biru_denim: "#1560bd", biru_baja: "#4682b4",
  kelabu_tua: "#a9a9a9", teal_muda: "#afeeee", hijau_daun: "#228b22", lavender_muda: "#e6e6fa",
  oranye_kemerahan: "#ff4500", raspberry: "#e30b5c", biru_langit_terang: "#87cefa",
  biru_arktik: "#00bfff", hijau_pastel: "#77dd77", merah_muda_terang: "#ffb6c1", kuning_neon: "#ccff00",
  emas_metalik: "#d4af37", ungu_lilac: "#c8a2c8", biru_langit_pastel: "#a1caf1", coklat_susu: "#a0522d",
  biru_petir: "#1f75fe", hijau_pistachio: "#93c572", orchid: "#da70d6", biru_pirus: "#40e0d0",
  merah_cherry: "#de3163", kuning_lemon: "#fff44f", orange_terang: "#ffae42", biru_zaitun: "#9ab973"
};
  let bgColor = "#ffffff";
  if (txt.length > 10000) return m.reply("Maximal 10000 karakter!");
  const payload = {
    type: "quote",
    format: "png",
    backgroundColor: bgColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [{
      entities: [],
      avatar: true,
      from: { id: 1, name: bot.user, photo: { url: pp } },
      text: txt,
      replyMessage: {}
    }]
  };
  const response = await axios.post("https://quotly.netorare.codes/generate", payload, {
    headers: { "Content-Type": "application/json" }
  });
  const imageBuffer = Buffer.from(response.data.result.image, "base64");
  let path = './trash/qc.jpg'
    fs.writeFileSync(path,imageBuffer)
}