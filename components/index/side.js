import dynamic from "next/dynamic";
import { memo} from "react";




const Side1 = dynamic(() => import('./side1'), {
  ssr: false,
  loading:()=>''
});



function LayoutIndex({children}) {



   

    return (
     

    <>
          <Side1/>   
          {children}
      </>
    );
}




export default memo(LayoutIndex)