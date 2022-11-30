import Image from "next/image";
import {memo} from 'react'

function MyLogo() {
    return (
        <div className="flex flex-col w-full overflow-hidden  mb-6 h-[20%]">
        <div className="relative mb-[10%] h-full">
          <Image
            objectFit="contain"
            layout="fill"
            src='/img/1-01.png'
            alt='1-01.png'
            priority={true}   
            />
        </div>

        <h2 className="text-[#e6e6e6] max-w-[40px] m-auto w-full text-[0.5rem] text-center font-fonten">
          Made By Ya
        </h2>
      </div>
    );
}


export default memo(MyLogo)

