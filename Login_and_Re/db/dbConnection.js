import mongoose from "mongoose";

const mongoDb=async(DATABASE_URL)=>{
    try{
        //mongoose.connect("mongodb://localhost:27017/CurdPro")
        const DB_OPTIONS={
            dbName:process.env.DB_Name,
        }
       await mongoose.connect(DATABASE_URL,DB_OPTIONS)
       console.log("Connection is Successfully")
    }
    catch (error){
        console.log(error)
    }
}

export default mongoDb