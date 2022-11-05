



export const DeployProject = async (body, headr ) => {
  try {
    let urlsi = `https://api.vercel.com/v13/deployments`
    let key = await fetch(urlsi,{headers: headr, method: "POST" , body : JSON.stringify(body)})
    let {id} = await key.json()
     await fetch(
      `https://api.vercel.com/v9/projects/future/env/PhdujyopN65lVQHz`,
      {
        headers: headr,
        method: "PATCH",
        body: JSON.stringify({ value: id}),
      }
    );

    return { message : {id} , isUpdate : false }
  } catch ({ message}) {
    throw { message: message, isUpdate: false };
  }
};



export async function getProjectByID(headr, id, setProcec ,DitelsVersoin) {

   return await new Promise(async (resolve) => {
    let urlsi = `https://api.vercel.com/v13/deployments/${id}`;
    let key = await fetch(urlsi, { headers: headr, method: "GET" });
    let {readyState } = await key.json();
    if (readyState !== "READY"){
      setProcec(e=>e > 100 ? 100 : e + 4)
      setTimeout(() => resolve(getProjectByID(headr,id, setProcec , DitelsVersoin)), 4000);
    }else{
      let ID_CK_IUPDATE = "PhdujyopN65lVQHz"
      let ID_CK_BULID = "J2Uhy4z8kmSTMajZ"
      await fetch(
        `https://api.vercel.com/v9/projects/future/env/${ID_CK_IUPDATE}`,
        {
          headers: headr,
          method: "PATCH",
          body: JSON.stringify({ value: "null"}),
        }
      );
      console.log(process.env.NEXT_PUBLIC_CHEK_ID_UPDATR);
      process.env.NEXT_PUBLIC_CHEK_ID_UPDATR = null
      console.log(process.env.NEXT_PUBLIC_CHEK_ID_UPDATR);
      await fetch(
        `https://api.vercel.com/v9/projects/future/env/${ID_CK_BULID}`,
        {
          headers: headr,
          method: "PATCH",
          body: JSON.stringify({ value: DitelsVersoin}),
        }
      );

      console.log(process.env.NEXT_PUBLIC_BUILD_ID);
      process.env.NEXT_PUBLIC_BUILD_ID = DitelsVersoin
      console.log(process.env.NEXT_PUBLIC_BUILD_ID);
      setProcec(100)
      return resolve({message : {readyState} , isUpdate : false })
    }
    
  }).catch(({message})=>{
    throw {message,isUpdate : false }
  })

}







