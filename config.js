import {watchFile, unwatchFile} from 'fs';

import chalk from 'chalk';

import {fileURLToPath} from 'url';

import fs from 'fs'; 

import fetch from 'node-fetch';

import axios from 'axios';

import moment from 'moment-timezone';

global.botnumber = "*『Sasuke bot』*"

global.confirmCode = ""

global.owner = [

  ['966547540321', 'Ben10', true], 

  ['201205987431', 'Sasuke bot', true], 
    
  ['201015709086', 'Maikey', true], 


];

global.suittag = ['966547540321'];

global.prems = ['966547540321','201016914633','201205987431'];

global.packname = '☾︎ Sasuke bot ☽︎';

global.author = 'Sasuke bot';

global.mods = '201020075121'

global.vs = 'V2 • 1.0.5'; 

global.wm = 'Sasuke';

global.titulowm = '☾︎ Sasuke bot ☽︎';

global.titulowm2 = `☾︎ Sasuke bot ☽︎`

global.igfg = '☾︎ Sasuke bot ☽︎';

global.wait = '*انتظر جاري التحميل....*\n*قـنـاة الـمـطـور لـمـعـرفـة كـل جـديـد*\n༺ https://whatsapp.com/channel/0029Vap8YXSIt5roxR0a0m21 ༻';

global.imagen1 = fs.readFileSync('./Menu2.jpg');

global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');

global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');

global.imagen4 = fs.readFileSync('./Menu.png');

global.imagen5 = fs.readFileSync('./src/+18.jpg');

global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

global.photoMe = [
'https://qu.ax/EyxEZ.jpg', 'https://qu.ax/EyxEZ.jpg'
];
//* *******Tiempo***************

global.d = new Date(new Date + 3600000);

global.locale = 'ar';

global.dia = d.toLocaleDateString(locale, {weekday: 'long'});

global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});

global.mes = d.toLocaleDateString('ar', {month: 'long'});

global.año = d.toLocaleDateString('ar', {year: 'numeric'});

global.tiempo = d.toLocaleString('ar-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//* ****************************

global.wm2 = `${dia} ${fecha}\n☾︎ Sasuke bot  ☽︎`;

global.gt = '☾︎ Sasuke bot ☽︎';

global.mysticbot = '☾︎ Sasuke bot  ☽︎';

global.md = 'Sasuke bot ';

global.mysticbot = 'Sasuke bot';

global.waitt = '*[ ⏳ ] انتظر جاري التحميل*';

global.waittt = '*[ ⏳ ] انتظر جاري التحميل*';

global.waitttt = '*[ ⏳ ] انتظر جاري التحميل *';

global.nomorown = '966547540321';

global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];

global.cmenut = '❖––––––『';

global.cmenub = '┊✦ ';

global.cmenuf = '╰━═┅═━––––––๑\n';

global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';

global.dmenut = '*❖─┅──┅〈*';

global.dmenub = '*┊»*';

global.dmenub2 = '*┊*';

global.dmenuf = '*╰┅────────┅✦*';

global.htjava = '⫹⫺';

global.htki = '*⭑•̩̩͙⊱•••• ☪*';

global.htka = '*☪ ••••̩̩͙⊰•⭑*';

global.comienzo = '• • ◕◕════';

global.fin = '════◕◕ • •';

global.botdate = `*[ 📅 ] التاريخ:*  ${moment.tz('Africa/cairo').format('DD/MM/YY')}`;

global.bottime = `*[ ⏳ ] الوقت:* ${moment.tz('Africa/cairo').format('HH:mm:ss')}`;

global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};

global.multiplier = 99;

global.flaaa = [

  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',

];

//* ************************

const file = fileURLToPath(import.meta.url);

watchFile(file, () => {

  unwatchFile(file);

  console.log(chalk.redBright('Update \'config.js\''));

  import(`${file}?update=${Date.now()}`);

});