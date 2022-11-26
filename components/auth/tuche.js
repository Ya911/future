import { memo } from "react";
import dynamic from "next/dynamic";
const FingerPrintIcon = dynamic(
  () => import("@heroicons/react/solid/FingerPrintIcon"),
  {
    ssr: false,
    loading: () => "",
  }
);

function Tuche() {
  return (
    <>
      <span className="font-light text-white font-fontar">
        {" "}
        أو الدخول السريع
        <br />
        مع معرف اللمس
      </span>
      <svg
        stroke="url(#bgGradient)"
        fill="none"
        height='5.5rem'
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
          <defs>
          <linearGradient x1="50.5%" y1="0%" x2="50%" y2="0%" id="bgGradient">
          <stop offset="50%" stopColor="#f2f2f2" />
          <stop offset="50%" stopColor="#eab301" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        ></path>
      </svg>
    </>
  );
}

export default memo(Tuche);
