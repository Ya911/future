import dynamic from "next/dynamic";
import Perntsidbar from "../components/index/pernt";


const DateT = dynamic(() => import("../components/index/Date/datet"), {
  ssr: false,
  loading : ()=>''
});



export default function DateAndTime() {






  return (
    <>
      {/* Time H */}
      <div className="flex items-center flex-col justify-center w-full gap-3 font-bold text-md h-20 font-fontar text-[#fcd34d] p-2 bg-zinc-800">
        التاريخ والوقت هجري
        <div className="flex items-center justify-center gap-5 font-fonten ">
        <DateT data={"Ar"}/>
          <span className="pl-2 border-l">{new Date().toLocaleDateString('ar-SA',{dateStyle:'long'}).toString() || ''}</span>
        </div>
      </div>

      {/* Time M */}
      <div className="flex items-center flex-col justify-center w-full gap-3 font-bold text-md h-20 font-fontar text-[#fcd34d] p-2 bg-zinc-800">
        التاريخ والوقت هجري
        <div className="flex items-center justify-center gap-5 font-fonten ">
        <DateT data={"En"}/>
          <span className="pl-2 border-l" >{new Date().toLocaleDateString('en-EN',{dateStyle:'long'}).toString() || ''}</span>
        </div>
      </div>
    </>
  );
}

DateAndTime.getLayout = function getLayout(page) {
  return <Perntsidbar titel='التاريخ والوقت'>{page}</Perntsidbar>;
};
