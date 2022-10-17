import Image from "next/image";
import { memo } from "react";
import dynamic from "next/dynamic";

const LogoutIcon = dynamic(() => import('@heroicons/react/outline/LogoutIcon'), {
  ssr: false,
  loading : ()=>''
});



function Logout({image , name }) {


    return (
        <div className="relative flex flex-row-reverse items-center justify-center gap-3 px-3 py-3 overflow-hidden bg-zinc-900">
        <div className="relative w-10 h-10 p-1 overflow-hidden border-2 border-solid rounded-full border-zinc-800 hover:opacity-80">
          {image && <Image
            className=""
            quality={100}
            layout="fill"
            src={image}
            alt="img Profile"            
          />}
        </div>
        {name && <div className="text-xs max-w-[70px] overflow-hidden">
          {name}
        </div>}
        <div className=" hover:opacity-80 p-[0.2rem] hover:bg-zinc-500 hover:cursor-pointer hover:rounded-sm">
          <LogoutIcon
            onClick={async () => (await import('next-auth/react')).signOut()}
            className={`flex flex-row-reverse gap-2 h-4   `}
          />
        </div>
      </div>
      
    );

}



export default memo(Logout)
