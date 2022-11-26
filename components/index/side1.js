import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UseLi } from "../../store/index/index";
import { useRouter } from 'next/router';



function Side1() {


  const {Versoin} = JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID) 

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
        <div className="flex flex-row-reverse items-center gap-2 p-4 overflow-hidden text-amber-300">
        {Icon &&  <Icon className="h-5"/>}
        <h2 className="text-sm ">{Text && Text}</h2>
        <br/>
        <h2 className="text-sm">{Versoin.slice(7) || ''}</h2>
      </div>
    );
}


export default memo(Side1)