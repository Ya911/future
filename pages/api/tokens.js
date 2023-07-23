import { isUserDb, post_accessToken  , post_refrshToken ,viert_accessToken } from "../../helper/signin/signin";
export default async function dosmthin(req, res) {
  let { method , body  } = req;

  switch (method) {
    case "POST":
      let {findE , findU , err } = await isUserDb(body, res);
      if(err)return res.status(400).send({err})

      let {tokenAc,errAc} = await  post_accessToken(findE || findU);
      if(errAc)return res.status(400).send({errAc})

      let {tokenRf,errRf} = await  post_refrshToken(findE || findU);
      if(errRf)return res.status(400).send({errRf})
      
      let {tokenVi , errVi} = await viert_accessToken(tokenAc);
      if(errVi)return res.status(400).send({errRf})
      let {_id,role , name , image , exp}= tokenVi


     return res.status(200).send({_id, role,name,image,exp,tokenAc,tokenRf})

    // _ If Method NOT POST

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}


export const config = {
  api: {
    bodyParser: true,
  },
}