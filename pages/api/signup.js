import { formResult, addUser } from "../../helper/signup/promise";


export default async function signup(req, res) {

  if (req.method === "POST") {


    let { piceFields, piceFiles , err } = await formResult(req,res);
    if(err)return res.status(405).send({msg:err})
    await addUser(res, piceFiles, piceFields);


  } else return res.status(401).send({ msg: `NotAlooed ${req.method}` });

}

export const config = {
  api: {
    bodyParser: false,
  },
};
