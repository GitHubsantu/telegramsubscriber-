/*CMD
  command: /onSuc1
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

if (content == "Invalid Order id!") {
  Bot.sendMessage("No Transaction Found!")
  return
}
var res = JSON.parse(content)
var re = User.getProperty("re")
var id = User.getProperty("id")
var balance = Libs.ResourcesLib.userRes("balance")
var amount = User.getProperty("amount")
var suc = res.status
if (suc == "success") {
     re == "suc"
    Bot.sendMessage("*Amount - " +amount+ " Rupees Only\n \n📛 Your Payment Has Been Successfully Added to Your account 🎭*")
    balance.add(+amount)
    Bot.runCommand("/done")
  } else {
    Api.sendPhoto({
      photo: "https://telegramsubs.in/bot/360_F_51732820_XFm90oSFj7SG7r5apXpyjUUO9l4KXMou.jpg",
      caption:
        "❌ Transaction Failed\n💸 Amout : " +
        amount +
        "\n🍭Order Id : " +
        id +
        "\n💳 Pay Before Trying.."
    })
    User.setProperty("re", "suc", "string")
    return
  }
