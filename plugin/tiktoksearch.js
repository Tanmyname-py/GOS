import pkg from "@whiskeysockets/baileys";
const { generateWAMessageContent, generateWAMessageFromContent, proto } = pkg;
import { ttSearch } from "../tools/tiktok.js";
export const name = "ttsrch";
export const prefix = true;

export default async function(Gos, m, args, text, bot) {
    if (!args[0]) return bot.reply("please input text to search tiktok ");
    bot.reply(bot.settings.mess.wait);
    let result = await ttSearch(args.join(" "));
    let img = [];
    let title = [];
    let url = [];
    let video = [];
    let music = [];
    for (let data of result.data) {
        img.push(data.origin_cover);
        title.push(data.title);
        url.push(data.link);
        video.push(data.no_watermark);
        music.push(data.music.play);
    }
    let info = { title, url, video, music };
    async function sendImgInteractive(Gos, msg, imgurl = [], info = [], caption) {
        const createImage = async (url) => {
            const { imageMessage } = await generateWAMessageContent(
                {
                    image: { url },
                },
                {
                    upload: Gos.waUploadToServer,
                },
            );
            return imageMessage;
        };
        const cards = await Promise.all(
            imgurl.map(async (url, index) => ({
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*Title :* ${info.title[index]}\n\n*Url :* ${info.url[index]}\n`,
                    hasMediaAttachment: true,
                    imageMessage: await createImage(url),
                }),
                nativeFlowMessage:
                    proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"VIDEO🎬","url":"${info.video[index]}","merchant_url":"${info.video[index]}"}`,
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"Music🎵","url":"${info.music[index]}","merchant_url":"${info.music[index]}"}`,
                            },
                        ],
                    }),
            })),
        );
        const m = generateWAMessageFromContent(
            msg.key.remoteJid,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2,
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                                text: caption || `Result`,
                            }),
                            carouselMessage:
                                proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards,
                                }),
                        }),
                    },
                },
            },
            { quoted: msg },
        );

        await Gos.relayMessage(m.key.remoteJid, m.message, {
            messageId: msg.key.id,
        });
    }

    await sendImgInteractive(Gos, m, img, info);
}
