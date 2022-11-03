import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Button = dynamic(() => import("@mui/material/Button"));
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"));


function Upatesohw({ TOKEN_VERCEL, reftag, sha, NEXT_PUBLIC_BUILD_ID }) {
  let [loding, setloding] = useState(false);
  let [deply, setDeply] = useState({ message: "", statu: "" });
  let [Word, setWord] = useState("أظغط للتحديث");
  const [prosess , setProsess] =  useState(0)
  const [error , setError] =  useState(null)


  useEffect(()=>{
    (async ()=>{
      const Router = (await import("next/router")).default
       return Word === "جاري تحميل التحديث " ?  Router.reload() : ''
    })()
  },[Word])

//_ أمر حذف تاق واحد

  // console.log("error", error);
  // console.log("document", document.readyState);
  let Updeat = async () => {
    setloding(true);
    let ID_CK_IUPDATE = "PhdujyopN65lVQHz"
    let ID_CK_BULID = "J2Uhy4z8kmSTMajZ"

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

      let {message: {value}} = await (await import('../../../helper/update/getDeply')).getkeys(ID_CK_IUPDATE , AuthHeade , ID_CK_BULID , NEXT_PUBLIC_BUILD_ID)
      setWord("جاري تحميل التحديث ")

      if(value === "null") {
        let {message : {id}} = await (await import('../../../helper/update/getDeply')).DeployProject(body , AuthHeade)
        let {message :{readyState}} = await (await import('../../../helper/update/getDeply')).getProjectByID(AuthHeade , id , setProsess , reftag)
        setloding(false);
        setWord("جاري تحديث الصفحة")
        return setDeply({message : readyState , statu : 200})
      } 
      let {message :{readyState}} = await (await import('../../../helper/update/getDeply')).getProjectByID(AuthHeade , value , setProsess , reftag)
      setloding(false);
      setWord("جاري تحديث الصفحة")
      return setDeply({message : readyState , statu : 200})


    } catch ({message ,statu}) {
      setloding(false);
      setProsess(0)
      setError({message,statu})
      setWord(message)
      return setDeply({message : message,statu : statu})
    }

  };


  // WindosLodel()

  return (
    <div className="flex flex-col w-full bg-slate-500">
      {!loding && (
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
      )}
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
          display:`${loding ? "none" : "block"}` ,
          zIndex : 10 
        }}}
        onClick={Updeat}
        endIcon={<Code className="h-3 pr-3 " />}
        variant="outlined"
        size="medium"
      >
       <span className="z-10 text-xs font-fontar">{Word}</span>
      </Button>

    </div>
  );
}

export default Upatesohw;
