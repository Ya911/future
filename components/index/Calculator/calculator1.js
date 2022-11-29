import { memo, useCallback} from "react";
import { useSelector , useDispatch } from "react-redux";
import { NumC, ValC } from "../../../store/index";

function Calculator1({frist,scend,thre,fored , id}) {


    const caluc = `${id === 0 ? "text-black  bg-slate-400" : 'bg-gray-600 text-white'}  w-16 h-16 text-center text-2xl rounded-full mr-2 shadow-md cursor-pointer hover:bg-[#b5b5b5]`


    
    // ${} gap-3 bg-gray-600 
    const dis = useDispatch()
    const { valueCal,  hovecaluc}=useSelector(status=>status.Index.Calec)
    const dCNum = useCallback((e)=>dis(NumC(e.target.textContent)),[dis])
    const dCValC = useCallback((e)=>dis(ValC(e.target.textContent)),[dis])



   
    return (
      <div className={`flex justify-center  font-fonten  mb-3`}>
        <button 
        onClick={(e)=>dCNum(e)}  
        className={id===4 ? "text-center bg-gray-600 w-28 grow h-16 text-2xl text-white rounded-[2rem] shadow-md cursor-pointer mr-2 hover:bg-[#b5b5b5]" : caluc}>
          {frist === "AC" ? (valueCal === "D" ? frist = "C" : frist = 'AC' ) : frist}</button>
        <button onClick={(e)=>dCNum(e)}   className={`${caluc}`} >{scend}</button>
        {thre && <button onClick={(e)=>dCNum(e)} className={`${caluc}`} >{thre}</button>}
        <button 
        onClick={(e)=>dCValC(e)} className={`text-center  shadow-md cursor-pointer w-16 h-16 text-2xl ${hovecaluc === fored && "bg-[#f8f8f8] text-[#eab301] "}  bg-[#eab301] text-white rounded-full `}>{fored}</button>
      </div>

    );
}


export default memo(Calculator1)