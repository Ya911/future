
import  {pick}  from 'lodash'
import { cheackDataBOT } from '../../helper/apibot'



const  boot = async (req, res) => {
    let {method , body} = req
      
    switch (method) {
        
        
        case 'POST':   
        if(!body)return res.status(500).json({error_code: 500 , description : "البيانات غير صحيحة يرجى أدخلها مره أخرى"})
        let BodyChead = pick(body,['api_Token',"dojop"])
        let {error , fullfiled} = await cheackDataBOT(BodyChead)
        if(error)return res.status(401).json(error)
        return res.status(200).json(fullfiled)
        default: return res.status(500).json(`Not Alowed method ${method}`)
            
    }



}

export default boot