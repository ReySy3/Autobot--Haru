const axios = require("axios");

module.exports.config = {
  name: "Meta",
  version: "3.8",
  role: 0,
  credits: "Hazeyy",
  aliases: ["Meta", "meta"], 
  cooldowns: 3,
  hasPrefix: false,
};

async function convertVoiceToText(audioUrl, api, event) {
  try {
    api.sendMessage("🔊 | 𝙼𝚎𝚝𝚊 𝙰𝙸 𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚊𝚞𝚍𝚒𝚘, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", event.threadID, event.messageID);

    const response = await axios.get(`https://hazeyy-merge-apis-b924b22feb7b.herokuapp.com/api/try/voice2text?url=${encodeURIComponent(audioUrl)}`);
    const text = response.data.transcription;

    if (text) {
      const formattedText = formatFont(text);
      api.sendMessage(`🐾 𝐌𝐞𝐭𝐚 ( 𝐀𝐈 ) 𝐂𝐨𝐧𝐓𝐞𝐱𝐭\n\n ${formattedText}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝚄𝚗𝚊𝚋𝚕𝚎 𝚝𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚊𝚞𝚍𝚒𝚘.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚗𝚐 𝚊𝚞𝚍𝚒𝚘:", error);
    api.sendMessage("🔴 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚗𝚐 𝚊𝚞𝚍𝚒𝚘:", event.threadID, event.messageID);
  }
}

async function convertImageToCaption(imageURL, api, event) {
  try {
    api.sendMessage("📷 | 𝙼𝚎𝚝𝚊 𝙰𝙸 𝚛𝚎𝚌𝚘𝚐𝚗𝚒𝚝𝚒𝚘𝚗𝚒𝚗𝚐 𝚒𝚖𝚊𝚐𝚎, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", event.threadID, event.messageID);

    const response = await axios.get(`https://hazeyy-merge-apis-b924b22feb7b.herokuapp.com/api/image2text/new?image=${encodeURIComponent(imageURL)}`);
    const caption = response.data.caption.generated_text;

    if (caption) {
      const formattedCaption = formatFont(caption);
      api.sendMessage(`📷 𝐌𝐞𝐭𝐚 ( 𝐀𝐈 ) 𝐈𝐦𝐚𝐠𝐞 𝐂𝐨𝐧𝐓𝐞𝐱𝐭\n\n ${formattedCaption}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝙵𝚊𝚒𝚕𝚎𝚍 𝚝𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝙴𝚛𝚛𝚘𝚛 𝚒𝚖𝚊𝚐𝚎 𝚛𝚎𝚌𝚘𝚐𝚗𝚒𝚝𝚒𝚘𝚗:", error);
    api.sendMessage("🔴 𝙴𝚛𝚛𝚘𝚛 𝚒𝚖𝚊𝚐𝚎 𝚛𝚎𝚌𝚘𝚐𝚗𝚒𝚝𝚒𝚘𝚗", event.threadID, event.messageID);
  }
}

module.exports.run = async function ({ api, event, args }) {

  if (event.type === "message_reply") {
    if (event.messageReply.attachments[0]) {
      const attachment = event.messageReply.attachments[0];

      if (attachment.type === "audio") {
        const audioUrl = attachment.url;
        convertVoiceToText(audioUrl, api, event);
        return;
      } else if (attachment.type === "photo") {
        const imageURL = attachment.url;
        convertImageToCaption(imageURL, api, event);
        return;
      }
    }
  }

  const inputText = args.join(' ');

  if (!inputText) {
    return api.sendMessage("✨ 𝙷𝚎𝚕𝚕𝚘 𝙸 𝚊𝚖 𝙻𝚕𝚊𝙼𝚊 70𝚋 𝙰𝙸 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚎𝚝𝚊 𝙰𝙸\n\n𝙷𝚘𝚠 𝚖𝚊𝚢 𝚒 𝚊𝚜𝚜𝚒𝚜𝚝 𝚢𝚘𝚞 𝚝𝚘𝚍𝚊𝚢?", event.threadID, event.messageID);
  }

  api.sendMessage("🗨️ | 𝙼𝚎𝚝𝚊 𝙰𝙸 𝚒𝚜 𝚝𝚑𝚒𝚗𝚔𝚒𝚗𝚐...", event.threadID, event.messageID);

  try {
    const response = await axios.get(`https://hazeyy-merge-apis-b924b22feb7b.herokuapp.com/api/llamav3/chat?prompt=${inputText}`);
    if (response.status === 200) {
      const generatedText = response.data.response;
      const formattedText = formatFont(generatedText);
      api.sendMessage(`🐾 𝐌𝐞𝐭𝐚 ( 𝐀𝐈 )\n\n🖋️ 𝐀𝐬𝐤: '${inputText}'\n\n${formattedText}`, event.threadID, event.messageID);
    } else {
      console.error("🔴 𝙴𝚛𝚛𝚘𝚛 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚏𝚛𝚘𝚖 𝙼𝚎𝚝𝚊 𝙰𝙸 𝙰𝙿𝙸.");
    }
  } catch (error) {
    console.error("🔴 𝙴𝚛𝚛𝚘𝚛:", error);
  }
};

function formatFont(text) {
  const fontMapping = {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}
