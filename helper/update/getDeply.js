



export const DeployProject = async (body, headr , DitelsVersoin) => {
  try {

    let urlsi = `https://api.vercel.com/v13/deployments`
    let ID_CK_BULID = "J2Uhy4z8kmSTMajZ"
    let toJson = JSON.stringify(DitelsVersoin)
    await fetch(
      `https://api.vercel.com/v9/projects/future/env/${ID_CK_BULID}`,
      {
        headers: headr,
        method: "PATCH",
        body: JSON.stringify({ value: toJson}),
      }
    )
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
    console.log("fromboe");
    throw { message: message, isUpdate: false };
  }
};



export async function getProjectByID(headr, id, setProcec ,DitelsVersoin) {

   return await new Promise(async (resolve) => {
    let urlsi = `https://api.vercel.com/v13/deployments/${id}`;
    let key = await fetch(urlsi, { headers: headr, method: "GET" });
    let {readyState } = await key.json();
    if (readyState !== "READY"){
      setProcec(e=>e > 100 ? 100 : e + 7)
      setTimeout(() => resolve(getProjectByID(headr,id, setProcec , DitelsVersoin)), 4000);
    }else{
      let ID_CK_IUPDATE = "PhdujyopN65lVQHz"

      await fetch(
        `https://api.vercel.com/v9/projects/future/env/${ID_CK_IUPDATE}`,
        {
          headers: headr,
          method: "PATCH",
          body: JSON.stringify({ value: "null"}),
        }
      );
      setProcec(100)
      return resolve({message : {readyState} , isUpdate : false })
    }
    
  }).catch(({message})=>{
    console.log(message);
    throw {message,isUpdate : false }
  })

}







