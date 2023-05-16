import { memo } from "react";

function Wlcome() {
    return (
        <div className="grid items-center grid-cols-[repeat(2,minmax(0,7.0rem))]">
                 <span style={{textShadow:'#ffffff 0px -6px, 0px -4px #e9b302', fontSize:'2.9rem' , WebkitTextStroke:'4px'}}  className="text-3xl font-[900] bg-gradient-to-r via-[#deaa0a] from-[#ae8818] to-[#e9b302] font-fontar text-transparent bg-clip-text">أفراح</span>

        <span className="text-md text-center font-light text-white font-['Alexandria']">مرحبا بك يا</span>


      </div>
    );
}


export default memo(Wlcome);