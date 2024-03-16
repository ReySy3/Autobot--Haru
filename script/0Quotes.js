module.exports.config = {
  name: "Quotes",
  version: "1.2",
  role: 0,
  credits: "Hazeyy",
  aliases: ["Quotes"], 
  cooldowns: 3,
  hasPrefix: false,
};

const greetings = [
  {
    timer: '  ',
    message: [`  `],
  },
  {
    timer: ' ',
    message: [` `],
  },
  {
    timer: '',
    message: [` `],
  },
];

const quotes = [
  "𝖳𝖾𝖺𝗋𝗌 𝖺𝗋𝖾 𝗐𝗈𝗋𝖽𝗌 𝗍𝗁𝖾 𝗆𝗈𝗎𝗍𝗁 𝖼𝖺𝗇'𝗍 𝗌𝖺𝗒 𝗇𝗈𝗋 𝖼𝖺𝗇 𝗍𝗁𝖾 𝗁𝖾𝖺𝗋𝗍 𝖻𝖾𝖺𝗋. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖭𝖾𝗏𝖾𝗋 𝖿𝖾𝖾𝗅 𝗋𝖾𝗀𝗋𝖾𝗍 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗈𝗐𝗇 𝖽𝖾𝗌𝗂𝖼𝗂𝗈𝗇. 𝖨𝖿 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗇𝗈𝗍 𝗋𝖾𝗌𝗉𝖾𝖼𝗍 𝗒𝗈𝗎𝗋 𝗈𝗐𝗇 𝖽𝖾𝗌𝗂𝖼𝗂𝗈𝗇𝗌, 𝖶𝗁𝗈 𝖾𝗅𝗌𝖾 𝗐𝗂𝗅𝗅? \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒 ",
  "𝖲𝗈𝗆𝖾𝗍𝗂𝗆𝖾𝗌 𝖨𝗍𝗌 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗈 𝖻𝖾 𝖺𝗅𝗈𝗇𝖾 𝗇𝗈𝖻𝗈𝖽𝗒 𝖼𝖺𝗇 𝗁𝗎𝗋𝗍 𝗒𝗈𝗎. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖡𝖾𝗁𝗂𝗇𝖽 𝖾𝗏𝖾𝗋𝗒 𝗌𝗐𝖾𝖾𝗍 𝗌𝗆𝗂𝗅𝖾, 𝖳𝗁𝖾𝗋𝖾 𝗂𝗌 𝖺 𝖻𝗂𝗍𝗍𝖾𝗋 𝗌𝖺𝖽𝗇𝖾𝗌𝗌 𝗍𝗁𝖺𝗍 𝗇𝗈 𝗈𝗇𝖾 𝖼𝖺𝗇 𝖾𝗏𝖾𝗋 𝗌𝖾𝖾 𝖺𝗇𝖽 𝖿𝖾𝖾𝗅. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖧𝖾𝖺𝖽𝗌 𝗎𝗉, 𝖲𝗍𝖺𝗒 𝗌𝗍𝗋𝗈𝗇𝗀, 𝖥𝖺𝗄𝖾 𝖺 𝗌𝗆𝗂𝗅𝖾, 𝗆𝗈𝗏𝖾 𝗈𝗇. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖶𝖾 𝖺𝗅𝗅 𝖼𝗋𝖾𝖺𝗍𝖾 𝖿𝗂𝖼𝗍𝗂𝗈𝗇𝗌 𝗍𝗈 𝗁𝗂𝖽𝖾 𝗈𝗎𝗋 𝗉𝖺𝗂𝗇. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖦𝗈 𝗐𝗁𝖾𝗋𝖾 𝗒𝗈𝗎 𝖿𝖾𝖾𝗅 𝗆𝗈𝗌𝗍 𝖺𝗅𝗂𝗏𝖾. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖣𝗈𝗇'𝗍 𝖿𝗈𝗋𝗀𝖾𝗍 𝗍𝗈 𝖿𝗈𝗅𝗅𝗈𝗐 - https://www.facebook.com/Hazeyy0",
  "𝖬𝗒 𝖲𝗂𝗅𝖾𝗇𝖼𝖾 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝗐𝗈𝗋𝖽 𝖥𝗈𝗋 𝗆𝗒 𝗉𝖺𝗂𝗇 \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖬𝗒 𝖢𝗋𝖾𝖺𝗍𝗈𝗋 𝗂𝗌 - https://www.facebook.com/Hazeyy0",
  "𝖨𝗍 𝗁𝗎𝗋𝗍𝗌 𝖻𝗎𝗍 𝗂𝗍'𝗌 𝗈𝗄... 𝖨'𝗆 𝗎𝗌𝖾𝖽 𝗍𝗈 𝗂𝗍 \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖳𝗁𝖾𝗋𝖾 𝗂𝗌 𝗇𝗈𝗍𝗁𝗂𝗇𝗀 𝗆𝗈𝗋𝖾 𝗉𝖺𝗂𝗇𝖿𝗎𝗅 𝗂𝗇 𝗍𝗁𝗂𝗌 𝗐𝗈𝗋𝗅𝖽𝗌 𝗍𝗁𝖺𝗇 𝗍𝗈 𝖻𝖾 𝗂𝗇 𝗅𝗈𝗏𝖾 𝗐𝗂𝗍𝗁 𝗌𝗈𝗆𝖾𝗍𝗁𝗂𝗇𝗀 𝗍𝗁𝖺𝗍 𝗇𝖾𝗏𝖾𝗋 𝖼𝖺𝗇 𝖻𝖾. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖭𝗈𝗍𝗁𝗂𝗇𝗀 𝗈𝗇 𝖾𝖺𝗋𝗍𝗁 𝗂𝗌 𝗉𝖾𝗋𝗆𝖺𝗇𝖾𝗇𝗍, 𝖭𝗈𝗍 𝖾𝗏𝖾𝗇 𝗒𝗈𝗎𝗋 𝗌𝗎𝖿𝖿𝖾𝗋𝗂𝗇𝗀. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖭𝗈 𝗈𝗇𝖾 𝗐𝗂𝗅𝗅 𝗌𝖾𝖾 𝗒𝗈𝗎𝗋 𝗌𝗍𝗋𝗎𝗀𝗀𝗅𝖾𝗌, 𝖭𝗈 𝗈𝗇𝖾 𝗐𝗂𝗅𝗅 𝖿𝖾e𝗅 𝗒𝗈𝗎𝗋 𝗉𝖺𝗂𝗇 𝖺𝗇𝖽 𝗌𝗈𝗋𝗋𝗈𝗐 𝖻𝗎𝗍 𝖺𝗅𝗅 𝗈𝖿 𝗍𝗁𝖾𝗆 𝗐𝗂𝗅𝗅 𝗌𝖾𝖾 𝗒𝗈𝗎𝗋 𝗆𝗂𝗌𝗍𝖺𝗄𝖾𝗌 𝖺𝗇𝖽 𝗇𝖾𝗏𝖾𝗋 𝖿𝗈𝗋𝗀𝖾𝗍 𝗂𝗍. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖲𝗈𝗆𝖾𝗍𝗂𝗆𝖾𝗌 𝗂𝗍'𝗌 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗈 𝗅𝗂𝗏𝖾 𝖺𝗅𝗈𝗇𝖾. 𝖳𝗁𝖺𝗇 𝗍𝗈 𝖻𝖾 𝗉𝗅𝖺𝗒𝖾𝖽 𝖻𝗒 𝗐𝗋𝗈𝗇𝗀 𝗉𝖾𝗈𝗉𝗅𝖾. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖨𝗍'𝗌 𝖺𝗆𝖺𝗓𝗂𝗇𝗀 𝗁𝗈𝗐 𝗌𝗈𝗆𝖾𝗈𝗇𝖾 𝖼𝖺𝗇 𝖻𝗋𝖾𝖺𝗄 𝗒𝗈𝗎𝗋 𝗁𝖾𝖺𝗋𝗍, 𝖠𝗇𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗌𝗍𝗂𝗅𝗅 𝗅𝗈𝗏𝖾 𝗍𝗁𝖾𝗆 𝗐𝗂𝗍𝗁 𝖺𝗅𝗅 𝗍𝗁𝖾 𝗅𝗂𝗍𝗍𝖾𝗅 𝗉𝗂𝖾𝖼𝖾𝗌. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",
  "𝖬𝗒 𝖤𝗒𝖾𝗌 𝗋𝖾𝖿𝗎𝗌𝖾 𝗍𝗈 𝗐𝖺𝗍𝖼𝗁 𝗒𝗈𝗎 𝗅𝖾𝖺𝗏𝖾, 𝖲𝗈 𝗍𝖾𝖺𝗋𝗌 𝗐𝗂𝗅𝗅 𝖻𝗅𝗎𝗋 𝗍𝗁𝖾 𝗆𝖾𝗆𝗈𝗋𝗒. \n\n- 𝖧𝖺𝗓𝖾𝗒𝗒",

];

module.exports.onLoad = (o) =>
  setInterval(() => {
    const randomMessage = (array) => array[Math.floor(Math.random() * array.length)];
    const randomQuote = randomMessage(quotes);
    const currentHour = new Date(Date.now() + 1200000).getHours();

    const currentGreeting = greetings.find((item) => {
      const [hour] = item.timer.split(':').map(Number);
      return currentHour === hour;
    });

    if (currentGreeting) {
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(randomMessage(currentGreeting.message), threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }

    // Send automated quote every minute
    if (currentHour !== 0) { // Exclude midnight hour
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(`╔══ஓ๑♡๑ஓ══╗\n\n         𝗤𝘂𝗼𝘁𝗲𝘀\n\n╚══ஓ๑♡๑ஓ══╝\n\n ${randomQuote} `, threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }
  }, 1200000 ); // Send every minute ( 1200000 milliseconds = 20mins)

module.exports.run = (o) => {};
