import Image from "next/image";
import {memo} from 'react'

function MyLogo() {
    return (
        <div className="flex flex-col mb-6 ">
        <div className="relative w-full h-20 overflow-hidden">
          <Image
            objectFit="contain"
            layout="fill"
            src='/img/1-01.png'
            alt='1-01.png'
            priority={true}   
            />
        </div>

        <h2 className="max-w-[39px] text-[0.2rem] text-center opacity-50 font-fonten">
          Made By Ya
        </h2>
      </div>
    );
}


export default memo(MyLogo)

