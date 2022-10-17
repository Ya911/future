import {Schema , model , models} from "mongoose";
import bcrypt from "bcrypt";




// _ أنشاء شكيمة في قاعدة البيانات
const SUsers = new Schema({
  fristname: { type: String, required: [true, "لايمكن ان تكون الخانة فارغة"] },
  email: {
    type: String,
    required: [true, "لايمكن ان تكون الخانة فارغة"],
    unique: true,
  },
  password: { type: String, required: [true, "لايمكن ان تكون الخانة فارغة"] },
  username: {
    type: String,
    required: [true, "لايمكن ان تكون الخانة فارغة"],
    unique: true,
  },
  image:{
    public_id:{type:String , required:true},
    url:{type:String , required:true}
  },
  AccountـCreationـDate:{type:Date , default:Date.now()},
  role : {type:String , default:'user'}
  

});


// _ تشفير كلمة المرور قبل تخزينها عن طريق ميدل وير
SUsers.pre("save", async function (next) {
  try {
    let solit = await bcrypt.genSalt(10); // ! Step 1
    let hash_password = await bcrypt.hash(this.password, solit); // ! Step 2
    console.log(hash_password);
    this.password = hash_password
    return next; // ! step 3 , END Hash
  } catch (error) {
    throw new Error("خطاء في قاعدة البيانات ــ١");
  }
});


// _ اضافة ميثود لمطابقة كلمة المرور بعد التسجيل 
SUsers.method('isVaildPassword',async function(password){

  try {

    return await bcrypt.compareSync(password,this.password)
    
  } catch (error) {
    throw new Error(error)
  }

})




// Creat Model
let Dataset = models.usersCredentch || model("usersCredentch", SUsers)


export default Dataset;
