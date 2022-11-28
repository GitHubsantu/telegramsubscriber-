/*CMD
  command: /onSuc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = User.getProperty("id")
HTTP.get( {
        url: "https://full2sms.in/gateway/paymentStatus?order_id="+id+"&gpin=55535510297544810155559",
success: "/onSuc1"
      } )
