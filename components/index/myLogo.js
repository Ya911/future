import Image from "next/image";
import {memo} from 'react'
import logo from '../../public/img/1-01.png'

function MyLogo() {
    return (
        <div className="flex flex-col gap-2 ">
        <div className="relative w-full h-20 overflow-hidden">
{ logo &&         <Image
            objectFit="contain"
            layout="fill"
            src={logo}
            alt="logo"
            priority={true}   
            />}
        </div>

        <h2 className="text-sm text-center opacity-50 text-late-50 font-fonten">
          &copy; Made By Ya
        </h2>
      </div>
    );
}


export default memo(MyLogo)
