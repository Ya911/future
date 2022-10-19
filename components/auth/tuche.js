import { memo } from "react";
import dynamic from "next/dynamic";
const FingerPrintIcon = dynamic(() => import("@heroicons/react/solid/FingerPrintIcon"), {
  ssr: false,
  loading : ()=>''
});

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