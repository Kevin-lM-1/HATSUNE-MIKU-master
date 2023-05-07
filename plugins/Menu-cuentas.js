import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
//let vn = './media/naa.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆ 
┃ ✯〘𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${taguser}
┃ ✯│▢ᴏᴡɴᴇʀ:kev
┃ ✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/573001382233
┃ ✯│▢ғᴇᴄʜᴀ:${week}, ${date}
┃ ✯│▢ᴛɪᴇᴍᴘᴏ:ᴀᴄᴛɪᴠᴏ:${uptime}
┃ ✯│▢ᴜsᴜᴀʀɪᴏs:${rtotalreg}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃ ⛥╭────────────── 
┃ ⛥├「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
┃ ⛥├❏☘️http://wa.me/573001382233」
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim()
let buttons = [
{ buttonId: '/donar', buttonText: { displayText: '𝐃𝐎𝐍𝐀𝐑' }, type: 1 },
{ buttonId: '/yovani', buttonText: { displayText: '𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '⛄𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯🍁',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^cuentasoficiales|cuentasoficiales\$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
