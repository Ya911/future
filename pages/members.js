import { useEffect} from "react";
import Pernt from "../components/index/pernt";
import { useReducer } from "react";
import dynamic from "next/dynamic";
import { useState } from "react";


const ChevronLeft = dynamic(() => import('@mui/icons-material/ChevronLeft'), {
  ssr: false,
  loading : ()=>''
});
const ChevronRight = dynamic(() => import('@mui/icons-material/ChevronRight'), {
  ssr: false,
  loading : ()=>''
});





const initialState = {numberPage: 1 , conterPage:0 , itemNumper:5};
function reducer(state, action) {
    switch (action.type) {
        case 'addCount':
             return {...state,conterPage: action.payload };
      case 'itemNumper':
         return {itemNumper: action.payload};
      case 'addNumberP':

        if(state.numberPage > state.conterPage){
            return {...state, numberPage:state.conterPage }
        }
      return {...state,itemNumper: action.paylod };

      case 'onBack':
        if(state.numberPage===1){
            return {...state,numberPage:state.numberPage}
        }
        return {...state,numberPage: state.numberPage - 1}
        case 'onNext':
            if(state.numberPage===state.conterPage){
                return {...state,numberPage:state.numberPage}
            }
            return {...state,numberPage:state.numberPage + 1}
            case 'onpageC':
                let toNumber = Number(action.paylod)
                let chexk = typeof toNumber !== 'number' || isNaN(toNumber) || toNumber > state.conterPage || toNumber < 1 
                if(chexk){
                    return {...state,numberPage: state.numberPage}
                }
                return  {...state,numberPage: toNumber}
                case 'addItems':
                    return {...state,itemNumper: +action.paylod };
              



      default : return {...state}
        

    }
  }

function Members() {




let [pages, dispatch] = useReducer(reducer,initialState)
const [data,setData] = useState([])

useEffect(()=>{
(async()=>{
let js = await fetch(`/api/pages?page=${pages.numberPage}&itemspage=${pages.itemNumper}`)
let toData = await js.json()
if(toData){
  setData(toData)
  dispatch({type:"addCount"
  ,payload:Math.ceil(toData.pagination.pagesCount)})
  dispatch({type:"addNumberP",paylod:toData.pagination.itemspage})
  }
})()
},[pages.numberPage ,pages.itemNumper])



  return (
    // Perent Mem
    <div className="flex flex-col justify-between flex-grow ">
      <table    
      className="w-full h-10 border-collapse">
        
        <thead>
        <tr className="text-sm text-center text-white ">
            <td className={`${'bg-zinc-900 py-2'}`}>العضوية</td>
            <td className={`${'bg-zinc-900  py-2'}`}>تاريخ أنشاء الحساب </td>
            <td className={`p-1 bg-zinc-900 `}>الأسم</td>
        </tr>
        </thead>
        
        <tbody className="text-center">
            {data?.items?.length !== 0&& data?.items?.map(td=>{
                return(
                    <tr key={td._id} >
                    <td className={'border-b-[1.5px] text-white  py-[0.5rem] text-sm border-slate-500'}>{td.role}</td>
                    <td className={'border-b-[1.5px] text-white  py-[0.5rem] text-sm border-slate-500'}>{td.AccountـCreationـDate.slice(0,-14)}</td>
                    <td className={'border-b-[1.5px] text-white  py-[0.5rem] text-sm border-slate-500'}>{td.fristname}</td>
                </tr>
                )
            })}

        </tbody>

      </table>


 





      {/* Foter Pages */}
      <div className="flex justify-between w-full px-6 mb-2 xs:px-2 sm:px-3">
        <div className="flex justify-between w-[30%] max-w-[6rem] items-center">
          {/* fix input */}

          <select
          value={pages.itemNumper}
          onChange={e=>dispatch({type:"addItems", paylod:e.target.value})}
            className="h-6 text-xs text-black bg-white border-none rounded-sm outline-none w-9"
            name="valuepage"
            id="valuepage"
          >
            <option>5</option>
            <option>10</option>
          </select>

          <span className="text-xs text-white ">العناصر</span>
        </div>

        <div className="flex justify-between items-center overflow-hidden  w-[20%] xs:min-w-[35%] xs:w-[37%] sm:w-[25%] sm:max-w-[27%]">
          <ChevronLeft  
          sx={{color:'#18181b' , height:'1.3rem'}}
          onClick={()=>dispatch({type:"onNext"})}
          className={`${pages.conterPage === pages.numberPage ?"bg-[#ffffff] opacity-25" : "bg-[#eab301] cursor-pointer" } rounded-[.1rem]`}/>
          <label  htmlFor="number_page">
          <input
          onChange={(e)=>dispatch({type:"onpageC",paylod:e.target.value})}
          value={pages.numberPage}
            className="text-[.87rem] text-center text-black border-none rounded-[.1rem] w-7 bg-slate-100"
            type="text"
            name="number_page"
            id="number_page"
          />
          </label>

          <span className="flex text-sm text-white">
            من <span className="ml-1">{pages.conterPage}</span>
          </span>
          <ChevronRight  
          sx={{color:'#18181b' , height:'1.3rem'}}
          onClick={()=>dispatch({type:"onBack"})}
          className={`${pages.numberPage === 1 ? "bg-[#ffffff] opacity-25" : "bg-[#eab301] cursor-pointer" } rounded-[.1rem]`} />
        </div>
      </div>
    </div>
  );
}


Members.getLayout = (page) => <Pernt titel='الأعضاء'>{page}</Pernt>;

export default Members;
