import Image from "next/image";
import {memo} from 'react'

function MyLogo() {
    return (
        <div className="flex flex-col mb-6">
        <div className="relative w-full h-20 max-w-[95%] mb-4 xs:mb-1 sm:mb-2 overflow-hidden">
          <Image
            objectFit="contain"
            layout="fill"
            src='/img/1-01.png'
            alt='1-01.png'
            priority={true}   
            />
        </div>

        <h2 className="max-w-[99%] text-[#e6e6e6] text-[0.3rem] text-center font-fonten">
          Made By Ya
        </h2>
      </div>
    );
}


export default memo(MyLogo)

