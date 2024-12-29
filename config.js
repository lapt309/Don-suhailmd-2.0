const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2630713551833";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_09_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWZTTGlMcFpadXFUdVJiSmZ1eUhjYzgrWndsc3FPalc3czIyenVtRVlhMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM1NTE4MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGRThCREYxQzZFOENFMkJFNEIwQkUzRkQxMzQ3QkFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQ0MTc3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJISjgwaHJ1eVRTYTdRYjJBQ3lZTm53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0NzJkODhmLTljNDYtNDcyZi05ZTNjLTYwODNkNmZlOTg4MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxOTksXG4gICAgICAxMTEsXG4gICAgICAxODEsXG4gICAgICAxMTgsXG4gICAgICAxODcsXG4gICAgICAyMTcsXG4gICAgICAyMTMsXG4gICAgICA5NCxcbiAgICAgIDIxMixcbiAgICAgIDk2LFxuICAgICAgMTkwLFxuICAgICAgMTgyLFxuICAgICAgNjcsXG4gICAgICA3MCxcbiAgICAgIDcyLFxuICAgICAgMjM2LFxuICAgICAgMjE1LFxuICAgICAgMjM3LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMTAsXG4gICAgICAyNCxcbiAgICAgIDIwOCxcbiAgICAgIDExOSxcbiAgICAgIDE5LFxuICAgICAgMjQ5LFxuICAgICAgMyxcbiAgICAgIDIxNixcbiAgICAgIDEsXG4gICAgICAxNjcsXG4gICAgICAxNDgsXG4gICAgICA2OSxcbiAgICAgIDEyMCxcbiAgICAgIDEwMixcbiAgICAgIDM2LFxuICAgICAgMTE1LFxuICAgICAgOTcsXG4gICAgICAyMzcsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTQ0MUJMN1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzU1MTgzMzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkfJqtKT4bSb4bSH4bSFXCIsXG4gICAgXCJsaWRcIjogXCIyNzUyMjYyODU4NzUzMTM6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNreUtZR0VPWDZ3cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzRll4SmtFMkVPdlNaTVp4ODJQN3BKOUg3SkVOZHZXNG9qcjZSSE9hS2hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImIzSXF4NzZwUUI0cXkvcGhBZEFSSTRyeE8ybmxaLzlDR1VqdFhselhaQk1Xd1VOWnkyV2xxd1VWRVBlQW5HVVVOMWtyaXZyVGhhd0htRE1vVjZEMUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJLaWowdTlySlMwQzQ5ZVhFbGpiemtldFpOVDZ2Ti9zZTBKOXBCYXdXMEZkN0pVZTZHSUVRa2dxU1BQQWNlOVdZVElnK1EwbEZhbU9aREdkL003VmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzU1MTgzMzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NDQxNzY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHYzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdjMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDektseXF4RkFNSkwyb1UvcmVqT3Q1UVpVK0QyVVErV0UzWUY2VkJleDl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2OTE0ODg3ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Don-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
