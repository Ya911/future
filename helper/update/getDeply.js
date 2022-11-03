
export const getkeys = async (Key_ID_UPATE, headr , key_ID_BULID , NEXT_PUBLIC_BUILD_ID_NOW) => {
  try {
    let keyBULID = await fetch(
      `https://api.vercel.com/v9/projects/future/env/${key_ID_BULID}`,
      { headers: headr, method: "get" }
    );
    let key_ = await keyBULID.json();
    if(key_.value === NEXT_PUBLIC_BUILD_ID_NOW )throw {message : "لتم التحديث "  , statu : 200}


    let keyUPDATE = await fetch(
      `https://api.vercel.com/v9/projects/future/env/${Key_ID_UPATE}`,
      { headers: headr, method: "get" }
    );
    let { value } = await keyUPDATE.json();
    return { message: {value}, statu: keyUPDATE.status };


  } catch ({ message, statu }) {
    throw { message: message, statu: statu };
  }
};



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

    return { message : {id} , statu : key.status }
  } catch ({ message}) {
    throw { message: message, statu: 502 };
  }
};



export async function getProjectByID(headr, id , setProcec ,value) {

   return await new Promise(async (resolve) => {
    let urlsi = `https://api.vercel.com/v13/deployments/${id}`;
    let key = await fetch(urlsi, { headers: headr, method: "GET" });
    let {readyState } = await key.json();
    if (readyState !== "READY"){
      setProcec(e=>e > 100 ? 100 : e + 4)
      setTimeout(() => resolve(getProjectByID(headr, id , setProcec)), 4000);
    }else{
      await fetch(
        `https://api.vercel.com/v9/projects/future/env/PhdujyopN65lVQHz`,
        {
          headers: headr,
          method: "PATCH",
          body: JSON.stringify({ value: "null"}),
        }
      );
      await fetch(
        `https://api.vercel.com/v9/projects/future/env/J2Uhy4z8kmSTMajZ`,
        {
          headers: headr,
          method: "PATCH",
          body: JSON.stringify({ value: value}),
        }
      );
      setProcec(100)
      return resolve({message : {readyState} , statu : key.status })
    }
    
  }).catch(({message})=>{
    throw {message,statu : 502 }
  })

}







