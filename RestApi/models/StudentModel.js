 import mongoose from "mongoose";

 
// MOONGOOSE  SCHEEMA
const StudentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true},
    fees:{type:mongoose.Decimal128,required:true,validate:(value)=>value>=5000.5}
 })

const StudentModel=mongoose.model("studentApi",StudentSchema)

export default StudentModel