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
                <div className={`flex flex-row-reverse my-2  justify-center px-1 py-1 cursor-pointer ${window.location.pathname === Herf && "bg-zinc-900 rounded-md"  } hover:rounded-md hover:bg-zinc-900`}>
                  <Icon className="w-4 h-5" />
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
}

export default memo(LoopLinkIndex);
