import PageTitel from "../PageTitel";
import dynamic from "next/dynamic";

const Iconl = dynamic(() => import("./iconl"), {
  ssr: false,
});
const Wlcome = dynamic(() => import("./wlcome"), {
  ssr: false,
});
const Tuche = dynamic(() => import("./tuche"), {
  ssr: false,
});

const ArrowLeftIcon = dynamic(
  () => import("@heroicons/react/solid/ArrowLeftIcon"),
  {
    ssr: false,
  }
);

const LayoutAuth = ({ titel, children, isOpen }) => {
  return (
    <div
      className={`w-full relative h-screen max-h-screen flex flex-col items-center p-[1%] ${isOpen ? "justify-center":"justify-evenly"} `}
    >
      {isOpen && (
        <ArrowLeftIcon
          onClick={async () => {
            const roter = (await import("next/router")).default;
            roter.push("/auth");
          }}
          className="absolute z-1 p-1 h-10 xs:h-7 sm:h-8 hover:ring-inset hover:ring-1 hover:ring-slate-200   text-[#d7d7d7] rounded-[.2rem] cursor-pointer  left-6 top-8"
        />
      )}
      <PageTitel titel={titel} />
      {!isOpen && <Iconl />}
      {!isOpen && <Wlcome />}
      {children}

      {!isOpen &&
      <>
        <span className="font-light text-white font-fontar">
        {" "}
        أو الدخول السريع
        <br />
        مع معرف اللمس
      </span>
      <Tuche />
      </>
      }
    </div>
  );
};

export default LayoutAuth;
