/*CMD
  command: PayTM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *๐ฃ๏ธ Send Amount You Want Pay*
  keyboard: 
  aliases: /tryagain
CMD*/

var rand = Libs.Random.randomInt(100, 100000)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*๐ Invaild Value. Enter Only Numeric Value. Try Again๐ /TryAgain*", {
    is_reply: true
  })
  return
}
if (message <0.99) {
  Bot.sendMessage("*โ Min. Deposit Amount Is โน1\nโ Max. Deposit Amount Is โน99*")
  return
}
if (message >9999) {
  Bot.sendMessage("*โ Min. Deposit Amount Is โน1\nโ Max. Deposit Amount Is โน9999*")
  return
}
var rand = Libs.Random.randomInt(1000000000, 9000090000)
User.setProperty("id",rand,"integer")
var idd = User.getProperty("id")
User.setProperty("re", null)
User.setProperty("amount", message, "integer")
var txt =
  "*๐ User : " +
  user.first_name +
  "\n๐ธ Amout : " +
  message +
  " Rupees Only*\n*๐ง  Order ID * : " +
  idd +
  ""
var button = [
  [
    {
      title: "๐ณ๏ธ Pay ",
      url:
        "https://full2sms.in/gateway/processPpayment?token=Z7MHQWVTzku1DUh6c2LtwgF&amount="+message+"&order_id=" +idd+ "&cpin=52535450985555525649"
    }
  ],
  [{ title: "Paid โ", command: "/onSuc" }]
]
Bot.sendInlineKeyboard(button, txt, { is_reply: true })
