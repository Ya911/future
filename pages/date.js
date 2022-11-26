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
      <div className="flex items-center flex-col justify-center w-full gap-3 font-bold overflow-hidden text-md font-fontar text-[#fcd34d] p-2 ">
        <div className="flex justify-end cursor-default rounded-xl hover:opacity-70 font-fontar ">
        <DateT data={"Ar"}/>
          <span className="p-2 px-4 text-sm text-white shadow-xl text-end">{new Date().toLocaleDateString('ar-SA',{dateStyle:'long'}).toString() || ''}</span>
        </div>
        <div className="flex justify-end cursor-default hover:opacity-70 ">
        <DateT data={"En"}/>
          <span className="p-2 px-4 text-sm text-white shadow-xl text-end" >{new Date().toLocaleDateString('en-EN',{dateStyle:'long'}).toString() || ''}</span>
        </div>

      </div>
    </>
  );
}

DateAndTime.getLayout = function getLayout(page) {
  return <Perntsidbar titel='التاريخ والوقت'>{page}</Perntsidbar>;
};
