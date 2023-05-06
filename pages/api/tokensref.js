import { post_accessToken, viert_refrshToken , viert_accessToken , post_refrshToken } from "../../helper/signin/signin";
export default async function tokensId(req, res) {

  let { method } = req;
    switch (method) {
    case "POST":
        if(!req.body.tokenRf)return res.status(403).send({msg:"send refr"})

try {
  let {paylod}= await viert_refrshToken(req.body.tokenRf)
  let {tokenAc} = await post_accessToken(paylod)
  let {tokenRf} = await  post_refrshToken(paylod);
  let {tokenVi} = await viert_accessToken(tokenAc);

  let {_id, role , name , image , exp}= tokenVi
  res.status(201).send({_id,role , name , image , exp, tokenAc ,tokenRf  })


} catch (error) {
  res.status(401).send({msg:'cant accses ref'})
}

break;


    

    // _ If Method NOT POST

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

