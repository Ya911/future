// أنشاء شريحة رديوسر
import { createSlice } from "@reduxjs/toolkit";
import {
    KeyIcon,
    UserIcon,
    CalculatorIcon,
    CogIcon,
    ClockIcon,
    HomeIcon,
    BookOpenIcon,
    ChatAltIcon,
    CloudDownloadIcon
  } from "@heroicons/react/solid";




const initialState = {
  navbar: [
    {id:0, Herf: "/", Text: " الرئيسية", Icon: HomeIcon },
    {id:1, Herf: "/members", Text: " المستخدمين", Icon: UserIcon },
    {id:2, Herf: "/date", Text: "التاريخ والوقت", Icon: ClockIcon },
    {id:3, Herf: "/calculator", Text: "الحاسبة", Icon: CalculatorIcon },
    {id:4, Herf: "/books", Text: "الكتب", Icon: BookOpenIcon },
    {id:5, Herf: "/bot", Text: "بوت تيلقرام", Icon: ChatAltIcon },
    {id:6, Herf: "/myaccount", Text: "حسابي", Icon: KeyIcon },
    {id:7, Herf: "/update", Text: "التحديثات", Icon: CloudDownloadIcon },
    {id:8, Herf: "/setting", Text: "الأعدادات", Icon: CogIcon },
,
  ],
  targetBar : {},
  Calec: {value1:0 , obr:null , value2:0,hovecaluc:null ,valueCal :null}
  
};

export const Index = createSlice({
  name: "Index",
  initialState,
  reducers: {
    UseLi: (state, action) => {
     const filter  = initialState.navbar.filter(v=>v.Herf == action.payload)[0]
      state.targetBar = filter
    },
    ValC:(state, action)=>{
      switch (action.payload) {
        
        case '=':
          if(typeof state.Calec.value1 === 'string' && state.Calec.value1.endsWith('.')){
            state.Calec.value1 = Number(state.Calec.value1)
          }
            if(typeof state.Calec.value2 === 'string' && state.Calec.value2.endsWith('.')){
              state.Calec.value2 = Number(state.Calec.value2)
            }
               
          state.Calec.hovecaluc = null
          if(!state.Calec.obr) break;
          if(state.Calec.obr && state.Calec.value1 === 0 && state.Calec.value2 ===0)break;
          if(state.Calec.obr && state.Calec.value1 !== 0 && state.Calec.value2 ===0){
            state.Calec.value1 = state.Calec.value1 
            state.Calec.value2 = 0
            state.Calec.obr = null
            break;
          }

          let reusl =  Number(parseFloat(eval(`${state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2}`)))
          if(typeof reusl === NaN ){
            state.Calec.value1 =  0
            state.Calec.value2 =  0
            state.Calec.obr = null
            break
          }
          state.Calec.value1 = reusl
          state.Calec.value2 = 0
          state.Calec.obr = null

           
        break;

        case 'X':
          state.Calec.hovecaluc = action.payload

        
          //  أذا كان القيمة فيها نقطة
          if(typeof state.Calec.value1 === 'string' && state.Calec.value1.endsWith('.')){
           state.Calec.value1 = Number(state.Calec.value1)
         }
           if(typeof state.Calec.value2 === 'string' && state.Calec.value2.endsWith('.')){
             state.Calec.value2 = Number(state.Calec.value2)
           }
              

           //  أذا كانت الأوبريتور نل يعني يريد القيام بآوبريتور
           if(state.Calec.obr === null){
             state.Calec.obr = action.payload
             state.Calec.value2 = 0
             break
           }
           // الشرط الأول اذا كانت الأوبريتر اتت من قيمة أخرى فأجعل العدد يقارن ببعضه وأضف له 
           // قيمة جديدة كالجمع
           if(state.Calec.obr !== action.payload){
             if(state.Calec.value1 === 0)break;
             if(state.Calec.value2 === 0){
              state.Calec.obr = action.payload
              break;
             }
             let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
             if(typeof outpot === NaN ){
               state.Calec.value1 =  state.Calec.value1
               state.Calec.value2 =  0
               state.Calec.obr = action.payload
               break
             }
             state.Calec.value1 = outpot
             state.Calec.value2 = 0
             state.Calec.obr = action.payload
             break
           }
           // أذ كانت الأوبريتور نفسه فنستخرج الناتج وأذا اراد التكمله له الحريه 
           if(state.Calec.obr === action.payload){
             if(state.Calec.value2 === 0)break;
             let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
             if(typeof outpot === NaN ){
               state.Calec.value1 =  state.Calec.value1
               state.Calec.value2 =  0
               state.Calec.obr = state.Calec.obr
               break
             }
             state.Calec.value1 = outpot
             state.Calec.value2 =  0
             state.Calec.obr = state.Calec.obr
             break
           }
          break;


          case '-':
            state.Calec.hovecaluc = action.payload

        
            //  أذا كان القيمة فيها نقطة
            if(typeof state.Calec.value1 === 'string' && state.Calec.value1.endsWith('.')){
             state.Calec.value1 = Number(state.Calec.value1)
           }
             if(typeof state.Calec.value2 === 'string' && state.Calec.value2.endsWith('.')){
               state.Calec.value2 = Number(state.Calec.value2)
             }
                

             //  أذا كانت الأوبريتور نل يعني يريد القيام بآوبريتور
             if(state.Calec.obr === null){
               state.Calec.obr = action.payload
               state.Calec.value2 = 0
               break
             }
             // الشرط الأول اذا كانت الأوبريتر اتت من قيمة أخرى فأجعل العدد يقارن ببعضه وأضف له 
             // قيمة جديدة كالجمع
             if(state.Calec.obr !== action.payload){
               if(state.Calec.value1 === 0)break;
               if(state.Calec.value2 === 0){
                state.Calec.obr = action.payload
                break;
               }
               let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
               if(typeof outpot === NaN ){
                 state.Calec.value1 =  state.Calec.value1
                 state.Calec.value2 =  0
                 state.Calec.obr = action.payload
                 break
               }
               state.Calec.value1 = outpot
               state.Calec.value2 = 0
               state.Calec.obr = action.payload
               break
             }
             // أذ كانت الأوبريتور نفسه فنستخرج الناتج وأذا اراد التكمله له الحريه 
             if(state.Calec.obr === action.payload){
               if(state.Calec.value2 === 0)break;
               let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
               if(typeof outpot === NaN ){
                 state.Calec.value1 =  state.Calec.value1
                 state.Calec.value2 =  0
                 state.Calec.obr = state.Calec.obr
                 break
               }
               state.Calec.value1 = outpot
               state.Calec.value2 =  0
               state.Calec.obr = state.Calec.obr
               break
             }
            break;

            case '+':
              state.Calec.hovecaluc = action.payload

        
             //  أذا كان القيمة فيها نقطة
             if(typeof state.Calec.value1 === 'string' && state.Calec.value1.endsWith('.')){
              state.Calec.value1 = Number(state.Calec.value1)
            }
              if(typeof state.Calec.value2 === 'string' && state.Calec.value2.endsWith('.')){
                state.Calec.value2 = Number(state.Calec.value2)
              }
                 

              //  أذا كانت الأوبريتور نل يعني يريد القيام بآوبريتور
              if(state.Calec.obr === null){
                state.Calec.obr = action.payload
                state.Calec.value2 = 0
                break
              }
              // الشرط الأول اذا كانت الأوبريتر اتت من قيمة أخرى فأجعل العدد يقارن ببعضه وأضف له 
              // قيمة جديدة كالجمع
              if(state.Calec.obr !== action.payload){
                if(state.Calec.value1 === 0)break;
                if(state.Calec.value2 === 0){
                  state.Calec.obr = action.payload
                  break;
                 }
                let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
                if(typeof outpot === NaN ){
                  state.Calec.value1 =  state.Calec.value1
                  state.Calec.value2 =  0
                  state.Calec.obr = action.payload
                  break
                }
                state.Calec.value1 = outpot
                state.Calec.value2 = 0
                state.Calec.obr = action.payload
                break
              }
              // أذ كانت الأوبريتور نفسه فنستخرج الناتج وأذا اراد التكمله له الحريه 
              if(state.Calec.obr === action.payload){
                if(state.Calec.value2 === 0)break;
                let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
                if(typeof outpot === NaN ){
                  state.Calec.value1 =  state.Calec.value1
                  state.Calec.value2 =  0
                  state.Calec.obr = state.Calec.obr
                  break
                }
                state.Calec.value1 = outpot
                state.Calec.value2 =  0
                state.Calec.obr = state.Calec.obr
                break
              }
              break;


            case '/':
              state.Calec.hovecaluc = action.payload

        
             //  أذا كان القيمة فيها نقطة
             if(typeof state.Calec.value1 === 'string' && state.Calec.value1.endsWith('.')){
              state.Calec.value1 = Number(state.Calec.value1)
            }
              if(typeof state.Calec.value2 === 'string' && state.Calec.value2.endsWith('.')){
                state.Calec.value2 = Number(state.Calec.value2)
              }
                 

              //  أذا كانت الأوبريتور نل يعني يريد القيام بآوبريتور
              if(state.Calec.obr === null){
                state.Calec.obr = action.payload
                state.Calec.value2 = 0
                break
              }
              // الشرط الأول اذا كانت الأوبريتر اتت من قيمة أخرى فأجعل العدد يقارن ببعضه وأضف له 
              // قيمة جديدة كالجمع
              if(state.Calec.obr !== action.payload){
                if(state.Calec.value1 === 0)break;
                if(state.Calec.value2 === 0){
                  state.Calec.obr = action.payload
                  break;
                 }
                let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
                if(typeof outpot === NaN ){
                  state.Calec.value1 =  state.Calec.value1
                  state.Calec.value2 =  0
                  state.Calec.obr = action.payload
                  break
                }
                state.Calec.value1 = outpot
                state.Calec.value2 = 0
                state.Calec.obr = action.payload
                break
              }
              // أذ كانت الأوبريتور نفسه فنستخرج الناتج وأذا اراد التكمله له الحريه 
              if(state.Calec.obr === action.payload){
                if(state.Calec.value2 === 0)break;
                let outpot = Number(parseFloat(eval(state.Calec.value1 + (state.Calec.obr === "X" ? "*" : state.Calec.obr) + state.Calec.value2)).toFixed(4))
                if(typeof outpot === NaN ){
                  state.Calec.value1 =  state.Calec.value1
                  state.Calec.value2 =  0
                  state.Calec.obr = state.Calec.obr
                  break
                }
                state.Calec.value1 = outpot
                state.Calec.value2 =  0
                state.Calec.obr = state.Calec.obr
                break
              }
              break;

      }
      
    

    },
    NumC:function(state,action){
      let obrt =  ['/','+','X','-']
      switch (action.payload) {
        
        case '%':
          state.Calec.valueCal = "D"
          if(!obrt.includes(state.Calec.obr)){
          state.Calec.value1 = Number(state.Calec.value1 / 100) 
          }else state.Calec.value2 = Number(state.Calec.value2 / 100) 
        break;

        case '9':
          state.Calec.valueCal = "D"
          state.Calec.hovecaluc = null
          if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
          else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
          break;


          case '6':   
          state.Calec.valueCal = "D"
          state.Calec.hovecaluc = null
          if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
          else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
            break;


            case '3': 
            state.Calec.valueCal = "D"
            state.Calec.hovecaluc = null
            if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
            else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
              break;

              case '0': 
              state.Calec.valueCal = "D"
              state.Calec.hovecaluc = null
              if(!obrt.includes(state.Calec.obr)){

                if(state.Calec.value1.toString().startsWith('0')){
                  if(state.Calec.value1.toString().includes('.'))
                  state.Calec.value1 += action.payload
                  else state.Calec.value1 = 0
                  break
                }
                parseFloat(state.Calec.value1 += action.payload)
              }else {

                if(state.Calec.value2.toString().startsWith('0')){
                  if(state.Calec.value2.toString().includes('.'))
                  state.Calec.value2 += action.payload
                  else state.Calec.value2 = 0
                  break
                } 
                parseFloat(state.Calec.value2 += action.payload)
              }
                break;


            case '.':
              state.Calec.valueCal = "D"
              state.Calec.hovecaluc = null
              let chPoint1 = state.Calec.value1.toString()
              let chPoint2 = state.Calec.value2.toString()

              

 

              if(state.Calec.obr === 'calc' || !state.Calec.obr ){
                
                if(!chPoint1.includes('.')){
                  state.Calec.value1 = (state.Calec.value1 += action.payload)
                }else{ 
                  state.Calec.value1 = state.Calec.value1
                
    
                }
              }else{
                if(!chPoint2.includes('.')){
                  Number(state.Calec.value2 += action.payload)
                }else{
                  
                  state.Calec.value2 = state.Calec.value2
                }
            } 


              
              break;

              case '?':
                break;

                case 'C':
                  state.Calec.valueCal = null
                  if(state.Calec.obr === 'calc' || !state.Calec.obr || state.Calec.hovecaluc){
                    state.Calec.value1 = 0
                    state.Calec.res = 0
                    state.Calec.hovecaluc = null
                  }else{
                  if(state.Calec.obr === 'con'){
                    state.Calec.value1 = 0
                    state.Calec.res = 0
                  }
                  else{
                  if(state.Calec.obr)
                   state.Calec.value2 = 0 
                  }  
                }
                  break;
  

                case '8':
                  state.Calec.valueCal = "D"
                  state.Calec.hovecaluc = null
                  if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                  else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                  break;
                  
                  
                  case '5':
                    state.Calec.valueCal = "D"
                    state.Calec.hovecaluc = null
                    if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                    else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                    break;

                    case '2':
                      state.Calec.valueCal = "D"
                      state.Calec.hovecaluc = null
                      if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                      else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                      break;

                      case 'AC':
                        state.Calec.valueCal = null
                        state.Calec.hovecaluc = null
                        state.Calec.obr = null 
                        state.Calec.value1 = 0
                        state.Calec.value2 = 0
                        state.Calec.res = 0
                        break;

                        case '7':
                          state.Calec.valueCal = "D"
                          state.Calec.hovecaluc = null
                          if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                          else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                          break;

                          case '4':
                            state.Calec.valueCal = "D"
                            state.Calec.hovecaluc = null
                            if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                            else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                            break;

                            case '1':
                              state.Calec.valueCal = "D"
                              state.Calec.hovecaluc = null
                              if(!obrt.includes(state.Calec.obr))state.Calec.value1 = parseFloat(state.Calec.value1 += action.payload)
                              else state.Calec.value2 = parseFloat(state.Calec.value2 += action.payload)  
                              break;



              
      }
    }
  },
});

//  تصدير جميع الأكشن لأستخدماها داخل الكمبونت
export const { UseLi , ValC , NumC } = Index.actions;
//  [تتصدير الرديوسر لشريحه الستيت  لأستخدماه ضمن ملف ستور]
export default Index.reducer;



