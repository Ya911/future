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
        <div className="w-[50%]">
          <div className="relative w-[80%] ">
            <SearchIcon className="absolute left-1.5 h-4 opacity-70 top-[35%]" />
            <input
              placeholder="أسم الكتاب"
              className="w-full focus:outline-none focus:border-[1px] focus:border-solid focus:border-[#27272a] h-10 pr-2 text-sm text-right rounded-sm placeholder:pr-3 placeholder:text-xs"
              type="search"
              maxLength={25}
              name="search"
              id="search"
              value={Search}
              onChange={(e)=>addSearch(e.target.value)}
            />
        <style jsx>{`
        input::-webkit-search-cancel-button{
          display: none;
        }`}</style>

          </div>
        </div>
    );
}

export default memo(Search)