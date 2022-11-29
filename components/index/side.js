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
     

    <div className="relative z-0 flex flex-col w-full h-full overflow-hidden bg-zinc-800">

          <Side3/>
          <Side1 />   
          {children}

      </div>
    );
}




export default memo(LayoutIndex)