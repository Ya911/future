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
  (async()=>{
    if (session?.error === "RefreshAccessTokenError") {
      signIn()
  }})()
 },[session])





  
    return (
      <Provider store={store}> 
      <div className="relative flex w-full h-screen py-3">
        <PageTitel titel={titel}/>        
        <div
        className="relative justify-between overflow-hidden  h-full text-white  w-[13%]  max-w-[3.3rem] rounded-r-md bg-zinc-800 flex flex-col font-fontar"
      >
        {/* Start list All */}


          {/* Part 1 Start  */}
          <div className="flex flex-col items-center h-[90%] px-1 pt-5 ">
          {/* Log Start */}
          <MyLogo/>
          {/* Lust Number 1 Start */}
          <ul className="flex flex-col justify-between h-[65%] ">
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
     <LayoutIndex>
     {children}
     </LayoutIndex>
       
       
      </div>
      </Provider>
    );
}

export default PerntSidbar