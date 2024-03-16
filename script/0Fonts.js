module.exports.config = {
  name: "Fonts",
  version: "1.8",
  role: 0,
  credits: "Hazeyy",
  aliases: ["fonts", "Fonts"], 
  cooldowns: 3,
  hasPrefix: false,
};

const availableFonts = ["𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳",
  // Other fonts...
  "𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃",
  // Other fonts...
  "𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇",
  // Other fonts...
  "𝙖 𝙗 𝙘 𝙙 𝙚 𝙛 𝙜 𝙝 𝙞 𝙟 𝙠 𝙡 𝙢 𝙣 𝙤 𝙥 𝙦 𝙧 𝙨 𝙩 𝙪 𝙫 𝙬 𝙭 𝙮 𝙯",
  // Other fonts...
  "🅐︎ 🅑︎ 🅒︎ 🅓︎ 🅔︎ 🅕︎ 🅖︎ 🅗︎ 🅘︎ 🅙︎ 🅚︎ 🅛︎ 🅜︎ 🅝︎ 🅞︎ 🅟︎ 🅠︎ 🅡︎ 🅢︎ 🅣︎ 🅤︎ 🅥︎ 🅦︎ 🅧︎ 🅨︎ 🅩︎",
  // Other fonts...
  "𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟",
  // Other fonts...
  "ᴀ ʙ ᴄ ᴅ ᴇ ғ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ s ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ",
  // Other fonts...
  "ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ᵠ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ",
  // Other fonts...
  "ᗩ ᗷ ᑕ ᗪ ᗴ ᖴ ᘜ ᕼ I ᒍ K ᒪ ᗰ ᑎ O ᑭ ᑫ ᖇ Տ T ᑌ ᐯ ᗯ ᙭ Y ᘔ",
  // Other fonts...
  "a͜͡ b͜͡ c͜͡ d͜͡ e͜͡ f͜͡ g͜͡ h͜͡ i͜͡ j͜͡ k͜͡ l͜͡ m͜͡ n͜͡ o͜͡ p͜͡ q͜͡ r͜͡ s͜͡ t͜͡ u͜͡ v͜͡ w͜͡ x͜͡ y͜͡ z͜͡",
  // Other fonts...
  "🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿 ",
  // Other fonts...
  "🅰︎ 🅱︎ 🅲︎ 🅳︎ 🅴︎ 🅵︎ 🅶︎ 🅷︎ 🅸︎ 🅹︎ 🅺︎ 🅻︎ 🅼︎ 🅽︎ 🅾︎ 🅿︎ 🆀︎ 🆁︎ 🆂︎ 🆃︎ 🆄︎ 🆅︎ 🆆︎ 🆇︎ 🆃︎ 🆉︎",
  // Other fonts...
  "卂 乃 匚 ᗪ 乇 千 ᘜ 卄 | ﾌ Ҝ ㄥ 爪 几 ㄖ 卩 Ҩ 尺 丂 ㄒ ㄩ ᐯ 山 乂 ㄚ 乙",
  // Other fonts...
  "ḁͦ b̥ͦ c̥ͦ d̥ͦ e̥ͦ f̥ͦ g̥ͦ h̥ͦ i̥ͦ j̥ͦ k̥ͦ l̥ͦ m̥ͦ n̥ͦ o̥ͦ p̥ͦ q̥ͦ r̥ͦ s̥ͦ t̥ͦ u̥ͦ v̥ͦ w̥ͦ x̥ͦ y̥ͦ z̥ͦ",
  // Other fonts...
  "a͟ b͟ c͟ d͟ e͟ f͟ g͟ h͟ i͟ j͟ k͟ l͟ m͟ n͟ o͟ p͟ q͟ r͟ s͟ t͟ u͟ v͟ w͟ x͟ y͟ z͟",
  // Other fonts...
  "a҈b҈c҈d҈e҈f҈g҈h҈i҈j҈k҈l҈m҈n҈o҈p҈q҈r҈s҈t҈u҈v҈w҈x҈y҈z҈",
  // Other fonts...
  "𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫",
  // Other fonts...
  "𝚊 𝚋 𝚌 𝚍 𝚎 𝚏 𝚐 𝚑 𝚒 𝚓 𝚔 𝚕 𝚖 𝚗 𝚘 𝚙 𝚚 𝚛 𝚜 𝚝 𝚞 𝚟 𝚠 𝚡 𝚢 𝚣",
  // Other fonts...
  "𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃",
  // Other fonts...
  "ꪖ ᥇ ᥴ ᦔ ꫀ ᠻ ᧁ ꫝ 𝓲 𝓳 𝘬 ꪶ ꪑ ꪀ ꪮ ρ 𝘲 𝘳 𝘴 𝓽 ꪊ ꪜ ᭙ ᥊ ꪗ ɀ",
  // Other fonts...
  "𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝  𝖞  𝖟",
  // Other fonts...
  "ꍏ ꌃ ꏳ ꀷ ꏂ ꎇ ꁅ ꀍ ꀤ ꒻ ꀘ ꒒ ꎭ ꈤ ꂦ ᖘ ꆰ ꋪ ꌚ ꓄ ꀎ ꒦ ꅐ ꉧ ꌩ ꁴ",
  // Other fonts...
  "ል ጌ ር ዕ ቿ ቻ ኗ ዘ ጎ ጋ ጕ ረ ጠ ክ ዐ የ ዒ ዪ ነ ፕ ሁ ሀ ሠ ሸ ሃ ጊ",
  // Other fonts...
  "a̶ b̶ c̶ d̶ e̶ f̶ g̶ h̶ i̶ j̶ k̶ l̶ m̶ n̶ o̶ p̶ q̶ r̶ s̶ t̶ u̶ v̶ w̶ x̶ y̶ z̶",
  // Other fonts...
  "a⃠ b⃠ c⃠ d⃠ e⃠ f⃠ g⃠ h⃠ i⃠ j⃠ k⃠ l⃠ m⃠ n⃠ o⃠ p⃠ q⃠ r⃠ s⃠ t⃠ u⃠ v⃠ w⃠ x⃠ y⃠ z⃠",
  // Add more fonts if necessary
  "Ꮧ Ᏸ ፈ Ꮄ Ꮛ Ꭶ Ꮆ Ꮒ Ꭵ Ꮰ Ꮶ Ꮭ Ꮇ Ꮑ Ꭷ Ꭾ Ꭴ Ꮢ Ꮥ Ꮦ Ꮼ Ꮙ Ꮗ ጀ Ꭹ ፚ",
  // Add more fonts...
  "а б c д ё f g н ї j к г ѫ п ѳ p ф я $ т ц ѵ щ ж ч з",
  // Add more fonts...
  "【a】 【b】 【c】 【d】 【e】 【f】 【g】 【h】 【i】 【j】 【k】 【l】 【m】 【n】 【o】 【p】 【q】 【r】 【s】 【t】 【u】 【v】 【w】 【x】 【y】 【z】",
  // Add more fonts...
  "[̲̅a] [̲̅b] [̲̅c] [̲̅d] [̲̅e] [̲̅f] [̲̅g] [̲̅h] [̲̅i] [̲̅j] [̲̅k] [̲̅l] [̲̅m] [̲̅n] [̲̅o] [̲̅p] [̲̅q] [̲̅r] [̲̅s] [̲̅t] [̲̅u] [̲̅v] [̲̅w] [̲̅x] [̲̅y] [̲̅z]",
  // Add more fonts...
  "a̳̿͟͞ b̳̿͟͞ c̳̿͟͞ d̳̿͟͞ e̳̿͟͞ f̳̿͟͞ g̳̿͟͞ h̳̿͟͞ i̳̿͟͞ j̳̿͟͞ k̳̿͟͞ l̳̿͟͞ m̳̿͟͞ n̳̿͟͞ o̳̿͟͞ p̳̿͟͞ q̳̿͟͞ r̳̿͟͞ s̳̿͟͞ t̳̿͟͞ u̳̿͟͞ v̳̿͟͞ w̳̿͟͞ x̳̿͟͞ y̳̿͟͞ z̳̿͟͞",
  // Add more fonts...
  "҉a҉ ҉b҉ ҉c҉ ҉d҉ ҉e҉ ҉f҉ ҉g҉ ҉h҉ ҉i҉ ҉j҉ ҉k҉ ҉l҉ ҉m҉ ҉n҉ ҉o҉ ҉p҉ ҉q҉ ҉r҉ ҉s҉ ҉t҉ ҉u҉ ҉v҉ ҉w҉ ҉x҉ ҉y҉ ҉z҉",
  // Add more fonts...
  "❰a❱ ❰b❱ ❰c❱ ❰d❱ ❰e❱ ❰f❱ ❰g❱ ❰h❱ ❰i❱ ❰j❱ ❰k❱ ❰l❱ ❰m❱ ❰n❱ ❰o❱ ❰p❱ ❰q❱ ❰r❱ ❰s❱ ❰t❱ ❰u❱ ❰v❱ ❰w❱ ❰x❱ ❰y❱ ❰z❱",
  // Add more fonts...
  "ᗩ ᗷ ᑕ ᗪ ᗴ ᖴ ᘜ ᕼ I ᒍ K ᒪ ᗰ ᑎ O ᑭ ᑫ ᖇ Տ T ᑌ ᐯ ᗯ ᙭ Y ᘔ",
  // add more fonts...
  "å ß ¢ Ð ê £ g h Ì j k l m ñ Ö þ q r § † µ v w x ɏ z",
  // add more fonts...
  "ᥲ ᑲ ᥴ ძ ᥱ 𝖿 g һ і ȷ k ᥣ m ᥒ ᥆ ⍴ 𝗊 r s 𝗍 ᥙ ᥎ ᥕ ᥊ ᥡ z",
  // add more fonts...
  "ꪖ ꪉ ᨶ ᦔ ꫀ ᠻ ᦋ ꫝ ỉ ᧒ ƙ ꪶ ꪑ ᭢ ꪮ ᩏ ᧁ ꪹ క ᡶ ꪊ ꪜ ᭙ ꪗ ɀ",
  // add more fonts...
  "Ꭺ Ᏼ Ꮯ Ꭰ Ꭼ Ғ Ꮐ Ꮋ Ꮖ Ꭻ Ꮶ Ꮮ Ꮇ Ν ϴ Ꮲ Ϙ Ꭱ Տ Ͳ Ⴎ Ꮩ Ꮤ Х Ꮍ Ꮓ",
  //add more fonts...
  "a⃤ b⃤ c⃤ d⃤ e⃤ f⃤ g⃤ h⃤  I⃤ j⃤ k⃤ l⃤ m⃤ n⃤ O⃤ p⃤ q⃤ r⃤ s⃤ t⃤ u⃤ v⃤ w⃤ x⃤ y⃤ z⃤", 
  //add more fonts...
  "a⃢ b⃢ c⃢ d⃢ e⃢ f⃢ g⃢ h⃢ I⃢ j⃢ k⃢ l⃢ m⃢  n⃢ O⃢ p⃢ q⃢ r⃢ s⃢ t⃢ u⃢ v⃢ w⃢ x⃢ y⃢ z⃢",
  //add more fonts...
  "ǟ ɮ ƈ ɖ ɛ ʄ ɢ ɦ ɨ ʝ ӄ ʟ ʍ ռ օ ք զ ʀ ֆ ȶ ʊ ʋ ա Ӽ ʏ ʐ",];

const instructions = `
𝙸𝚗𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚜
━━━━━━━━━━━━━━━━━━━━
[1] 𝚄𝚜𝚊𝚐𝚎: 𝚏𝚘𝚗𝚝 ( 𝚗𝚞𝚖𝚋𝚎𝚛 ) 𝚢𝚘𝚞𝚛 𝚝𝚎𝚡𝚝 𝚑𝚎𝚛𝚎
'👩‍💻 𝙿𝚕𝚎𝚊𝚜𝚎 𝙵𝚘𝚕𝚕𝚘𝚠: https://www.facebook.com/Hazeyy0'

𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙵𝚘𝚗𝚝𝚜
━━━━━━━━━━━━━━━━━━━━
1. 𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿 
2. 𝘚𝘢𝘯𝘴 𝘚𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤
3. 𝗠𝗮𝘁𝗵 𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀
4. 𝙎𝙖𝙣𝙨
5. 🅒︎🅘︎🅡︎🅒︎🅛︎🅔︎🅢︎
6. 𝕲𝖔𝖙𝖍𝖎𝖈
7. sᴍᴀʟʟ ᴄᴀᴘs
8. ᵗⁱⁿʸ
9. ᑕOᗰIᑕ
10. C͜͡l͜͡o͜͡u͜͡d͜͡s͜͡
11. 🇸 🇵 🇪 🇨 🇮 🇦 🇱 
12. 🆂︎🆀︎🆄︎🅰︎🆁︎🅴︎🆂︎
13. 爪卂几ᘜ卂
14. B̥ͦu̥ͦb̥ͦb̥ͦl̥ͦe̥ͦs̥ͦ
15. U͟n͟d͟e͟r͟l͟i͟n͟e͟
16. B҈i҈r҈d҈s҈
17. 𝕆𝕦𝕥𝕝𝕚𝕟𝕖
18. 𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛
19. 𝓢𝓬𝓻𝓲𝓹𝓽
20. ꪖꪀᦔꪖꪶꪊᥴ𝓲ꪖ
21. 𝕮𝖊𝖗𝖙𝖎𝖋𝖎𝖈𝖆𝖙𝖊 𝕱𝖔𝖓𝖙
22. ꒒ꍏꀷꌩꌃꀎꁅ
23. ዪሁክቿነ
24. S̶t̶r̶i̶k̶e̶
25. S⃠T⃠O⃠P⃠
26. ᎶᏝᎥᏖፈᏂ ᎦᏗᎥᏒᎩᏖᏗᏝᏋ
27. Cѳѳг Cчяїггїc
28.【B】【r】【a】【c】【k】【e】【t】【s】
29. [̲̅W][̲̅r][̲̅a][̲̅p][̲̅p][̲̅e][̲̅r][̲̅s]
30. W̳̿͟͞r̳̿͟͞a̳̿͟͞p̳̿͟͞p̳̿͟͞e̳̿͟͞r̳̿͟͞s̳̿͟͞ L̳̿͟͞i̳̿͟͞n̳̿͟͞e̳̿͟͞s̳̿͟͞,L̳̿͟͞i̳̿͟͞n̳̿͟͞e̳̿͟͞s̳̿͟͞,L̳̿͟͞i̳̿͟͞n̳̿͟͞e̳̿͟͞s̳̿͟͞
31. ҉G҉҉l҉҉i҉҉t҉҉c҉҉h҉ ҉F҉҉i҉҉r҉҉e҉҉w҉҉o҉҉r҉҉k҉҉s҉
32. ❰H❱❰e❱❰a❱❰v❱❰y❱ ❰A❱❰r❱❰r❱❰o❱❰w❱ ❰B❱❰r❱❰a❱❰c❱❰k❱❰e❱❰t❱❰s❱
33. ᑕᗩᖇTOOᑎ
34. ÇÄ§†LÈ
35. ᥴᥙ𝗍ᥱ
36. ᠻꪖ᭢ᡶꪖకꪗ
37. ΝϴͲᎬᏴϴϴᏦ
38. t⃤r⃤i⃤a⃤d⃤
39. r⃢      e⃢      c⃢      t⃢      a⃢
40. ֆօʀƈɛʀɛʀ
`;

const normalCharacters = "abcdefghijklmnopqrstuvwxyz";
const BigCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const convertToFont = (text, font) => {
  const spacedFont = font.split(" ");

  const charMap = {};
  normalCharacters.split("").forEach((char, index) => {
    charMap[char] = spacedFont[index] || char;
  });

  BigCharacters.split("").forEach((char, index) => {
    charMap[char] = spacedFont[index] || char;
  });

  const characters = text.split("");
  let convertedText = "";

  characters.forEach((char) => {
    convertedText += charMap[char] || char;
  });

  return convertedText;
};

module.exports.run = async function ({ api, event, args }) {

  if (!args[0]) {
    api.sendMessage(instructions, event.threadID, event.messageID);
    return;
  }

  const textToConvert = args.slice(1).join(" ");
  const fontIndex = parseInt(args[0], 10) - 1;

  if (isNaN(fontIndex) || fontIndex < 0 || fontIndex >= availableFonts.length) {
    api.sendMessage(
      "🚫 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝙵𝚘𝚗𝚝 𝙽𝚞𝚖𝚋𝚎𝚛! 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚑𝚘𝚘𝚜𝚎 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚏𝚘𝚗𝚝 𝚗𝚞𝚖𝚋𝚎𝚛.",
      event.threadID,
      event.messageID
    );
    return;
  }

  const fontName = availableFonts[fontIndex];
  const convertedText = convertToFont(textToConvert, fontName);

  if (convertedText) {
    api.sendMessage(
      `» 𝙵𝙾𝙽𝚃𝚂 «\n\n [ # ${fontIndex + 1} ]\n\n> ${convertedText} <`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      "🚫 𝙵𝚊𝚒𝚕𝚎𝚍 𝚝𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚝𝚑𝚎 𝚝𝚎𝚡𝚝.",
      event.threadID,
      event.messageID
    );
  }
};
