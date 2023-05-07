let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯', body: '©ᴏғᴄ-kev﹏✍', sourceUrl: `https://github.com/OFC-YOVANI/HATSUNE-MIKU.git`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯', body: '©ᴏғᴄ-kev﹏✍', sourceUrl: `https://github.com/OFC-YOVANI/HATSUNE-MIKU.git`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
