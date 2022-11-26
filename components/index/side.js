import dynamic from "next/dynamic";
import { memo} from "react";




const Side1 = dynamic(() => import('./side1'), {
  ssr: false,
  loading:()=>''
});
const Side3 = dynamic(() => import('./side3'), {
  ssr: false,
  loading:()=>''
});


function LayoutIndex({children}) {



   

    return (
     
    <div className="relative w-[80%] grow h-[37.5rem] px-3 overflow-hidden font-fontar ">
    <div className="flex flex-col rounded-xl w-full  relative h-[100%] gap-10  drop-shadow-sm bg-zinc-800">

          <Side3/>
          <Side1 />   
          {children}

      </div>
    </div>
    );
}




export default memo(LayoutIndex)