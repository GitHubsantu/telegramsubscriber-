/*CMD
  command: Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// get EUR / USD cost
var eur_price = CurrencyQuote.fiat.EUR;
var inr_price = CurrencyQuote.fiat.INR;
var btc_price = CurrencyQuote.crypto.BTC;
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*✅ Your Infomation Below\n\n ◉ User : "+user.first_name+"\n\n ◉ Last Name : "+user.last_name+"\n\n ◉ User Id : "+user.telegramid+"\n\n ◉ User Name : @"+user.username+" \n\n ◉ Language Code : "+user.language_code+"\n\n ◉ Balance : "+balance.value().toFixed(2)+" Rs\n\n⚜️Refer And Earn More\n\n*"+eur_price+"\n"+btc_price+"\n"+inr_price)
