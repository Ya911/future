import Link from "next/link";
import { memo } from "react";
import { useSelector } from "react-redux";

function LoopLinkIndex() {
  const { navbar } = useSelector((state) => state.Index);

  return (
    <>
      {navbar &&
        navbar.map((n) => {
          const { Herf, id, Icon, Text } = n;

          return (
            <li key={id}>
              <Link href={Herf}>
                <div className="flex flex-row-reverse gap-2 p-1 pr-2 text-sm cursor-pointer hover:rounded-md hover:bg-zinc-900">
                  <Icon className="h-4" />
                  <span>{Text}</span>
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
}

export default memo(LoopLinkIndex);
