import fetch from 'node-fetch';
import fs from 'fs';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) {
    await conn.reply(m.chat, `❗ يرجى استخدام الأمر مع رابط فيديو من تيكتوك\nمثال: ${usedPrefix + command} https://vt.tiktok.com/ZS27YRHvg/`, m);
    return;
  }

  // إرسال رمز تعبيري كإشارة لبدء التحميل
  await conn.reply(m.chat, '⏳ جاري التحميل...', m);

  try {
    // جلب رابط الفيديو
    let mediaURL = await elsony(text);
    if (!mediaURL) throw new Error('❗ لم يتم العثور على رابط تحميل الفيديو');

    // تحميل الفيديو
    const videoPath = './tmp/video.mp4';
    const audioPath = './tmp/audio.mp3';

    await downloadFile(mediaURL, videoPath);

    // تحويل الفيديو إلى صوت
    await convertVideoToAudio(videoPath, audioPath);

    // إرسال الفيديو
    await conn.sendFile(m.chat, videoPath, 'video.mp4', '✅ تم تحميل الفيديو بنجاح', m, false, { mimetype: 'video/mp4' });

    // إرسال الصوت
    await conn.sendFile(m.chat, audioPath, 'audio.mp3', '✅ تم تحويل الفيديو إلى صوت بنجاح', m, false, { mimetype: 'audio/mpeg' });

    // حذف الملفات المؤقتة
    fs.unlinkSync(videoPath);
    fs.unlinkSync(audioPath);
  } catch (error) {
    await conn.reply(m.chat, `❗ حدث خطأ ما في تحميل الفيديو أو تحويله: ${error.message}`, m);
  }
};

// دالة لجلب رابط الفيديو باستخدام API
async function elsony(text) {
  try {
    let res = await fetch(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('❗ الـ API لم يعيد استجابة صحيحة');
    let json = await res.json();
    if (!json.status || !json.BK9 || !json.BK9.BK9) throw new Error('❗ لم يتم العثور على رابط الفيديو');
    return json.BK9.BK9; // رابط الفيديو
  } catch (error) {
    return false;
  }
}

// دالة لتحميل الفيديو من الرابط
async function downloadFile(url, path) {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
}

// دالة لتحويل الفيديو إلى صوت باستخدام ffmpeg
async function convertVideoToAudio(videoPath, audioPath) {
  const command = `ffmpeg -i "${videoPath}" -q:a 0 -map a "${audioPath}" -y`;
  await execPromise(command);
}

handler.help = ['tiktokdl'];
handler.tags = ['downloader'];
handler.command = /^(تيك|تيكتوك|tiktok)$/i;

export default handler;