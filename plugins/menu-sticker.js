let handler = async (m, { command, text }) => m.reply(`⦓           ⦓🏆⦔          ⦔ـ
⌟🖼⌜ قـسـم الاستيكرات
⦓           ⦓🏆⦔          ⦔ـ
🧨❯ ⏐ .اسـتـيـكر
☫ ⌟لتحول الصوره لملصق كامل⌜
🧨❯ ⏐ .مـلـصـق
☫ ⌟لتحويل الفيديو لملصق متحرك⌜
🧨❯ ⏐.دائري
☫ ⌟لعمل استيكرات بشكل دائري⌜
🧨❯ ⏐ .سـرقـه
☫ ⌟يغير حقوق الملصقات⌜
🧨❯ ⏐ .فـلـتـر
☫ ⌟يعمل فلتر للملصقات⌜
🧨❯ ⏐ .تـاثـيـر
☫ ⌟يعمل فلتر للملصقات⌜
🧨❯ ⏐ .صـفـع
☫ ⌟لصفع الناس الرخمه 😡❤⌜
🧨❯ ⏐ .طـبـطـبـه
☫ ⌟لطبطبه علي الناس الكيوت👾⌜
🧨❯ ⏐ .اسـتـيك
☫ ⌟يحول النص لملصق ⌜
🧨❯ ⏐ .ستاكت
☫ ⌟يحول النص لملصق⌜
🧨❯ ⏐ .دمـج ☺+😈
☫ ⌟يدمج اتنين من الايمواجي⌜
🧨❯ ⏐ .نــرد
☫ ⌟جرب حظك كده 😀⌜
> Ben10`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['اوامر <teks>?']
handler.tags = ['اوامر', 'fun']
handler.command = /^(قسم_الاستيكرات|س9)$/i

export default handler