 import mongoose from "mongoose";

 
// MOONGOOSE  SCHEEMA
const userSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String,required:true,trim:true},
    mobile:{type:Number,required:true,maximum:10},
        
   
    join:{type:Date, default:Date.now}
 })

const UserModel=mongoose.model("regis",userSchema)

export default UserModel