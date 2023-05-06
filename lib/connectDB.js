import mongoose from "mongoose";
mongoose.set('strictQuery', true);

export default async function c_db (){
    try {

        mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        return process.exit(1)
    }
}

export  async function d_db (){
    try {
        mongoose.disconnect(process.env.MONGODB_URI)
        
    } catch (error) {

        process.exit(1)
    }
}

