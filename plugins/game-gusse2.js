let handler = async (_0x5df725, {
  conn: _0x25aaa8,
  command: _0x25a468,
  usedPrefix: _0x387332
}) => {
  _0x25aaa8.tebakbendera = _0x25aaa8.tebakbendera ? _0x25aaa8.tebakbendera : {};
  let _0x596207 = _0x5df725.chat;
  if (_0x596207 in _0x25aaa8.tebakbendera) {
    _0x25aaa8.reply(_0x5df725.chat, "في سؤال عشان تبقا عارف", _0x25aaa8.tebakbendera[_0x596207][0x0]);
    throw false;
  }
  let _0xf2692c = await (await fetch("https://gist.githubusercontent.com/Brook-88/4d9f832ef47e56aeb470b257dcec4a6a/raw/f3dcd83ee52f9a1e32560f5d68bed95a6047fd8a/%25D8%25B5%25D9%2588%25D8%25B1_%25D8%25A7%25D9%2586%25D9%2585%25D9%258A")).json();
  let _0x421630 = _0xf2692c[Math.floor(Math.random() * _0xf2692c.length)];
  let _0x474502 = ("*" + _0x25a468.toUpperCase() + "*\n  المده *" + 60 .toFixed(0x2) + "* ثانيه\n  استخدم " + _0x387332 + "استسلم للاستسلام\n  الجائزه: " + 0x1387 + " XP\n『Ben10&sasuke-bot』\n     ").trim();
  _0x25aaa8.tebakbendera[_0x596207] = [await _0x25aaa8.sendFile(_0x5df725.chat, _0x421630.img, '', _0x474502, _0x5df725), _0x421630, 0x1387, setTimeout(() => {
    if (_0x25aaa8.tebakbendera[_0x596207]) {
      _0x25aaa8.reply(_0x5df725.chat, "الوقت خلص!\nالاجابه هي *" + _0x421630.name + "*", _0x25aaa8.tebakbendera[_0x596207][0x0]);
    }
    delete _0x25aaa8.tebakbendera[_0x596207];
  }, 0xea60)];
};
handler.help = ["guessflag"];
handler.tags = ["game"];
handler.command = /^احزر/i;
export default handler;