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
      {/* h-screen min-h-screen */}
      <div className="relative flex flex-row w-full py-2 ">
      



      {/*_ Nav Bar Start */}
        <div
        className="relative justify-between overflow-hidden text-white h-[calc(100vh_-_1.1vh)] w-[10%] px-[0.2%] sm:px-[.5%] xs:px-[1%] max-w-[3rem] rounded-r-md bg-zinc-800 flex flex-col font-fontar"
      >
           {/* Logo Start */}
          <div className="flex flex-col justify-evenly w-full h-[80%]">
          <MyLogo/>
          {/* Lust Number 1 Start */}
          <ul className="flex flex-col w-full items-center justify-between h-[66%] ">
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


      <div className="relative h-[calc(100vh_-_1.3vh)] pt-[.5%]  ml-[1.5%] overflow-hidden grow  rounded-md  flex flex-col  w-[87%] font-fontar z-0 bg-zinc-800
      before:absolute before:content-[''] before:w-[51%] before:rounded-md  before:h-full  before:left-[0%] before:opacity-85  before:bg-[#eab300]
      before:z-[-1]
      ">
     <LayoutIndex>
          {children}
     </LayoutIndex>
     </div>
       
       
      </div>
      </Provider>
    );
}

export default PerntSidbar