
import {getAll} from '../../../helper/users/users'

const users = async  (req, res) => {
switch (req.method) {

    // _GET ALL RESTFULL API
    case "GET":
      await getAll(req,res)
        break;




          // _ POST RESTFULL API
        case "POST":
            res.status(200).send({msg:"w"}) 
            break;



              // _ PUT RESTFULL API
            case "PUT":
                res.status(200).send({msg:"w"}) 
                break;




                 // _ DELET RESTFULL API
                case "DELET":
                    res.status(200).send({msg:"w"}) 
                    break;

    default:
    res.status(400).send({msg:`Not Allowed${req.method}`})
}


}

export const config = {
  api: {
    bodyParser: false,
  },
}



export default users