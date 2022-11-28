/*CMD
  command: PayTM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🗣️ Send Amount You Want Pay*
  keyboard: 
  aliases: /tryagain
CMD*/

var rand = Libs.Random.randomInt(100, 100000)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild Value. Enter Only Numeric Value. Try Again👉 /TryAgain*", {
    is_reply: true
  })
  return
}
if (message <0.99) {
  Bot.sendMessage("*❌ Min. Deposit Amount Is ₹1\n❌ Max. Deposit Amount Is ₹99*")
  return
}
if (message >9999) {
  Bot.sendMessage("*❌ Min. Deposit Amount Is ₹1\n❌ Max. Deposit Amount Is ₹9999*")
  return
}
var rand = Libs.Random.randomInt(1000000000, 9000090000)
User.setProperty("id",rand,"integer")
var idd = User.getProperty("id")
User.setProperty("re", null)
User.setProperty("amount", message, "integer")
var txt =
  "*🚀 User : " +
  user.first_name +
  "\n💸 Amout : " +
  message +
  " Rupees Only*\n*🚧  Order ID * : " +
  idd +
  ""
var button = [
  [
    {
      title: "🏳️ Pay ",
      url:
        "https://full2sms.in/gateway/processPpayment?token=Z7MHQWVTzku1DUh6c2LtwgF&amount="+message+"&order_id=" +idd+ "&cpin=52535450985555525649"
    }
  ],
  [{ title: "Paid ✅", command: "/onSuc" }]
]
Bot.sendInlineKeyboard(button, txt, { is_reply: true })
