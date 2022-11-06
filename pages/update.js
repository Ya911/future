
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

  const UpDectiles = dynamic(() => import("../components/index/Update/DecUpdate.js"), {
    ssr: false,
  });
  
export default function Update({GIT,TOKEN_VERCEL}) {




const [CheakUP , setCheakUP] = useState({message : 'التحقق من التحديث' , isUpdate : false})
const [sha , setSha] = useState()
const [newVersoinDes , setnewVersoinDes] = useState({})
const [prosess , setProsess] =  useState(0)
const Callsetprocess = useCallback((e)=>setProsess(e),[setProsess])
const BulidUpdate = JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID)


const getVersoin = async ()=>{

  try {

    let O = (await import('octokit')).Octokit
    let octokit = new O({auth : GIT})

    let {content} = await (await octokit.request('GET /repos/Ya911/future/contents/version.json')).data
    const NeVersontoJson = {...JSON.parse(Buffer.from(content , 'base64').toString('utf8')) }
    setnewVersoinDes(NeVersontoJson)
    

    if(process.env.NEXT_PUBLIC_CHEK_ID_UPDATR !== "null"){
      let AuthHeade = { "Authorization": `Bearer ${TOKEN_VERCEL}`};
      setCheakUP({message : 'جاري أكمال التحديث', isUpdate : false})
      await (await import('../helper/update/getDeply')).getProjectByID(AuthHeade , process.env.NEXT_PUBLIC_CHEK_ID_UPDATR, setProsess , newVersoinDes)
      let Router = (await import('next/router')).default
      setCheakUP({message : "جاري تحديث الصفحة", isUpdate : false})
      return Router.reload
    }

    if(NeVersontoJson.Versoin === BulidUpdate.Versoin)throw {message : ' لايوجد تحديثات ', isUpdate : false}
    let {sha} = await (await octokit.request('GET /repos/Ya911/future/commits/main')).data
    setSha(sha)
    return setCheakUP({message : "أظغط للتحديث" , isUpdate : true}) 
  } catch ({message}) {
    setProsess(0)
    return setCheakUP({message : message , isUpdate : false})
  }

}




    return (
        <div style={{"direction" : "rtl"}} className="flex flex-row justify-between w-full p-2 border-2 border-solid rounded-md border-sky-600">

          <div className="flex flex-col w-[50%] gap-1">
          <UpDectiles {...BulidUpdate}/>
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
        zIndex : 10 
      }}}   
        disabled={CheakUP.message !== "أظغط للتحديث" && CheakUP.message !== 'التحقق من التحديث' }
        onClick={getVersoin}  endIcon={<Code className="h-3 pr-3 "/>}  variant="outlined" 
        size='medium' >
       <span className="z-10 text-xs font-fontar">{CheakUP.message}</span>
       </Button>
       :<Upatesohw
        Callsetprocess={Callsetprocess} 
        sha={sha} 
        TOKEN_VERCEL={TOKEN_VERCEL}
        prosess={prosess}  
        DitelsVersoin={newVersoinDes}
        />
       }
        </div>


        </div>
    );
}


export async function getStaticProps() {

let {GIT ,TOKEN_VERCEL } = process.env

return {props : {GIT,TOKEN_VERCEL  }}
}
Update.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='التحديثات'>
    {page}
    </Perntsidbar>
    )

}



  

