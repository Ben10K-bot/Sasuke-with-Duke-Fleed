let handler = async (m, { command, text }) => m.reply(`⦓           ⦓🏆⦔          ⦔ـ
⌟🖼⌜ قـسـم الـمـطـور
⦓           ⦓🏆⦔          ⦔ـ
👑❯ ⏐ .حظر
☫ ⌟يعمل حظر شات⌜
👑❯ ⏐ .فك-الحظر
☫ ⌟يفك حظر الشات⌜
👑❯ ⏐ .المحظورين
☫ ⌟يبعتلك الناس المحظوره⌜
👑❯ ⏐.بلوك
☫ ⌟يعمل بلوك سريع⌜
👑❯ ⏐ .فك-البلوك
☫ ⌟يفك البلوك⌜
👑❯ ⏐ .البلوكات
☫ ⌟يبعتلك قائمة البلوكات⌜
👑❯ ⏐ .بريم
☫ ⌟يخلي مميز في البوت⌜
👑❯ ⏐ .الغاء-البريم
☫ ⌟يشيل البريم⌜
👑❯ ⏐ .بان
☫ ⌟ينعهم من استخدام البوت⌜
👑❯ ⏐ .فك-البان
☫ ⌟يفك البان من البوت⌜
👑❯ ⏐.ريستارت
☫ ⌟يقفل البوت من ريبلايت⌜
👑❯ ⏐ .ضع-صوره
☫ ⌟يخلي البوت يحط صوره⌜t
👑❯ ⏐ .ضيف-عملات
☫ ⌟يضيف للمستخدمين عملات⌜
👑❯ ⏐ .ضيف-طاقه
☫ ⌟يضيف للمستخدمين طاقه⌜
👑❯ ⏐ .موارد
☫ ⌟يعطي موارد غير محدوده⌜
👑❯ ⏐ .اخرج
☫ ⌟يطلع البوت من الجروب⌜
👑❯ ⏐ .اذاعه
☫ ⌟يبعت رساله لجميع الجروبات⌜
👑❯ ⏐ فتح | قفل صوت_بوت
☫ ⌟يقفل و يفتح صوت البوت⌜
👑❯ ⏐ .فتح | قفل مضادالاسبام
☫ ⌟يقفل و يفتح الاسبام⌜
👑❯ ⏐ .فتح | قفل بوت-اللفرعي
☫ ⌟يقفل و يفتح البوتات الفرعي⌜
👑❯ ⏐ .فتح | قفل مضادالخاص
☫ ⌟يقفل و يفتح خاص البوت⌜
👑❯ ⏐ .فتح | قفل مضادالاتصالات
☫ ⌟يقفل و يفتح الاتصالات ب البوت⌜
👑❯ ⏐ .فتح | قفل جروبات
☫ ⌟يقفل و يفتح الجروبات فقط⌜
👑❯ ⏐ .فتح | قفل برايفت
☫ ⌟يقفل و يفتح البرايفت⌜
👑❯ ⏐ .فتح | قفل الصحين
☫ ⌟يقفل و يفتح أمر الصحين⌜👑❯ ⏐فتح | قفل تقيد☫ ⌟يقفل و يفتح تقيد البوت
> Ben10`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
handler.help = ['اوامر <teks>?']
handler.tags = ['اوامر', 'fun']
handler.command = /^(قسم_المطور|س12)$/i

export default handler