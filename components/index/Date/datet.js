import { memo } from "react";
import { useEffect, useReducer } from "react";

let ini = {horus:'',min:'',s:''}

let Red = (state,action)=>{
    switch (action.type) {
        case "add":
            if(action.payload === 'En'){
                return {
                    horus : new Date().getUTCHours().toString(),
                    min : new Date().getUTCMinutes().toString(),
                    s : new Date().getUTCSeconds().toString(),
                }
            }
            if (action.payload === 'Ar'){
                return {
                    horus : new Date().getHours().toString(),
                    min : new Date().getMinutes().toString(),
                    s : new Date().getSeconds().toString(),
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
            <span>{time?.horus}</span>
            <span>: {time?.min}</span>
            <span>: {time?.s}</span>
        </div>
    );
}

export default memo(DateT)