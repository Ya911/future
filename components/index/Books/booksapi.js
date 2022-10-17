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
        className="flex flex-col items-center gap-2 p-4 overflow-hidden rounded-sm cursor-pointer hover:bg-slate-400 "
      >
        <div className="relative w-20 h-20">
          <Image
            alt="book"
            layout="fill"
            src={e.volumeInfo.imageLinks?.thumbnail || e.volumeInfo.imageLinks?.smallThumbnail || '/google.svg'}
          />
        </div>
        <span className="max-w-[5.5rem] max-h-8 overflow-scroll  text-center text-xs">
          {e.volumeInfo?.subtitle}
        </span>
        <h5 className="max-w-[5.5rem] max-h-8 overflow-scroll  text-center text-xs ">
          {e.volumeInfo?.title}
        </h5>
        <span className="max-w-[5.5rem] text-center mt-2 ">50$</span>
      </div>
    );
})}

</>
)


  return (
    <>
      {result && (Search ? (SercheB.length === 0 ? (<span>لايوجد نتيجة في البحث</span>) : BookShow(SercheB) ) : BookShow(result))}
    </>
    
  );
}

export default Books;
