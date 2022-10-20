
import Perntsidbar from "../components/index/pernt";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@mui/material/Button"), {
  ssr: false,
});
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"), {
    ssr: false,
  });
export default function Update() {







    return (
        <div style={{"direction" : "rtl"}} className="flex flex-row justify-between w-full p-2 border-2 border-solid rounded-md border-sky-600">
        <div className="flex flex-col w-[50%] gap-1">
            <span>- رقم التحديث : ١.٠.٠</span>
            <span>- تاريخ التحديث : ١.٠.٠</span>
            <ul className="overflow-visible text-sm text-right list-disc list-inside ">مميزت الأصدار :
                <li className="">توافق مع التصميم</li>
                <li>تحسين جودة الصوت </li>
                <li>الخخخ</li>
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
        <Button  endIcon={<Code className="h-3 pr-3 "/>}  variant="outlined"  size='medium' >التحقق من التحديث</Button>
        </div>

        </div>
    );
}


Update.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='التحديث'>
    {page}
    </Perntsidbar>
    )

}



  

