import LayoutIndex from './side'
import {signIn, useSession } from "next-auth/react";
import PageTitel from '../PageTitel'
import dynamic from "next/dynamic";
import { useEffect } from "react";
import {store} from '../../store/store'
import { Provider } from 'react-redux'



const MyLogo = dynamic(() => import('./myLogo.js'), {
  ssr: false,
  loading : ()=>''
});
const Logout = dynamic(() => import('./logout'), {
  ssr: false,
  loading : ()=>''
});
const LoopLink = dynamic(() => import('./loopLink'), {
  ssr: false,
  loading : ()=>''
});







function PerntSidbar({titel, children}) {

  const { data: session } = useSession();


 useEffect(()=>{
  if (session?.error === "RefreshAccessTokenError") {
       signIn()
   }
 },[session])





  
    return (
      <Provider store={store}> 
      <div className="relative flex h-screen">
        <PageTitel titel={titel}/>        
        <div
        className="h-full overflow-hidden text-white shadow-sm rounded-r-md bg-zinc-800 w-6- font-fontar"
        id="sidenavSecExample"
      >
        {/* Start list All */}
        <div className="flex flex-col justify-between h-full ">

          {/* Part 1 Start  */}
          <div className="flex flex-col gap-8 px-3 pt-5">
          {/* Log Start */}
          <MyLogo/>
          {/* Lust Number 1 Start */}
          <h3 className="text-right text-md">لوحة التحكم</h3>
          <ul className="flex flex-col gap-3 text-right">
          <LoopLink/>
          </ul>
          {/* Lust Number 1 END */}
          </div>
          
          {/* Part 2 Start LogOut */}
            <Logout 
            image={session?.user.image && session?.user.image}
            name={session?.user.name && session?.user.name}
            />
          {/* Part 2 END LogOut */}


        </div>
      </div>
     <LayoutIndex>
     {children}
     </LayoutIndex>
       
       
      </div>
      </Provider>
    );
}

export default PerntSidbar