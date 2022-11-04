import dynamic from "next/dynamic";
import { useState } from "react";
const Button = dynamic(() => import("@mui/material/Button"));
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"));


function Upatesohw({ TOKEN_VERCEL, reftag, sha , Callsetprocess , prosess }) {

  
  const [deply, setDeply] = useState({ message: "أظغط للتحديث", isUpdate: false });



//_ أمر حذف تاق واحد


  let Updeat = async () => {
    setDeply({message : " .. جاري التحقق ", isUpdate : true})
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
        await (await import('../../../helper/update/getDeply')).getProjectByID(AuthHeade , id , Callsetprocess , reftag)
        setDeply({message : "جاري تحديث الصفحة", isUpdate : false})
        let Router = (await import('next/router')).default
        return Router.reload()  

    } catch ({message ,isUpdate}) {
      Callsetprocess(0)
      return setDeply({message : message, isUpdate : isUpdate})
    }

  };


  // WindosLodel()

  return (
    <div className="flex flex-col w-full bg-slate-500">
    {!deply.isUpdate &&
    <>
              <span className="text-sm font-medium text-white">
            - رقم التحديث : ١.٠.٠
          </span>
          <span className="text-sm font-medium text-white">
            - تاريخ التحديث : ١.٠.٠
          </span>
          <ul className="overflow-visible text-xs text-right list-disc list-inside ">
            مميزت الأصدار :<li className="">توافق مع التصميم</li>
            <li>تحسين جودة الصوت </li>
            <li>الخخخ</li>
          </ul>
    </>
    }


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
          // display:`${d ? "none" : "block"}` ,
          zIndex : 10 
        }}}
        disabled={deply.isUpdate}
        onClick={Updeat}
        endIcon={<Code className="h-3 pr-3 " />}
        variant="outlined"
        size="medium"
      >
       <span className="z-10 text-xs font-fontar">{deply.message || ''}</span>
      </Button>

    </div>
  );
}

export default Upatesohw;
