import { FingerPrintIcon } from "@heroicons/react/solid";
import { memo } from "react";

function Tuche() {
    return (
        <>
        <span className="font-light text-white font-fontar">
        {" "}
        أو الدخول السريع
        <br />
        مع معرف اللمس
      </span>
      <FingerPrintIcon className="h-20 text-white cursor-pointer" />
      </>
    );
}


export default memo(Tuche)