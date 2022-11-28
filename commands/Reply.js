/*CMD
  command: Reply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Send His Telegram Id_
  keyboard: 
  aliases: 
CMD*/

var admin = 1356884871
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == Your Id){
User.setProperty("MsgId",message, "string")
Bot.runCommand("Msg_2")
}else{
Bot.sendMessage("You Are Not An Admin")
}
