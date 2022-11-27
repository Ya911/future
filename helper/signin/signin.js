import jwt from "jsonwebtoken";
import c_db from '../../lib/connectDB';
import Dataset from '../../model/userModel'

export const post_accessToken =  (data)=> new Promise( (resolve,reject)=>{
    const op = {
        expiresIn:'10s',
    }

    const payload = {
        _id:data._id.toString(),
        role:data.role,
        name:data.fristname || data.name,
        image:data.image.url || data.image 
        
    }

    const secret = process.env.JWT_NEXT_ACCESS_TOKEN

        jwt.sign(payload,secret,op,(errAc,tokenAc)=>{

        if(errAc)return reject({errAc})
        return resolve({tokenAc})

            }
        )


    })




export const viert_accessToken = (token)=>new Promise((resolve,reject)=>{

    const secret = process.env.JWT_NEXT_ACCESS_TOKEN


       jwt.verify(token,secret,(errVi,tokenVi)=>{
        if(errVi)return reject({errVi})
        return resolve({tokenVi})

            }
        )


    })




export const post_refrshToken = (data)=>new Promise((resolve,reject)=>{


    const op = {
        expiresIn:'20m',
        audience:data._id.toString(),
    }
    const payload = {
        _id:data._id.toString(),
        role:data.role,
        name:data.fristname || data.name,
        image:data.image.url || data.image 
    }
    const secret = process.env.JWT_NEXT_REFRESH_TOKEN
    
       jwt.sign(payload,secret,op,(errRf,tokenRf)=>{

        if(errRf)return reject({errRf})
        return resolve({tokenRf})

            }
        )


    })





export const viert_refrshToken = (refrshtoken)=>new Promise((resolve,reject)=>{

    const secret = process.env.JWT_NEXT_REFRESH_TOKEN

  

       jwt.verify(refrshtoken,secret,(err,paylod)=>{
        if(err)return {err}
  
        return resolve({paylod})

            }
        )


    })


    
    
    export const isUserDb = async ({email,password}, res )=>{
    
       
                  

       
        try {
            await c_db()
            let findE = await Dataset.findOne({ email: email });
            let findU = await Dataset.findOne({ username: email });

            if (findE || findU) {

                let resulU =  findU ? await findU.isVaildPassword(password) : ''
                let resulE = findE ? await findE.isVaildPassword(password) : ''
               
 
                if (resulE || resulU) {
                  return {findE , findU}
                }else return { err : 'البيانات خاطئه'}
                


            } else return  {err : 'لايوجد لديك حساب الرجاء الأنشاء'}





          } catch (error) {
          
             return {err:'خطا في حفظ البيانات '}
           
    
    
    }
    }




