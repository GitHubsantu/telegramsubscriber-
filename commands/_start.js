/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  api.deletemessage({
    chat_id: chat_id,
    message_id: message_id
  })
}


Api.sendPhoto({
  photo: "https://telegramsubs.in/bot/IMG_20221126_005252_132.jpg", // it is picture!
  caption: " *π³ You Can Pay via Your Favourite App ππ»\n\nβ Your Transection is 100%  secure π\nβ  Pay via Link π ,\nβ  Pay via Contact to Admin π*\n\n",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "π­ PayTM Wallet", callback_data: "PayTM" },{text: "β οΈ Help", callback_data: "Help"},
    ]]}
});

var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(2)
  Bot.sendMessageToChatWithId(1356884871,
    "*π­ New User *\n\n π¨βπΎUser = "+user.first_name+"\n\nπ³ User Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
