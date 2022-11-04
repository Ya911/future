
import Perntsidbar from "../components/index/pernt";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";



const Button = dynamic(() => import("@mui/material/Button"), {
  ssr: false,
});
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"), {
    ssr: false,
  });

  const Upatesohw = dynamic(() => import("../components/index/Update/Upatesohw"), {
    ssr: false,
  });
  
export default function Update({GIT,TOKEN_VERCEL  , CHEK_ID_UPDATR}) {




const [CheakUP , setCheakUP] = useState({message : 'التحقق من التحديث' , isUpdate : false})
const [sha , setSha] = useState()
const [reftag , setReftag] = useState()
const [prosess , setProsess] =  useState(0)
const Callsetprocess = useCallback(()=>setProsess,[setProsess])



const {Versoin , DateEX , Description} = JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID) 

const getVersoin = async ()=>{

  try {

    let O = (await import('octokit')).Octokit
    let octokit = new O({auth : GIT})

    let newDis =   await (await octokit.request('GET /repos/Ya911/future/contents/versoin')).data
    console.log(newDis);
    let {tag_name} = await (await  octokit.request('GET /repos/Ya911/future/releases/latest')).data
    if(CHEK_ID_UPDATR !== "null"){
      let AuthHeade = { "Authorization": `Bearer ${TOKEN_VERCEL}`};
      setCheakUP({message : 'جاري أكمال التحديث', isUpdate : false})
      await (await import('../helper/update/getDeply')).getProjectByID(AuthHeade , CHEK_ID_UPDATR , setProsess , tag_name)
      let Router = (await import('next/router')).default
      setCheakUP({message : "جاري تحديث الصفحة", isUpdate : false})
      return Router.reload
    }
    if(tag_name !== Versoin)throw {message : ' لايوجد تحديثات ', isUpdate : false}
    let {sha} = await (await octokit.request('GET /repos/Ya911/future/commits/main')).data
    setReftag(tag_name)
    setSha(sha)
    return setCheakUP({message : "أظغط للتحديث" , isUpdate : true}) 
  } catch ({message , isUpdate}) {
    if(typeof isUpdate === "undefined")return setCheakUP({message : "خطا في جلب البيانات" , isUpdate : false})
    return setCheakUP({message : message , isUpdate : isUpdate})
  }

}




    return (
        <div style={{"direction" : "rtl"}} className="flex flex-row justify-between w-full p-2 border-2 border-solid rounded-md border-sky-600">
        <div className="flex flex-col w-[50%] gap-1">
            <span>- رقم التحديث: {Versoin.slice(7) || ''}</span>
            <span>- تاريخ التحديث: {DateEX || ''}</span>
            <ul className="overflow-visible text-sm text-right list-disc list-inside ">مميزت الأصدار :
            {Description?.length !== 0 && Description.map(li=>{
                return <li key={li} className="">{li}</li>
            })}
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-[50%] bg-slate-500 rounded-sm shadow-md p-2">

       {
       !CheakUP.isUpdate 
       ?<Button 
       sx={{
        "::before":{
        content:`""`,
        position:'absolute',
        width:`${prosess}%`,
        height:"100%",
        background: "black",
        left : 0,
        top : 0,
        display:`${!CheakUP.statu ? "none" : "block"}` ,
        zIndex : 10 
      }}}   
        disabled={CheakUP.message !== "أظغط للتحديث" && CheakUP.message !== 'التحقق من التحديث' }
        onClick={getVersoin}  endIcon={<Code className="h-3 pr-3 "/>}  variant="outlined" 
        size='medium' >
       <span className="z-10 text-xs font-fontar">{CheakUP.message}</span>
       </Button>
       :<Upatesohw
        Callsetprocess={Callsetprocess} 
        sha={sha} reftag={reftag} 
        TOKEN_VERCEL={TOKEN_VERCEL}
        Button={Button}
        Code={Code}
        prosess={prosess}  
        />
       }
        </div>


        </div>
    );
}


export async function getStaticProps() {

let {GIT ,TOKEN_VERCEL , CHEK_ID_UPDATR } = process.env

return {props : {GIT,TOKEN_VERCEL  , CHEK_ID_UPDATR}}
}
Update.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='التحديثات'>
    {page}
    </Perntsidbar>
    )

}



  

