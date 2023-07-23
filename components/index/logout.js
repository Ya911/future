import { memo } from "react";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";
const LogoutIcon = dynamic(() => import('@heroicons/react/outline/LogoutIcon'), {
  ssr: false,
  loading : ()=>''
});



function Logout() {


    return (
        <div className="relative flex flex-col items-center rounded-sm justify-end pb-[23%]  h-[10%] overflow-hidden">

        <div className="py-[.4rem] hover:bg-zinc-900 px-[.4rem] hover:cursor-pointer hover:rounded-md">
          <LogoutIcon
          color="#eab301"
            onClick={async()=> {
              const Router = (await import('next/router')).default
              signOut({redirect:false})
              return Router.push('/auth')
            }}
            className={`h-[1.2rem]`}
          />
        </div>
      </div>
      
    );

}



export default memo(Logout)
