import PerntSidbar from "../components/index/pernt";
import dynamic from "next/dynamic";


const Search = dynamic(() => import("../components/index/Books/search"), {
  ssr: false,
  loading : ()=>''
});

const Category = dynamic(() => import("../components/index/Books/category"), {
  ssr: false,
  loading : ()=>''
});


const Booksapi = dynamic(() => import("../components/index/Books/booksapi"), {
  ssr: false,
  loading : ()=>''
});

const ContextBooks = dynamic(() => import("../components/index/Books/reduserContext"), {
  ssr: false,
  loading : ()=>''
});




function Books() {


  return (
    <ContextBooks>

      {/* Frist Colem Start */}
      <div className="flex justify-between w-full gap-2 px-1 ">
        {/* Search Input  */}
        <Search/>
        {/* Category input  */}
        <Category/>
      </div>
          {/* Frist Colem END */}



      {/* {/* Scend Colem Start */}
      <div className="flex flex-wrap justify-between w-full max-w-sm px-2 overflow-y-scroll text-white scrollbar-hide ">
      <Booksapi/>
      </div>
      {/* {/* Scend Colem END */}

    </ContextBooks>
  );
}








Books.getLayout = function getLayout(page) {
  return <PerntSidbar titel='الكتب'>{page}</PerntSidbar>;
};

export default Books;
