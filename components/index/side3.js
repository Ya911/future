import dynamic from "next/dynamic";
import { memo } from "react";

const Paper = dynamic(() => import('@mui/material/Paper/Paper').then(e=>e.default), {
  ssr: false,
  loading : ()=>''
});

function Side3() {
    return (
        <>
        <Paper
          className="after:absolute after:content-['']  after:h-full after:w-[3px] after:right-[0%] after:opacity-85  after:bg-black"
          style={{
            background: "rgb(234 179 0)",
            left: "0",
            top: "0",
            width: "55%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            borderTopLeftRadius:".6rem",
            borderBottomLeftRadius:".6rem"
            
          }}
          elevation={3}
        />
        </>
    );
}

export default memo(Side3)