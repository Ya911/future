import Image from "next/image";
import {memo} from 'react'

function MyLogo() {
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-[25%] h-[25%]">
        <div className="relative h-[4rem] max-h-[4rem] w-full">
          <Image
            objectFit="contain"
            layout="fill"
            src='/img/1-01.png'
            alt='1-01.png'
            priority={true}   
            />
        </div>

        <h2 className="text-[#e6e6e6] mt-2 max-w-[40px] w-full text-[0.5rem] text-center font-fonten">
          Made By Ya
        </h2>
      </div>
    );
}


export default memo(MyLogo)

