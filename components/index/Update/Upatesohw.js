import dynamic from "next/dynamic";
import { useState } from "react";
const Button = dynamic(() => import("@mui/material/Button"));
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"));
const CircularDeterminate = dynamic(() => import("./Loding.js"));

function Upatesohw({ TOKEN_VERCEL, reftag, sha, NEXT_PUBLIC_BUILD_ID }) {
  let [loding, setloding] = useState(false);
  let [deply, setDeply] = useState({ message: "", statu: "" });
  let [iD, setiD] = useState(false);
  let [prosess, setProsess] = useState(0);

  let Updeat = async () => {
    setloding(true);
    let AuthHeade = { Authorization: `Bearer ${TOKEN_VERCEL}` };
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
//klk
    try {
      if (reftag === NEXT_PUBLIC_BUILD_ID) {
        setDeply({ message: "تم التحديث ", statu: false });
        setloding(false);
        const router = (await import("next/router")).default;
        return router.reload();
      }
      const {
        deployments: [friatDEploy],
      } = await ( 
        await fetch("https://api.vercel.com/v6/deployments", {
          headers: AuthHeade,
          method: "GET",
        })
      ).json();
      console.log(friatDEploy);
      switch (friatDEploy.state) {
        case "BUILDING":
          throw { message: "يوجد عملية تحديث يرجى الأنتظار", statu: true };
        case"CANCELED":
          return 
          case "QUEUED":
        return { message: "العملية قيد الأنتظار", statu: true };
        case "READY":
          if (Date.now() < friatDEploy.ready + 3 * 60 * 1000) {
            onsole.log("d");
            throw {
              message: "يوجد عملية قيد الرفع يرجى الأنتظار",
              statu: true,
            };
          }
          console.log("f");

          (async function ImNot() {
            try {
              const response = await fetch(
                "https://api.vercel.com/v13/deployments",
                {
                  headers: AuthHeade,
                  method: "POST",
                  body: JSON.stringify({ ...body }),
                }
              );
              const {id } = await response.json();
              console.log(response);

            //  let { readyState } = await (await fetch(`https://api.vercel.com/v13/deployments/${id}`,{headers: AuthHeade,method: "GET",})).json()
            //  console.log(readyState);
            //  setProsess((e)=>e === 100 ? 0  : e + 10);
            //  console.log(readyState);
  


              if(error)throw {message : "خطا في  [تأكيد التحديث]" , statu : false}
              await fetch(
                "https://api.vercel.com/v9/projects/future/env/J2Uhy4z8kmSTMajZ",
                {
                  method: "PATCH",
                  body: JSON.stringify({ value: reftag }),
                  headers: AuthHeade,
                }
              );
              setloding(false);
              return setProsess(100);
            } catch (error) {
              return setDeply({
                message: "يوجد عملية قيد الرفع يرجى الأنتظار",
                statu: true,
              });
            }
          })();
      }
    } catch ({ message, statu }) {
      setloding(false);
      if (!statu) return setDeply({ message: message, statu: statu });
      return setDeply({ message: "خطا في التحديث", statu: false });
    }
  };

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
        onClick={Updeat}
        endIcon={<Code className="h-3 pr-3 " />}
        variant="outlined"
        size="medium"
      >
        أظغط للتحديث
      </Button>
      {loding && <CircularDeterminate prosess={prosess} />}
    </div>
  );
}

export default Upatesohw;
