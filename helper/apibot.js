import axios from "axios";
import TelegramBot from "node-telegram-bot-api";
import QRCode from "qrcode";
import { MyBot } from "./classbot";





export const cheackDataBOT = async (DataFromCilent) => {

  try {

    const bot = new TelegramBot(DataFromCilent.api_Token,{webHook:{autoOpen:false}})
    let webHookURL = process.env.NEXTAUTH_URL + '/api/bot'
    await bot.openWebHook()
    let testWeb = await axios.post(`${process.env.NEXTAUTH_URL}/api/bot${DataFromCilent.api_Token}/setWebhook`,{},{headers : {"Content-type": "application/json"}})
    let rws = await testWeb.data
    console.log(rws);

    await bot.setMyCommands([
      { command: MyBot.$SELECET.START.command, description: MyBot.$SELECET.START.description },
      { command: MyBot.$SELECET.OPTIONS.command, description: MyBot.$SELECET.OPTIONS.description  },
      { command: MyBot.$SELECET.COLORS.PICTURE.command, description: MyBot.$SELECET.COLORS.PICTURE.description  },
      { command: MyBot.$SELECET.COLORS.LINK.command, description: MyBot.$SELECET.COLORS.LINK.description  },
      { command: MyBot.$SELECET.COLORS.VIDEO.command, description: MyBot.$SELECET.COLORS.VIDEO.description },
      { command: MyBot.$SELECET.QR.command, description: MyBot.$SELECET.QR.description },
    ]);

  bot.on("message", async (msg) => {
      const {chat : {id ,first_name } ,text , message_id , video , photo } = msg
      const appendCount = text?.slice(1).toLocaleUpperCase()  
      let {photos} = await bot.getUserProfilePhotos(msg.from.id)
      let pic = photos[0][2].file_id
    
      try {

       //_ Chose Start Part 
        switch (text) {
            case `/${MyBot.$SELECET.START.command}`:
            return await MyTypesChose(id ,appendCount, bot ,message_id , pic )
            case `/${MyBot.$SELECET.OPTIONS.command}`:
            return await MyTypesChose(id  , appendCount  , bot, message_id , pic)
            case `/${MyBot.$SELECET.COLORS.PICTURE.command}`:
            return await MyTypesChose(id  , appendCount, bot, message_id , pic)
            case `/${MyBot.$SELECET.COLORS.LINK.command}`:
            return await MyTypesChose(id  , appendCount, bot , message_id, pic)
            case `/${MyBot.$SELECET.COLORS.VIDEO.command}`:
            return await MyTypesChose(id  , appendCount , bot , message_id, pic)
            case `/${MyBot.$SELECET.QR.command}`:
            return await MyTypesChose(id  , appendCount , bot , message_id, pic)

        }



         //_ Convoert DATA TO QR 
        let rendomName = 'file' + Math.random().toString(36).substring(2,20);
        if(MyBot.isVailed){
        //_ Video Start Part 1
          switch(Boolean(video)){
          case true :
          if(MyBot.MyRUSLTE.length >= 10)return await ops(bot , id , message_id)
          MyBot.TypeCount !== "VIDEO" ?  await ops(bot , id , message_id) : await handelFile$Pic$Url(bot ,id , video , message_id , rendomName)
          return;
          }

         //_ PIC Start Part 2
          switch(Boolean(photo)){
            case true :
              if(MyBot.MyRUSLTE.length >= 10)return await ops(bot , id , message_id)
              MyBot.TypeCount !== "PICTURE" ?  await ops(bot , id , message_id) : await handelFile$Pic$Url(bot ,id , photo , message_id , rendomName)
              return;
          }
          //_ PIC Start Part 3
          switch(Boolean(text)){
            case true :
              if(MyBot.MyRUSLTE.length >= 10)return await ops(bot , id , message_id)
              MyBot.TypeCount !== "LINK" ?  await ops(bot , id , message_id) : await handelFile$Pic$Url(bot ,id , text , message_id , rendomName)
              return;
          }
          return await ops(bot , id , message_id)

        }

        return await handelSubmutData(bot , id , message_id , first_name)

      } catch (error) {
        await ERORHANDLER(bot , id , message_id , error.message )

    }  
  
  });


  bot.on("callback_query", async (query) => {

    let {
      from: { id  },
      message: { message_id  },
      data,
    } = query;


let replyID = query.message?.reply_to_message?.message_id 


    let {type }= JSON.parse(data)
    if(MyBot.chetInput === "SHOW" || MyBot.chetInput === "DELETE1" ){
      MyBot.chetInput = null
    }
    if(MyBot.chetInput === type)return;
    MyBot.chetInput = type
    try {
      switch (type) {
        //_ Frist type
        case "OPTIONS":
        return await CallbackQuery(bot , id , type  )
        case "QR":
        return await CallbackQuery(bot , id ,type )
        case "VIDEO":
        return await CallbackQuery(bot , id , type )
        case "PICTURE": 
        return await CallbackQuery(bot, id , type)
        case "LINK": 
        return await CallbackQuery(bot , id , type)
        case "DEFULT":
        return await CallbackQuery(bot , id , type)
        case "RED":
        return await CallbackQuery(bot  , id , type)
        case "GREEN":
        return await CallbackQuery(bot , id , type  )
        case "START":
        return await CallbackQuery(bot  , id , type )
        case "COLORS":
        return await CallbackQuery(bot  , id , type )
        case "DELETE":
        return await handletQR_Arrey(bot , id , message_id , type )
        case "DELETE1":
        return await handletQR_Arrey(bot , id , message_id , type  , replyID  )
        case "SHOW":
        return await handletQR_Arrey(bot , id , message_id, type )
        }
      
    } catch (error) {

      await ERORHANDLER(bot , id , message_id , error.message )
    }


  
    }

  )



  bot.on('webhook_error', (error) => {
    console.log(error , 'from webhok');
      return bot.setWebHook(webHookURL)
  });

  bot.on("polling_error", async (error) => {
    await bot.stopPolling()
    return {error : "خطا في الأتصال" , }

  })

  return {error : false , fullfiled : true}
    
} catch ({message}) {
    return {error : "خطا في الأتصال " , fullfiled : false}
    
  }
  

};








let MyTypesChose = async (id,  SELCTED , bot , message_id , pic)=>{
 

  try {
   
          
    await bot.deleteMessage(id , message_id)
    if(MyBot.chetInput === "START"){
      MyBot.chetInput = null
    }
    if(MyBot.chetInput === SELCTED)return 
    MyBot.chetInput = SELCTED

    if(MyBot.MyRUSLTE_isShow){
      MyBot.MyRUSLTE_isShow = false
      for (const iterator of MyBot.MyRUSLTE) {
        await bot.deleteMessage(id , iterator.message_id)
      }
    }

    if(MyBot.MYRUSLTE_NUMPER)await bot.deleteMessage(id,MyBot.MYRUSLTE_NUMPER)




  if(SELCTED !== 'START' && SELCTED !== 'OPTIONS' && SELCTED !== 'QR'){
    MyBot.TypeCount =  SELCTED 
    SELCTED = "COLORS"
  }

  



  if(MyBot.MyMaseeg){
    if(SELCTED === 'START'){
     await bot.deleteMessage(id,MyBot.MyMaseeg.message_id)
     return MyBot.MyMaseeg = await bot.sendPhoto(
      id,
      pic,
      {
        caption: MyBot.inline_keyboard.MSG(SELCTED),
        reply_markup: MyBot.inline_keyboard.STEPS(SELCTED),
      }
    )
    }
    await bot.editMessageCaption(MyBot.inline_keyboard.MSG(SELCTED), {chat_id : id , message_id : MyBot.MyMaseeg.message_id })
    return MyBot.MyMaseeg =  await bot.editMessageReplyMarkup(MyBot.inline_keyboard.STEPS(SELCTED), {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
  }
      return MyBot.MyMaseeg = await bot.sendPhoto(
      id,
      pic,
      {
        caption: MyBot.inline_keyboard.MSG(SELCTED),
        reply_markup: MyBot.inline_keyboard.STEPS(SELCTED),
      }
    )
    
  } catch (error) {
    throw new Error(error.message) 

  }




}

let CallbackQuery = async(bot, id , type )=>{
  

  try {

    if(MyBot.MyRUSLTE_isShow){
      MyBot.MyRUSLTE_isShow = false
      for (const iterator of MyBot.MyRUSLTE) {
        await bot.deleteMessage(id , iterator.message_id)
      }
    }


    if(MyBot.MYRUSLTE_NUMPER){
      await bot.deleteMessage(id,MyBot.MYRUSLTE_NUMPER)
      return MyBot.MyMaseeg = await bot.sendPhoto(
        id,
        "https://res.cloudinary.com/dubaiplus/image/upload/v1662258466/profile/j9j2swcjbh7pc0risrza.jpg",
        {
          caption: MyBot.inline_keyboard.MSG(type),
          reply_markup: MyBot.inline_keyboard.STEPS(type),
        }
      )
    }
   

    await bot.editMessageCaption(MyBot.inline_keyboard.MSG(type), {chat_id : id , message_id : MyBot.MyMaseeg.message_id })
    let eidt = await bot.editMessageReplyMarkup(
     MyBot.inline_keyboard.STEPS(type),
     { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
   );
   return  MyBot.MyMaseeg = eidt
   


  } catch (error) {
    throw new Error(error.message) 
  }
}



let handelSubmutData = async(bot , id , message_id )=>{
  try { 
   


    if(!MyBot.MyMaseeg){
      await bot.deleteMessage(id , message_id )
      let info =  await bot.sendMessage(id ,`الرجاء أتباع التعليمات من القوائم قبل الأرسال`,{reply_to_message_id : message_id , reply_markup : MyBot.inline_keyboard['START']})
       return MyBot.MyMaseeg = info
    }
    if(MyBot.TypeCount){
      return await editeMaseeg(bot , id , message_id , "الرجاء أختيار لون   ", MyBot.MyMaseeg.reply_markup , MyBot.MyMaseeg.message_id )
    }

    return await editeMaseeg(bot , id , message_id , `الرجاء أتباع التعليمات من القوائم قبل الأرسال`, MyBot.MyMaseeg.reply_markup , MyBot.MyMaseeg.message_id )


  } catch (error) {

    throw new Error(error.message)
    
  }

}



// _ Fun To QR Convorm and send to User 

let handelFile$Pic$Url = async (bot , id , photo , message_id , rendomName )=>{


  if(MyBot.MYRUSLTE_NUMPER){
    await bot.deleteMessage(id , message_id)
    await bot.editMessageCaption(`لايمكنك تحويل أكثر من محتوى دفعة واحده `, {chat_id : id , message_id : MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].message_id })
    return await bot.editMessageReplyMarkup(MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].reply_markup, {chat_id : id , message_id : MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].message_id})
  }
  switch (MyBot.TypeCount) {
    case "PICTURE":
    return await toQR_PIC(bot,id, message_id , await bot.getFileLink(photo[photo.length - 1].file_id),MyBot.TypeCount , rendomName)
    case "LINK":
    return await toQR_PIC(bot,id, message_id ,photo, rendomName)
    case "VIDEO":
    return await toQR_PIC(bot,id, message_id ,await bot.getFileLink(photo.file_id),MyBot.TypeCount , rendomName)
  
  } 
 throw new Error('خطا في أضافة البيانات ')


}


let toQR_PIC = async (bot , id ,message_id, fileUser , namefile)=>{


  try {

  
    let $p = await new Promise((resolve,reject)=>{
      QRCode.toDataURL(fileUser, 
       {
       color : {dark : MyBot.color[MyBot.TypeColor] || "#ffffff" , light :  "#000000"}, 
       type:'image/jpeg',
     },
       (e,u)=>{
         if(e)return reject(e)
         return resolve(u)
       })
   })

    await bot.deleteMessage(id,MyBot.MyMaseeg.message_id)
    MyBot.MyMaseeg = null
    MyBot.MyRUSLTE.push(await bot.sendPhoto(id,Buffer.from($p.split(";base64,").pop() , 'base64'),{reply_to_message_id : message_id , reply_markup : MyBot.inline_keyboard.STEPS("BACK") },{contentType:'image/jpeg' , filename : namefile}))
    return MyBot.MYRUSLTE_NUMPER =  MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].message_id

  } catch (error) {
    throw new Error(error.message)
  }

}


let ops = async (bot , id  , message_id)=>{

    if(MyBot.MyRUSLTE.length >= 10 ){
      await bot.deleteMessage(id,message_id)
      await bot.editMessageCaption(`يجب حذف بعض الباركودات فالحد الأقصى 10` , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
      let eidt = await bot.editMessageReplyMarkup(
        MyBot.MyMaseeg.reply_markup,
        { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
      );
      return  MyBot.MyMaseeg = eidt

    }
    if(MyBot.MYRUSLTE_NUMPER){
      await bot.deleteMessage(id , message_id)
      await bot.editMessageCaption(`لايمكنك تحويل أكثر من محتوى دفعة واحده `, {chat_id : id , message_id : MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].message_id })
      return await bot.editMessageReplyMarkup(MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].reply_markup, {chat_id : id , message_id : MyBot.MyRUSLTE[MyBot.MyRUSLTE.length -1].message_id})
    }

  await bot.deleteMessage(id,message_id)
    await bot.editMessageCaption(`يجب أرسال ${MyBot.TypeCount}` , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
    let eidt = await bot.editMessageReplyMarkup(
      MyBot.MyMaseeg.reply_markup,
      { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
    );
    return  MyBot.MyMaseeg = eidt

}
let handletQR_Arrey = async (bot , id , message_id , type , replyID)=>{
  



  // _Handeln Delet 
  if(type === 'DELETE'){
    if(MyBot.MyRUSLTE.length === 0){
      await bot.editMessageCaption("لايوجد باركودات مستخرجة للحذف" , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
      let eidt = await bot.editMessageReplyMarkup(
        MyBot.MyMaseeg.reply_markup,
        { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
      );
      return  MyBot.MyMaseeg = eidt
    }


    for (const iterator of MyBot.MyRUSLTE) {
      MyBot.MyRUSLTE_isShow && await bot.deleteMessage(id , iterator.message_id)
      await bot.deleteMessage(id , iterator.reply_to_message.message_id)
    
    }


    await bot.editMessageCaption(`تم حذف ${MyBot.MyRUSLTE.length} عنصر ` , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
    let eidt = await bot.editMessageReplyMarkup(
      MyBot.MyMaseeg.reply_markup,
      { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
    );
     MyBot.MyRUSLTE = []
     MyBot.MyRUSLTE_isShow = false
    return  MyBot.MyMaseeg = eidt
 

  }


  if(type === "DELETE1"){

    MyBot.MyRUSLTE =  MyBot.MyRUSLTE.filter(v=>v.message_id !== message_id)
    await bot.deleteMessage(id,message_id)
    await bot.deleteMessage(id,replyID)




    await bot.editMessageCaption(`${MyBot.MyRUSLTE.length} العناصر المتبقيه `, {chat_id : id , message_id : MyBot.MyMaseeg.message_id })
    let eidt = await bot.editMessageReplyMarkup(
     MyBot.inline_keyboard.QR,
     { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
   );
   if(MyBot.MyRUSLTE.length === 0){
    MyBot.MyRUSLTE_isShow = false
   }
   return  MyBot.MyMaseeg = eidt

  }






  if(type === "SHOW"){


      // _ Handel SHOW
    if(MyBot.MyRUSLTE.length === 0){
      await bot.editMessageCaption("لايوجد باركودات مستخرجة للعرض" , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
      let eidt = await bot.editMessageReplyMarkup(
        MyBot.MyMaseeg.reply_markup,
        { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
      );
      return  MyBot.MyMaseeg = eidt
    }
    if(MyBot.MyRUSLTE_isShow){
      await bot.editMessageCaption("الباركودات معروضة" , {chat_id : id , message_id : MyBot.MyMaseeg.message_id})
      let eidt = await bot.editMessageReplyMarkup(
        MyBot.MyMaseeg.reply_markup,
        { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
      );
      return  MyBot.MyMaseeg = eidt
    }


    let jast= []
    for (const v of MyBot.MyRUSLTE) {
      jast.push(await bot.sendPhoto(id,v.photo[v.photo.length -1].file_id,
        {reply_markup : { inline_keyboard :[[{text : "حذف" , callback_data : JSON.stringify({"type" : "DELETE1" })}]]}
        ,reply_to_message_id : v.reply_to_message.message_id }))
     
    }


    await bot.editMessageCaption(`عدد العناصر   ${MyBot.MyRUSLTE.length} `, {chat_id : id , message_id : MyBot.MyMaseeg.message_id })
    let eidt = await bot.editMessageReplyMarkup(
     MyBot.inline_keyboard.STEPS('QR'),
     { message_id: MyBot.MyMaseeg.message_id, chat_id: id }
   );

    MyBot.MyRUSLTE = jast
    MyBot.MyRUSLTE_isShow = true
    return MyBot.MyMaseeg = eidt
  }






}

let editeMaseeg = async (bot , id , message_id , YourText, YourInline , YourMsg )=>{
  await bot.deleteMessage(id , message_id )
  await bot.editMessageCaption(YourText, {chat_id : id , message_id : YourMsg })
  return await bot.editMessageReplyMarkup(YourInline, {chat_id : id , message_id : YourMsg})
}


async function ERORHANDLER  (bot , id , message_id , error ){
  await bot.stopPolling();
  if(MyBot.MYRUSLTE_NUMPER)await bot.deleteMessage(id,MyBot.MYRUSLTE_NUMPER)
  if(!MyBot.MyMaseeg){
   await bot.deleteMessage(id , message_id)
    return MyBot.MyMaseeg = await bot.sendPhoto(
      id,
      "https://res.cloudinary.com/dubaiplus/image/upload/v1662258466/profile/j9j2swcjbh7pc0risrza.jpg",
      {
        caption: error.message,
        reply_markup: MyBot.inline_keyboard.STEPS("START"),
      }
    )

  } 
  await bot.deleteMessage(id , message_id)
  await bot.editMessageCaption(error.message, {chat_id : id , message_id : MyBot.MyMaseeg.message_id })
  return MyBot.MyMaseeg =  await bot.editMessageReplyMarkup(MyBot.inline_keyboard.STEPS("START"), {chat_id : id , message_id : MyBot.MyMaseeg.message_id})

}







