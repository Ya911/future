
import Perntsidbar from "../components/index/pernt";
import dynamic from "next/dynamic";
import { useState } from "react";



const Button = dynamic(() => import("@mui/material/Button"), {
  ssr: false,
});
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"), {
    ssr: false,
  });

  const Upatesohw = dynamic(() => import("../components/index/Update/Upatesohw"), {
    ssr: false,
  });
  
export default function Update({GIT,TOKEN_VERCEL}) {




let [CheakUP , setCheakUP] = useState({message : 'التحقق من التحديث' , statu : false})
let [TrueFlase , setTrueFlase] = useState(false)
let [sha , setSha] = useState()
let [reftag , setReftag] = useState()
let [repoId , setRepoId] = useState()






const getVersoin = async ()=>{

  try {

    let O = (await import('octokit')).Octokit

    let octokit = new O({
      auth : GIT
    })
    let isUpdate = await octokit.request('GET /repos/Ya911/future/releases')
    let isNew = await octokit.request('GET /repos/Ya911/future')
    console.log(isNew);
    if(isUpdate.data[0].tag_name === process.env.NEXT_PUBLIC_BUILD_ID)throw {message : ' لايوجد تحديثات ', statu : true}
    setReftag(isUpdate.data[0].tag_name)
    setRepoId(isUpdate.data[0].id)
    let {data : {object : {sha}}} = await octokit.request(`GET /repos/Ya911/future/git/ref/tags/${isUpdate.data[0].tag_name}`)
    setSha(sha)
    setTrueFlase(true)
    return setCheakUP({message : "أظغط للتحديث" , statu : false}) 
  } catch ({message , statu}) {
    if(!statu)return setCheakUP({message : "خطا في جلب البيانات" , statu : true})
    return setCheakUP({message : message , statu : statu})
  }

}


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

        <div className="flex flex-col items-center justify-center w-[50%] bg-slate-500 rounded-sm shadow-md p-2">

       {
       !TrueFlase 
       ?<Button disabled={CheakUP.statu} onClick={getVersoin}  endIcon={<Code className="h-3 pr-3 "/>}  variant="outlined"  size='medium' >{CheakUP.message}</Button>
       :<Upatesohw sha={sha} reftag={reftag} repoId={repoId}  TOKEN_VERCEL={TOKEN_VERCEL} Button={Button} Code={Code} />
       }
        </div>


        </div>
    );
}


export async function getStaticProps() {

let {GIT ,TOKEN_VERCEL} = process.env

return {props : {GIT,TOKEN_VERCEL}}
}
Update.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='التحديث'>
    {page}
    </Perntsidbar>
    )

}



  

