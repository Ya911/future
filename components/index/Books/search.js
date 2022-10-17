import dynamic from "next/dynamic";
import { memo , useContext } from "react";
import { MYCONTEXTBOOOK } from "./reduserContext";


const SearchIcon = dynamic(() => import("@heroicons/react/outline/SearchIcon"), {
  ssr: false,
  loading : ()=>''
});

function Search() {

    const { addSearch , Search } = useContext(MYCONTEXTBOOOK);
    return (
        <div className="flex flex-col justify-center  items-center  w-[50%]">
          <div className="relative">
            <SearchIcon className="absolute left-1.5 h-4 opacity-70 top-[35%]" />
            <input
              placeholder="أسم الكتاب"
              className="w-full text-sm focus:border-2 focus:border-solid focus:border-[#1a76d2] text-right rounded-sm h-12 placeholder:pr-3 placeholder:text-xs"
              type="search"
              name="search"
              id="search"
              value={Search}
              onChange={(e)=>addSearch(e.target.value)}
            />
          </div>
        </div>
    );
}

export default memo(Search)