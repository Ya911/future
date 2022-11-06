import dynamic from "next/dynamic";
import { useState } from "react";
const Button = dynamic(() => import("@mui/material/Button"));
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"));
const UpdateShow = dynamic(() => import("./DecUpdate.js"));


function Upatesohw({ TOKEN_VERCEL, sha , Callsetprocess , prosess , DitelsVersoin }) {

  
  const [deply, setDeply] = useState({ message: "أظغط للتحديث", isUpdate: false });



//_ أمر حذف تاق واحد

  let Updeat = async () => {

    setDeply({message : " .. جاري التحديث ", isUpdate : true})
    let AuthHeade = { "Authorization": `Bearer ${TOKEN_VERCEL}`};
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

    try {

        let {message : {id}} = await (await import('../../../helper/update/getDeply')).DeployProject(body , AuthHeade)
        await (await import('../../../helper/update/getDeply')).getProjectByID(AuthHeade , id , Callsetprocess , DitelsVersoin)
        setDeply({message : "جاري تحديث الصفحة", isUpdate : true})
        Callsetprocess(0)
        let Router = (await import('next/router')).default
        return Router.reload()  
    } catch ({message}) {
      Callsetprocess(0)
      return setDeply({message : message, isUpdate : true})
    }

  };



  return (

    <>
    {!deply.isUpdate && <UpdateShow {...DitelsVersoin}/>}
    <div className="flex flex-col w-full bg-slate-500">
        <Button
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
        disabled={deply.isUpdate}
        onClick={Updeat}
        endIcon={<Code className="z-10 h-3 pr-3 "/>}
        variant="outlined"
        size="medium"
      >
       <span className="z-10 text-xs font-fontar">{deply.message || ''}</span>
      </Button>

    </div>
    </>
  );
}

export default Upatesohw;
