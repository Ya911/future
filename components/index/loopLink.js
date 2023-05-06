import Link from "next/link";
import { memo } from "react";
import { useSelector } from "react-redux";

function LoopLinkIndex() {
  const { navbar } = useSelector((state) => state.Index);

  return (
    <>
      {navbar &&
        navbar.map((n) => {
          const { Herf, id, Icon  } = n;
          return (
            <li key={id}>
              <Link href={Herf}>
                <div className={`flex h-[100%] py-[.4rem] px-[.4rem] w-full items-center  cursor-pointer ${window.location.pathname === Herf && "bg-zinc-900 rounded-md"} hover:rounded-md hover:bg-zinc-900`}>
                  <Icon className="h-[1.1rem]" />
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
}

export default memo(LoopLinkIndex);
