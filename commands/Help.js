/*CMD
  command: Help
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *How Can I Help You*
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*✅ Message Sent To Admin*")
Bot.sendMessageToChatWithId(1356884871, "*⚠️ New Support Message\n\n🤴Name:*  "+user.first_name+"\n*💡Id:* "+user.telegramid+"\n👨‍💻User: @"+user.username+"\n\n*📥 Message: * _"+message+"_",{disable_web_page_preview:true})
