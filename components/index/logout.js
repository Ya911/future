import Image from "next/image";
import { memo } from "react";
import dynamic from "next/dynamic";

const LogoutIcon = dynamic(() => import('@heroicons/react/outline/LogoutIcon'), {
  ssr: false,
  loading : ()=>''
});



function Logout({image , name }) {


    return (
        <div style={{background : "rgb(234, 179, 0)"}} className="relative flex flex-col items-center justify-center px-1 py-1 overflow-hidden">
        {/* <div className="relative w-8 h-8 p-1 overflow-hidden border-2 border-solid rounded-full border-neutral-900 hover:opacity-80">
          {image && <Image
            className=""
            quality={100}
            layout="fill"
            src={image}
            alt="img Profile"            
          />}
        </div> */}

        <div className="px-2 py-1 p-[0.2rem] hover:bg-zinc-800 hover:cursor-pointer hover:rounded-md">
          <LogoutIcon
            onClick={async () => (await import('next-auth/react')).signOut()}
            className={`h-5`}
          />
        </div>
      </div>
      
    );

}



export default memo(Logout)
