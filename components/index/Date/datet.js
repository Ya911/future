import { memo } from "react";
import { useEffect, useReducer } from "react";

let ini = {horus:'',min:'',s:''}

let Red = (state,action)=>{
    switch (action.type) {
        case "add":
            if(action.payload === 'En'){
                return {
                    Time : new Date().toLocaleTimeString('en', {hour12:true , timeZone:"UTC" , timeStyle:'medium' })
                }
            }
            if (action.payload === 'Ar'){
                return {
                    Time : new Date().toLocaleTimeString('ar-EG',{ hour12 : true , timeStyle:'medium'}),
                }
            }
            
        break;
    
        default:return {...state}
            
    }

}
function DateT({data}) {

 let [time,dispatch]=useReducer(Red,ini)  


    useEffect(()=>{
       let c = setInterval(()=>dispatch({type:'add',payload:data}),1000)
       return ()=> clearInterval(c) 
    },[data,dispatch])

    return (
        <div className="flex gap-2">
            <span className="p-2 text-sm shadow-xl text-zinc-800">{time?.Time}</span>
        </div>
    );
}

export default memo(DateT)