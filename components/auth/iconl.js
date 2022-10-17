import { MicrophoneIcon } from "@heroicons/react/solid";
import { memo } from "react";

function Iconl() {
    return (
        <div className="relative flex justify-center w-full ">
        <MicrophoneIcon className="text-white h-[10.0rem]  bg-clip-text`" />
      </div>
    );
}


export default memo(Iconl)