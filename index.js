import {
    makeWASocket,
    DisconnectReason,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
} from "@whiskeysockets/baileys";
import pino from "pino";
import { Boom } from "@hapi/boom";
import readline from "readline";
import fs from "fs";
import chalk from "chalk";
import handlerMessage from "./handle.js";
const UsePairingCode = true;

/* function get input from terminal using readline */
const question = (question) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

/* Function to connect Bailyes */
export default async function Connection() {
    try {
        const { version } = await fetchLatestBaileysVersion(); //Get version
        const { saveCreds, state } = await useMultiFileAuthState(`./session`); //Make session
        const Gos = makeWASocket({
            //Make Socket
            version,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(
                    state.keys,
                    pino({ level: "silent" }),
                ),
            },
            printQRInTerminal: !UsePairingCode,
            logger: pino({ level: "silent" }),
        });
        //Check status registration
        if (
            !state.creds.registered &&
            UsePairingCode &&
            !Gos.authState.creds.registered
        ) {
            let phoneNumber = await question(
                chalk.bgYellow(chalk.black("Please type your WhatsApp number :  ")),
            );
            const code = await Gos.requestPairingCode(phoneNumber);
            console.log(
                `${chalk.bgGreen("This your pairing code => ")}${chalk.bgYellow(code)} `,
            );
        }

        //handle status connection
        Gos.ev.on("connection.update", async (update) => {
            const { connection, lastDisconnect } = update;
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (connection === "close") {
                if (reason === DisconnectReason.badSession) {
                    console.log(`Bad Session File, Please Delete Session and Scan Again`);
                    Connection();
                } else if (reason === DisconnectReason.connectionClosed) {
                    console.log("Connection closed, reconnecting....");
                    Connection();
                } else if (reason === DisconnectReason.connectionLost) {
                    console.log("Connection Lost from Server, reconnecting...");
                    Connection();
                } else if (reason === DisconnectReason.connectionReplaced) {
                    console.log(
                        "Connection Replaced, Another New Session Opened, Please Close Current Session First",
                    );
                    Connection();
                } else if (reason === DisconnectReason.loggedOut) {
                    console.log(`Device Logged Out, Please Scan Again And Run.`);
                    Connection();
                } else if (reason === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    Connection();
                } else if (reason === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    Connection();
                } else Gos.end(`Unknown DisconnectReason: ${reason}|${connection}`);
            }
            if (
                connection == "connecting" ||
                update.receivedPendingNotifications == "false"
            ) {
                console.log(chalk.green("\n🌐Connecting.......\n"));
            }

            if (
                connection == "open" ||
                update.receivedPendingNotifications == "true"
            ) {
                console.log(
                    chalk.yellow.bold(`_________________________
        ${chalk.red("WhatsApp Bot\n")}
${chalk.blue("@author  : @Tan ")}
${chalk.green("@Bot     : Gos")}
${chalk.cyan("@version : 1.0.0")}
_________________________`),
                );

                console.log(chalk.green("\n🔍Wait a message....\n"));
            }
        });

        Gos.ev.on("creds.update", saveCreds); // Save creds

        Gos.ev.on("messages.upsert", async (m) => {
            //Get messages
            try {
                const msg = m.messages[0];
                await handlerMessage(Gos, msg);
            } catch (error) {
                console.log(error);
            }
        });

        Gos.ev.on("group-participants.update", async (anu) => {
            //Grup-participant get status
            try {
                let swelcome = JSON.parse(fs.readFileSync("./data/swelcome.json"));
                let welcome = JSON.parse(fs.readFileSync("./data/welcome.json"));
                let metadata = await Gos.groupMetadata(anu.id);
                const groupDesc = metadata.desc || ""; // get description grup
                let participants = anu.participants;
                let ppgroup;
                for (let num of participants) {
                    try {
                        ppgroup = await Gos.profilePictureUrl(anu.id, "image");
                    } catch {
                        ppgroup = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
                    }
                    if (anu.action == "add") {
                        let welcomeText = swelcome.status
                            ? welcome.text
                            : `WELCOME👋 @${num.split("@")[0]} To ${metadata.subject}\n${groupDesc}`;
                        Gos.sendMessage(anu.id, {
                            image: { url: ppgroup },
                            caption: welcomeText,
                            contextInfo: {
                                externalAdReply: {
                                    title: `Selamat Datang di ${metadata.subject}`,
                                    body: groupDesc,
                                    mediaType: 1,
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: "https://chat.whatsapp.com/DuolGpi5CIWDR8dYO6E1pC",
                                    renderLargerThumbnail: true,
                                },
                            },
                        });
                    } else if (anu.action == "remove") {
                        let farewellText = `GOD BYEE 👋 @${num.split("@")[0]}\nKami akan merindukanmu!`;
                        Gos.sendMessage(anu.id, {
                            image: { url: ppgroup },
                            caption: farewellText,
                            contextInfo: {
                                externalAdReply: {
                                    title: `Sampai Jumpa di ${metadata.subject}`,
                                    body: groupDesc,
                                    mediaType: 1,
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: "https://chat.whatsapp.com/DuolGpi5CIWDR8dYO6E1pC",
                                    renderLargerThumbnail: true,
                                },
                            },
                        });
                    }
                }
            } catch (err) {
                console.log("Eror di bagian Welcome Group " + err);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

Connection();
