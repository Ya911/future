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
     
    <div className="relative flex-grow px-6 py-20 font-fontar ">
    <div className="flex flex-col relative h-[80vh] gap-10 overflow-hidden rounded-sm drop-shadow-sm bg-zinc-800">

          <Side3/>

          <Side1 />
          
          {children}

      </div>
    </div>
    );
}




export default memo(LayoutIndex)