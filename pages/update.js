import Perntsidbar from "../components/index/pernt";
import dynamic from "next/dynamic";
import { useState } from "react";



const Button = dynamic(() => import("@mui/material/Button"), {
  ssr: false,
});
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"), {
    ssr: false,
  });

  const UpDectiles = dynamic(() => import("../components/index/Update/DecUpdate.js"), {
    ssr: false,
  });

  const Alert = dynamic(() => import('@mui/joy/Alert'), {
    ssr: false,
  });
  



export default function Update({GIT,TOKEN_VERCEL}) {




const [CheakUP , setCheakUP] = useState({message : 'التحقق من التحديث' , isUpdate : false})
const [newVersoinDes , setnewVersoinDes] = useState({})
const [prosess , setProsess] =  useState(0)
const BulidUpdate = JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID)


const getVersoin = async ()=>{



  try {
    let AuthHeade = { "Authorization": `Bearer ${TOKEN_VERCEL}`};
    let O = (await import('octokit')).Octokit
    let octokit = new O({auth : GIT})


    let {content} =  await (await octokit.request('GET /repos/Ya911/future/contents/version.json')).data
    const NeVersontoJson = {...JSON.parse(Buffer.from(content , 'base64').toString('utf8'))}
    setnewVersoinDes(NeVersontoJson)
    
    if(CheakUP.message === "أظغط للتحديث"){
    let {sha} = await (await octokit.request('GET /repos/Ya911/future/commits/main')).data
    let body = {
      gitSource: {
        type: "github",
        ref: "main",
        repoId: 552801563,
        sha: sha,
        prId: null,
      },
      target: "production",
      name: "future",
      source: "git",
    };
    let {message : {id}} = await (await import('../helper/update/getDeply')).DeployProject(body , AuthHeade , NeVersontoJson )
    await (await import('../helper/update/getDeply')).getProjectByID(AuthHeade , id , setProsess , NeVersontoJson)
    setProsess(0)
    setCheakUP({message : "جاري تحديث الصفحة", isUpdate : false})
    let Router = (await import('next/router')).default

    return setTimeout(()=> Router.reload(),5000) 
    }
    if(process.env.NEXT_PUBLIC_CHEK_ID_UPDATR !== "null"){
      setCheakUP({message : 'جاري أكمال التحديث', isUpdate : false})
      await (await import('../helper/update/getDeply')).getProjectByID(AuthHeade , process.env.NEXT_PUBLIC_CHEK_ID_UPDATR, setProsess , NeVersontoJson)
      setProsess(0)
      let Router = (await import('next/router')).default
      setCheakUP({message : "جاري تحديث الصفحة", isUpdate : false})
      return setTimeout(()=>Router.reload(),5000)
    }
    // 
    if(NeVersontoJson.Versoin === BulidUpdate.Versoin){
      throw {message : ' لايوجد تحديثات ', isUpdate : false}
    }else  return setCheakUP({message : "أظغط للتحديث" , isUpdate : true}) 

  } catch ({message}) {
    setProsess(0)
    return setCheakUP({message : message , isUpdate : false})
  }

}




    return (

        <div  style={{"direction" : "rtl"}}  className="flex flex-row justify-between w-full p-1 overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-2 shadow-2xl shadow-red p-2 w-[44%] bg-[#eab301] rounded-[0.3rem]">
          <Alert 
          sx={{color:'#eab301' ,justifyContent:'center' , borderColor:'#27272a' , backgroundColor:'black' , borderRadius:'.2rem' , padding:'.4rem' , width:"90%" }}
          size='sm'
          className='shadow-sm'
          variant='soft'
          >التحديثّ الحاليِ</Alert>

        <div className="flex flex-col gap-1 text-xs w-[100%] text-zinc-800">
        <UpDectiles {...BulidUpdate}/>
        </div>
          </div>


        <div className="flex flex-col justify-center gap-4 py-3 px-2  w-[50%] bg-zinc-800 rounded-[0.3rem]">
       
       
       {/* Scend Part */}

       

       {(CheakUP.message === 'التحقق من التحديث' ? false :  (CheakUP.message === ' لايوجد تحديثات ' ? false : true) )  && (
        <div className="flex flex-col gap-1 text-xs w-[100%] text-[#eab301]">
        <UpDectiles {...newVersoinDes}/>
        </div>
      )}
       <Button 
       sx={{
        width:"100%",
        padding:'.3rem',
        color:'#eab301',
        gap:'.3rem',
        zIndex:0,
        overflow:'hidden',
        borderColor:'#eab301',
        cursor:'pointer',
        ":hover":{opacity:"90%" , boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 20px;' , borderColor:'#eab301', zIndex:0},
        "& .MuiButton-endIcon":{
          height:16,
          padding:0,
          margin:0,
          zIndex:1,
          
        },
        "&.Mui-disabled":{borderColor:'rgba(0, 0, 0, 0.12) !important' , color:'rgb(234 234 234 / 58%)'},

        "::before":{
        content:`""`,
        position:'absolute',
        width:`${prosess}%`,
        height:"100%",
        background: "black",
        left : 0,
        top : 0,
        zIndex : 0,
      }}}   
        disabled={CheakUP.message === 'التحقق من التحديث' ? false : (CheakUP.message === "أظغط للتحديث" ? false : true)}
        onClick={getVersoin}  endIcon={<Code/>}  variant="outlined" 
        size='small'
         >
       <span className="z-10 text-[.4rem]  font-fontar">{CheakUP.message}</span>
      </Button>

        </div>
        </div>

    );
}


export async function getStaticProps() {

let {GIT ,TOKEN_VERCEL } = process.env

return {props : {GIT,TOKEN_VERCEL }}
}
Update.getLayout = function getLayout (page){
  return ( 
    <Perntsidbar titel='التحديثات'>
    {page}
    </Perntsidbar>
    )

}



  

