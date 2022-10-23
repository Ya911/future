import dynamic from "next/dynamic";
const Button = dynamic(() => import("@mui/material/Button"));
const Code = dynamic(() => import("@heroicons/react/solid/CodeIcon"));

function Upatesohw({TOKEN_VERCEL , reftag , sha , repoId}) {

  let Updeat = async () => {
  
    let gitSource = {
      type: "github",
      ref: "main",
      repoId: 552801563,
      sha: sha,
      prId: null,
    };
    // "J2Uhy4z8kmSTMajZ"

    const response = await fetch("https://api.vercel.com/v13/deployments", {
      headers: { "Authorization": `Bearer ${TOKEN_VERCEL}` },
      method: "POST",
      body: JSON.stringify({
        name: "future",
        gitSource: gitSource,
        target: "production",
      }),
    });

    // await fetch("https://api.vercel.com/v9/projects/future/env", {
    //   headers: {
    //     Authorization: `Bearer ${TOKEN_VERCEL}`,
    //   },
    //   method: "get",
    // })


    // const EidetENV = fetch(
    //   "https://api.vercel.com/v9/projects/future/env/J2Uhy4z8kmSTMajZ",
    //   {
    //     method: "PATCH",
    //     body: JSON.stringify({ value: reftag }),
    //     headers: {
    //       Authorization: `Bearer ${TOKEN_VERCEL}`,
    //     },
    //   }
    // )


    console.log(await response.json());
  };

  return (
    <div className="flex flex-col w-full bg-slate-500">
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
      <Button
        onClick={Updeat}
        endIcon={<Code className="h-3 pr-3 " />}
        variant="outlined"
        size="medium"
      >
        أظغط للتحديث
      </Button>
    </div>
  );
}



export default Upatesohw;
