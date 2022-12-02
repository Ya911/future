
import  {pick}  from 'lodash'
import { cheackDataBOT } from '../../helper/apibot'
import Cors from 'cors'


const cors = Cors({methods: ['POST']})

  function runMiddleware(req,res,fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }
  

  

const  boot = async (req, res) => {
    await runMiddleware(req, res, cors)

    let {method , body} = req  
    switch (method) {  
        case 'POST':   
        if(!body)return res.status(500).json({error_code: 500 , description : "البيانات غير صحيحة يرجى أدخلها مره أخرى"})
        let BodyChead = pick(body,['api_Token',"dojop"])
        let {error} = await cheackDataBOT(BodyChead)
        if(error)return res.status(401).json({message : error})
        return res.status(200).json({message:"تم الأتصال"})
        default: return res.status(500).json(`Not Alowed method ${method}`)
            
    }



}

export default boot