import { getContentType, downloadMediaMessage } from "@whiskeysockets/baileys";
import fs from "fs";
import settings from "./setting.js";
import {
  sendImgAsSticker,
  sendVideoAsSticker,
  sendInteractiveImageWithButton,
  sendImgInteractive,
} from "../tools/sender.js";

export default async function configBot(Gos, msg) {
  const message = msg.message;
  if (!message) return;
  const type = getContentType(message);
  const botNumber = Gos.user.id.split(":")[0] + "@s.whatsapp.net";
  const premium = fs.readFileSync("./data/premium.json", "utf8");
  const owner = fs.readFileSync("./data/owner.json");
  const nameUser = msg.pushName || "";
  const keyJid = msg.key.remoteJid;
  const isGroup = keyJid.endsWith("@g.us");
  const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  const jidGroup = isGroup ? keyJid : keyJid;
  const userId = isGroup ? msg.key?.participant : msg.key?.remoteJid || "";
  const context = msg.message?.extendedTextMessage?.contextInfo;
  const isPremium = premium.includes(userId.replace("@s.whatsapp.net", ""));
  const isOwner = owner.includes(userId.replace("@s.whatsapp.net", ""));
  const text =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    msg.message?.imageMessage?.caption ||
    msg.message?.videoMessage?.caption ||
    msg.message?.documentMessage?.caption ||
    msg.message?.viewOnceMessage?.message?.conversation ||
    "";
  const fcall = {
    key: {
      fromMe: false,
      participant: msg.key?.participant || "0@s.whatsapp.net",
      ...(keyJid ? { remoteJid: "status@broadcast" } : {}),
    },
    message: {
      extendedTextMessage: {
        text,
      },
    },
  };
  async function GetBuffer(msg, type) {
    if (type === "imageMessage") {
      let mimetype = msg?.message?.imageMessage?.mimetype;
      let buffer = await downloadMediaMessage(msg, "buffer", {});
      return {
        mimetype,
        buffer: buffer,
      };
    } else if (type === "videoMessage") {
      let mimetype = msg?.message?.videoMessage?.mimetype;
      let buffer = await downloadMediaMessage(msg, "buffer", {});
      return {
        mimetype,
        buffer: buffer,
      };
    } else if (type === "stickerMessage") {
      let mimetype = msg?.message?.stickerMessage?.mimetype;
      let buffer = await downloadMediaMessage(msg, "buffer", {});
      return {
        mimetype,
        buffer: buffer,
      };
    } else if (type === "documentMessage") {
      let mimetype = msg?.message?.documentMessage?.mimetype;
      let buffer = await downloadMediaMessage(msg, "buffer", {});
      return {
        mimetype,
        buffer: buffer,
      };
    } else if (type === "audioMessage") {
      let mimetype = msg?.message?.audioMessage?.mimetype;
      let buffer = await downloadMediaMessage(msg, "buffer", {});
      return {
        mimetype,
        buffer: buffer,
      };
    } else if (type === "extendedTextMessage") {
      let key = msg?.key;
      let messageTimestamp = msg?.messageTimestamp;
      let pushName = msg?.pushName;
      let broadcast = msg?.broadcast;
      let message = quoted;
      let result = {
        key,
        messageTimestamp,
        pushName,
        broadcast,
        message,
      };
      if (result?.message?.imageMessage) {
        let mimetype = result?.message?.imageMessage?.mimetype;
        let buffer = await downloadMediaMessage(result, "buffer", {});
        let text = result?.message?.imageMessage?.caption;
        return {
          text,
          mimetype,
          buffer,
        };
      } else if (result?.message?.videoMessage) {
        let mimetype = result?.message?.videoMessage?.mimetype;
        let buffer = await downloadMediaMessage(result, "buffer", {});
        let text = result?.message?.videoMessage?.caption;
        return {
          text,
          mimetype,
          buffer,
        };
      } else if (result?.message?.stickerMessage) {
        let mimetype = result?.message?.stickerMessage?.mimetype;
        let buffer = await downloadMediaMessage(result, "buffer", {});
        return {
          mimetype,
          buffer,
        };
      } else if (result?.message?.documentMessage) {
        let mimetype = result?.message?.documentMessage?.mimetype;
        let buffer = await downloadMediaMessage(result, "buffer", {});
        let text = result?.message?.documentMessage?.caption;
        return {
          text,
          mimetype,
          buffer,
        };
      } else if (result?.message?.audioMessage) {
        let mimetype = result?.message?.audioMessage?.mimetype;
        let buffer = await downloadMediaMessage(result, "buffer", {});
        return {
          mimetype,
          buffer,
        };
      }
    } else {
      return "Error unknown type Buffer";
    }
  }

  const sendAudio = async (music, caption, title, thumb, urlFrom) => {
    await Gos.sendMessage(keyJid, {
      audio: { url: music },
      mimetype: "audio/mpeg",
      caption: "",
      contextInfo: {
        externalAdReply: {
          title: title || "",
          body: caption || "",
          thumbnailUrl: thumb || "https://g.top4top.io/p_3315mdtvp0.jpeg",
          mediaType: 2,
          sourceUrl: urlFrom || "https://g.top4top.io/p_3315mdtvp0.jpeg",
        },
      },
    });
  };

  let media = await GetBuffer(msg, type);
  const reply = (teks) => {
    Gos.sendMessage(
      keyJid,
      {
        text: teks,
        contextInfo: {
          mentionedJid: [keyJid],
          forwardingScore: 100,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: `Reply message`,
            body: `Hello world`,
            previewType: "VIDEO",
            thumbnailUrl: "https://g.top4top.io/p_3315mdtvp0.jpeg",
            sourceUrl: "https://whatsapp.com/channel/0029VahyeDI6BIEdqtqlXk1t",
          },
        },
      },
      { quoted: msg },
    );
  };

  const checkBotAdmin = async () => {
    try {
      if (!isGroup) return;
      const metadata = await Gos.groupMetadata(jidGroup);
      let admins = metadata.participants
        .filter((p) => p.admin)
        .map((p) => p.id);
      return admins.includes(botNumber);
    } catch (error) {
      console.log(error);
    }
  };
  const checkAdmin = async () => {
    try {
      if (!isGroup) return;
      const metadata = await Gos.groupMetadata(jidGroup);
      let admins = metadata.participants
        .filter((p) => p.admin)
        .map((p) => p.id);
      return admins.includes(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const isBotAdmin = await checkBotAdmin();
  const isAdmin = await checkAdmin();
  return {
    botName: Gos.user?.name,
    botNumber,
    sender: keyJid,
    user: nameUser,
    isBotAdmin,
    isAdmin,
    isGroup,
    isPremium,
    isOwner,
    userId,
    quoted,
    fcall,
    reply,
    sendAudio,
    sendImgAsSticker,
    sendVideoAsSticker,
    sendInteractiveImageWithButton,
    sendImgInteractive,
    media,
    settings,
  };
}
