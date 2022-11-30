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
     

    <>
          <Side3/>
          <Side1 />   
          {children}
      </>
    );
}




export default memo(LayoutIndex)