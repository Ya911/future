import c_db, { d_db } from "../../lib/connectDB";
import Dataset from "../../model/userModel";


const ITEMS_NUMPER_= 5

export default async function PagesTwoTone(req, res){
let { method } = req
let page = req.query.page || 1
let itemspage = +req.query.itemspage || 5


switch (method) {
    case "GET":
try {



    await c_db()
    let skip = (page - 1) * itemspage /* رقم الصفحة ضرب رقم العدد بكل صفحة عشان السكيب */
    let countPromise =  Dataset.estimatedDocumentCount({}) /* عدد المستندات في الداتا  */
    let itemsPromise =  Dataset.find({}).limit(itemspage).skip(skip) /* المستندات اللي تحتاجها بكل صفحه */


    const [count ,items]= await Promise.all([countPromise,itemsPromise])
    let pagesCount = count / itemspage /*كم عدد السمتندات بكل صفحه */



   res.status(200).json({pagination:{count,pagesCount , itemspage},items})



} catch (error) {
    res.status(303).json("error in fatch")
}
        
        break;

    default: res.status(401).json(`Not Alowed ${method} `) 
      
}


}