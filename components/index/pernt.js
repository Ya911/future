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
const LayoutIndex = dynamic(() => import('./side'), {
  ssr: false,
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
      <PageTitel titel={titel}/>    
      <div className="relative flex flex-row w-full h-screen py-3 ">
      



      {/*_ Nav Bar Start */}
        <div
        className="relative justify-between overflow-hidden text-white max-h-screen  w-[13%]  max-w-[3.3rem] rounded-r-md bg-zinc-800 flex flex-col font-fontar"
      >
           {/* Logo Start */}
          <div className="flex flex-col items-center justify-between h-[85%] px-1 pt-5 ">
          <MyLogo/>
          {/* Lust Number 1 Start */}
          <ul className="flex flex-col justify-between h-[76%] ">
          <LoopLink/>
          </ul>
          </div>
          {/* Part 2 Start LogOut */}
            <Logout 
            image={session?.user.image && session?.user.image}
            name={session?.user.name && session?.user.name}
            />
      </div>
         {/*_ Nav Bar Start */}

      <div className="relative px-1 ml-2 overflow-hidden grow h-full min-h-full  flex flex-col  w-[87%] font-fontar z-0 bg-zinc-800 ">
     <LayoutIndex>
          {children}
     </LayoutIndex>
     </div>
       
       
      </div>
      </Provider>
    );
}

export default PerntSidbar