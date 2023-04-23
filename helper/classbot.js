
export const MyBot = {
    MyMaseeg: null,
    isVailed : false,
    TypeCount : null,
    TypeColor : null,
    MyRUSLTE : [] , 
    MYRUSLTE_NUMPER : null,
    MyRUSLTE_isShow : false,
    chetInput : null,
     $SELECET : {
     START : {command : "start" , description : "أختيارك هو سر نجاحك"},
     OPTIONS : {command : "options" , description : "في السرعة الندامة"},
     COLORS : {
        PICTURE : {command : "picture" , description : "تحويل الصورة الى باركود"},
        LINK : {command : "link" , description : "تحويل الرابط أو النص الى باركود"},
        VIDEO : {command : "video" , description :  "تحويل الفديو الى باركود" },
     },
     QR : {command : "qr" , description :  "جميع الباركودات المستخرجة" }

},

    color : {
        DEFULT : "#ffffff",
        RED : "#d60000",
        GREEN : "#00d661",
    },
    Count : {PICTURE: "أرسل الصورة" , LINK : "أرسل الرابط" , VIDEO : "أرسل الفديو"},




    inline_keyboard : {


        START : { inline_keyboard : [[{text:"أبدأ الخدمة" , callback_data : JSON.stringify({"type" : "OPTIONS"})  }]]},

        OPTIONS : { inline_keyboard : 

            [
            [{text:"تحويل صورة الي QR" , callback_data :JSON.stringify({"type" : "PICTURE" })},
            {text:"تحويل رابط الى QR" , callback_data :JSON.stringify({"type" : "LINK" })},
            {text:"تحويل فديو الى QR" , callback_data :JSON.stringify({"type" : "VIDEO" })}],
            [{text : 'جميع الباركودات' , callback_data : JSON.stringify({"type" : "QR"})}],
            [{text : 'الرجوع' , callback_data : JSON.stringify({"type" : "START"})}]
            ]

        },
        

        COLORS : { inline_keyboard :
                [
                [{text : "أحمر" , callback_data : JSON.stringify({"type" : "RED" })},
                {text : "أخضر " , callback_data : JSON.stringify({"type" : "GREEN"})},
                {text : "العادي" , callback_data : JSON.stringify({"type" :"DEFULT"})}],
                [{text : 'الرجوع' , callback_data : JSON.stringify({"type" : "OPTIONS"})}]]

               },
               QR : { inline_keyboard :
                [
                [{text : "حذف الكل " , callback_data : JSON.stringify({"type" : "DELETE" })},
                {text : "عرض الكل  " , callback_data : JSON.stringify({"type" : "SHOW"})},
                ],
                [{text : 'القائمة الرئسية' , callback_data : JSON.stringify({"type" : "OPTIONS"})}]]

               },
               BACK : { inline_keyboard :
                [[
                {text : 'قائمة اللألوان' , callback_data : JSON.stringify({"type" : "COLORS"})},
                {text : 'القائمة الرئسية' , callback_data : JSON.stringify({"type" : "OPTIONS"})}
                ]]

               },

        STEPS : function(arg){
            if(MyBot.$SELECET[arg]) return this[arg]                         
            if(MyBot.Count[arg])return this.COLORS
            if(MyBot.color[arg])return this.COLORS
            return this[arg]

        },

        MSG  : function(arg){
            MyBot.MYRUSLTE_NUMPER = null
            MyBot.isVailed = false
            if(MyBot.$SELECET[arg]){   
                MyBot.TypeColor = null
                // _ Handel inline_keyboard
                if(arg !== 'COLORS') {
                    MyBot.TypeCount = null
                    return MyBot.$SELECET[arg].description
                }
               return MyBot.$SELECET.COLORS[MyBot.TypeCount].description

            }

            if(MyBot.Count[arg]){
                MyBot.TypeCount = arg
                return MyBot.$SELECET.COLORS[MyBot.TypeCount].description
            }

            if(MyBot.color[arg]){
                MyBot.isVailed = true
                MyBot.TypeColor = arg
                return MyBot.Count[MyBot.TypeCount]
            }

        }


    
    },



    


}







