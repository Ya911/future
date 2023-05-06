import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UseLi } from "../../store/index/index";
import { useRouter } from 'next/router';



function Side1() {


const BulidUpdate = process.env.NEXT_PUBLIC_BUILD_ID ? JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID) : null


let {targetBar : {Text , Icon}} = useSelector(status=>status.Index)
const dispatchHover = useDispatch();
const Router = useRouter()

useEffect(()=>{
    async function any (){
    dispatchHover(UseLi(Router.pathname))
  }
 any()
},[Router.pathname , dispatchHover])


  return (
      <div className="flex w-[100%] min-h-[10%] mb-5 xs:mb-8 sm:mb-10  flex-row-reverse p-[5%] xs:p-[7%] sm:p-[8%] items-center justify-between text-amber-300">
      {Icon &&  
      <div className="flex flex-row-reverse items-center ">
      <Icon className="h-12 pl-3 sm:h-8 xs:h-5 xs:pl-2"/>
      <h2 className="text-4xl sm:text-2xl xs:text-base ">{Text && Text}</h2>
      </div>
      }
      <h2 className="font-bold tracking-[-0.10em] truncate max-w-[50%] w-[50%]  font-[monospace] text-3xl sm:tracking-[-0.15em] xs:tracking-[-0.20em] sm:text-2xl xs:text-base text-[#27272a] ">{BulidUpdate ? BulidUpdate['Versoin'].slice(7)+" " + ":رقم النسخة " : 'empte'}</h2>
    </div>
  );
}


export default memo(Side1)