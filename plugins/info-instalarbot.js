let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `╭━━〘𝐓𝐇𝐄_𝐌𝐈𝐊𝐔_𝐁𝐎𝐓〙━━⊷
┃ ⛥╭──────────────      
┃ ⛥│🧿 ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚 gracias por 🥳solicitar la instalación 🤖 del bot gracias por tu preferencia te dejaré los requisitos para 👩‍💻instalar el bot cualquier duda puedes contactarme a mi número personal en caso de si  necesitas ayuda para instalar 🤴
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
┃ ⛥│http://wa.me/573001382233
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷

╭─────────────◆ 
┃✯----𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽----⦿
┃ ⛥╭────────────◆ 
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-𝐇𝐀𝐃𝐄𝐒-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HATSUNE-MIKU.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '🧿ɢɪᴛʜᴜʙ🏓'}, type: 1}, 
{buttonId: `${usedPrefix}yovani`, buttonText: {displayText: '🤴ᴄᴏɴᴛᴀᴄᴛᴏ🧿'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler