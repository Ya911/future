import { memo } from "react";

function Iconl() {
  return (
    <div className="relative flex justify-center w-full row-span-1 ">
      {/* <MicrophoneIcon  className="h-40 bg-clip-content bg-gradient-to-r from-cyan-500 to-blue-500"/> */}

      <svg
        className="h-[11rem]"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="url(#bgGradient)"

      >
        <defs>
          <linearGradient
            x1="50.5%"
            y1="0%"
            x2="50%"
            y2="0%"
            id="bgGradient"
          >
            <stop offset="50%" stopColor="#f2f2f2"/>
            <stop offset="50%" stopColor="#eab301"/>

          </linearGradient>
        </defs>

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    </div>
  );
}

export default memo(Iconl);
