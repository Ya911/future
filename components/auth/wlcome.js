import { memo } from "react";

function Wlcome() {
    return (
        <div className="flex flex-row-reverse items-center gap-2 mb-2">
        <span className="text-md font-light text-white font-['Alexandria']">
          مرحبا بك في
        </span>

       <span style={{textShadow:'#ffffff 0px -6px, 0px -4px #e9b302', fontSize:'2.3rem' , WebkitTextStroke:'4px'}}  className="text-3xl font-[900] bg-gradient-to-r via-[#deaa0a] from-[#ae8818] to-[#e9b302] font-fontar text-transparent bg-clip-text">عالمي</span>

      </div>
    );
}


export default memo(Wlcome);