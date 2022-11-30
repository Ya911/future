import { memo } from "react";
import dynamic from "next/dynamic";

const LogoutIcon = dynamic(() => import('@heroicons/react/outline/LogoutIcon'), {
  ssr: false,
  loading : ()=>''
});



function Logout() {


    return (
        <div className="relative flex flex-col items-center rounded-sm justify-end pb-[23%]  h-[15%]  overflow-hidden">

        <div className="py-[.3rem]   hover:bg-zinc-900 px-[.3rem] hover:cursor-pointer hover:rounded-md">
          <LogoutIcon
          color="#eab301"
            onClick={async () => (await import('next-auth/react')).signOut({callbackUrl:'/auth/signin'})}
            className={`h-[1.2rem]`}
          />
        </div>
      </div>
      
    );

}



export default memo(Logout)
