let handler = async (m, { command, text }) => m.reply(`⦓           ⦓🏆⦔          ⦔ـ
⌟🔊⌜ قـسـم الاصـوات 
⦓           ⦓🏆⦔          ⦔ـ
🎙❯ ⏐ .عـمـيـق 
☫ ⌟يخلي الريك عميق ⌜
🎙❯ ⏐ .مـنـفـوخ 
☫ ⌟يخلي الصوت منفوخ ⌜
🎙❯ ⏐ .تخين 
☫ ⌟يخلي الصوت تخين ⌜
🎙❯ ⏐ .صـاخـب 
☫ ⌟يخلي الصوت صاحب ⌜
🎙❯ ⏐ .تخينن
☫ ⌟يخلي الصوت تخين جداً⌜
🎙❯ ⏐ .سـريـع 
☫ ⌟يخلي الصوت سريع ⌜
🎙❯ ⏐ .رفـيـع 
☫ ⌟يخلي الصوت رفيع ⌜
🎙❯ ⏐ .روبـوت 
☫ ⌟يخلي الصوت روبوت ⌜
🎙❯ ⏐ .نـاعـم 
☫ ⌟يخلي الصوت ناعم ⌜
🎙❯ ⏐ .سـنـجـاب 
☫ ⌟يخلي الصوت مسنجب ⌜
> Ben10`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['اوامر <teks>?']
handler.tags = ['اوامر', 'fun']
handler.command = /^(قسم_الاصوات|س7)$/i

export default handler