import mongoose from "mongoose";

export default async function c_db (){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Conect DB");
        
    } catch (error) {
        console.error("Could conect db")
        process.exit(1)
    }
}

export  async function d_db (){
    try {
        mongoose.disconnect(process.env.MONGODB_URI)
        console.log("disconnect DB");
        
    } catch (error) {
        console.error("Could disconnect db")
        process.exit(1)
    }
}

