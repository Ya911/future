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
      <div className="relative flex flex-col items-center justify-between w-full h-full overflow-hidden">




          {/* Frist Colem Start */}
      <div className="flex relative h-[15%] sm:px-[0]  xs:px-2 justify-between w-[90%] sm:w-[95%]  xs:w-[100%] ">
        {/* Search Input  */}
        <Search/>
        {/* Category input  */}
        <Category/>
      </div>
          {/* Frist Colem END */}




{/* 
      {/* {/* Scend Colem Start */}
      <div className="relative flex flex-wrap justify-between w-full h-[84%] overflow-scroll scrollbar-hide">
      <Booksapi/>
      </div>
      {/* Scend Colem END */}



      </div>
    </ContextBooks>
  );
}








Books.getLayout = function getLayout(page) {
  return <PerntSidbar titel='الكتب'>{page}</PerntSidbar>;
};

export default Books;
