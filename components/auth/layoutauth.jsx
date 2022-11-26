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
      className={`w-full relative flex flex-col justify-center h-[40rem] items-center p-5 gap-5 `}
    >
      {isOpen && (
        <ArrowLeftIcon
          onClick={async () => {
            const roter = (await import("next/router")).default;
            roter.push("/auth");
          }}
          className="absolute p-1 h-5 shadow-[0px_0px_0px_1px_#d7d7d7,0px_0px_0px_3px_#eab301] hover:bg-[#f3f3f3] hover:text-[#eab301] hover:shadow-[0px_0px_0px_4px_#eab301,0px_0px_0px_4px_#d7d7d7] hover:transition hover:ease-in-out hover:duration-[1s]  hover:delay-[250]   text-[#d7d7d7] rounded-2xl cursor-pointer bg-[#222222]  text-bold left-6 top-8"
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
