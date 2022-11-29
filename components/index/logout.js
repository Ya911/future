import { memo } from "react";
import dynamic from "next/dynamic";

const LogoutIcon = dynamic(() => import('@heroicons/react/outline/LogoutIcon'), {
  ssr: false,
  loading : ()=>''
});



function Logout() {


    return (
        <div style={{background : "rgb(234, 179, 0)"}} className="relative flex flex-col items-center justify-center h-12 px-1 overflow-hidden">

        <div className="py-[.4rem] px-[.4rem] hover:bg-zinc-800 hover:cursor-pointer hover:rounded-md">
          <LogoutIcon
            onClick={async () => (await import('next-auth/react')).signOut({callbackUrl:'/auth/signin'})}
            className={`h-[1.2rem]`}
          />
        </div>
      </div>
      
    );

}



export default memo(Logout)
