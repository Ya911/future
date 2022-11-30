import Image from "next/image";
import { useContext} from "react";
import { MYCONTEXTBOOOK } from "./reduserContext";

function Books() {
  const { books , Categories , Search } = useContext(MYCONTEXTBOOOK);



let result = books && books.filter(v=>{
if(Categories !== "all" )return v.volumeInfo?.categories?.includes(Categories)
else return  v
})

let SercheB = result && result?.filter(v=>{
return v.volumeInfo.title?.toLocaleLowerCase().includes(Search.toLocaleLowerCase())|| v.volumeInfo.subtitle?.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
})



const BookShow = (m)=>(
<>
{m.map((e) => {
    return (
      <div
        key={e.id}
        className="flex flex-col overflow-hidden items-center py-2 justify-between rounded-sm cursor-pointer w-[19%] xs:w-[40%] sm:w-[35%] max-w-[9rem] overflow-ellipsis  hover:bg-zinc-900 hover:text-white text-white hover:rounded-sm"
      >
        <div className="relative w-20 h-20">
          <Image
            alt="book"
            layout="fill"
            src={e.volumeInfo.imageLinks?.thumbnail || e.volumeInfo.imageLinks?.smallThumbnail || '/google.svg'}
          />
        </div>
        <span className="overflow-scroll text-xs text-center scrollbar-hide ">
          {e.volumeInfo?.subtitle}
        </span>
        <h5 className="overflow-scroll text-xs text-center scrollbar-hide">
          {e.volumeInfo?.title}
        </h5>
        <span className="mt-2 text-center ">50$</span>
      </div>
    );
})}

</>
)


  return (
    <>
      {result && (Search ? (SercheB.length === 0 ? (<span className="w-full mt-32 text-xl text-center text-white">لايوجد نتيجة في البحث</span>) : BookShow(SercheB) ) : BookShow(result))}
    </>
    
  );
}

export default Books;
