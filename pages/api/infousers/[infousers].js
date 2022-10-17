import c_db from "../../../lib/connectDB";
import Dataset from "../../../model/userModel";
import { pick } from "lodash";

export default async function GetId(req, res) {
  let {
    method,
    query: { infousers },
  } = req;

  switch (method) {
    case "GET":
      try {
        await c_db();
        let getinfoUser = await Dataset.findById(infousers);       
        return await res.status(200).json(pick(getinfoUser,["image","fristname",'email','username','role','AccountـCreationـDate']));
      } catch (error) {
        return await res.status(200).json("Not Data");

      }

    default:
      return res.status(401).json(`Not Alowed ${method} `);
  }
}
