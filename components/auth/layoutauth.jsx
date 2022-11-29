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
      className={`w-full relative h-screen min-h-screen  flex flex-col items-center p-[.3rem] ${isOpen ? "justify-center":"justify-evenly"} `}
    >
      {isOpen && (
        <ArrowLeftIcon
          onClick={async () => {
            const roter = (await import("next/router")).default;
            roter.push("/auth");
          }}
          className="absolute p-1 h-7 shadow-[0px_0px_0px_1px_#eab301]   hover:shadow-[0px_0px_0px_2px_#eab301] hover:transition hover:ease-in-out hover:duration-[1s]  hover:delay-[250]   text-[#d7d7d7] rounded-md cursor-pointer bg-[#222222]  text-bold left-6 top-8"
        />
      )}
      <PageTitel titel={titel} />
      {!isOpen && <Iconl />}
      {!isOpen && <Wlcome />}
      {children}
      {!isOpen && <Tuche />}
    </div>
  );
};

export default LayoutAuth;
