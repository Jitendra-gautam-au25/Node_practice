import mongoose from "mongoose";

const StudentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    class:{type:String},
    fees:{type:Number}
})

const StudentModel=mongoose.model("student",StudentSchema)

// CReate Data 

// const createData=async()=>{
//     try{
//         const StudentDetails=new StudentModel({
//             name:"Jeetu",
//             age:29,
//             class:"Sowtare Engineer",
//             fess:60050
//         })
        
//         const result=await StudentDetails.save()
//         console.log(result);

//     }
//     catch(err){

//     }
// }
const createData =async ()=>{
    let result = await StudentModel.find()
    // console.log(result)
    result.forEach((item)=>console.log(
        item.name,
        item.age,
        item.fees,
        ))
        
    
}





// const updateData= async(id)=>{
//     try{
//         const  result=await StudentModel.findByIdAndUpdate(id,{name:"Amar"})
//         console.log(result)

//     }catch (error){
//         console.log(error)

//     }

// }

// const updateData= async(id)=>{
//     try{
//         const  result=await StudentModel.updateOne({_id:id},{name:"jan",age:40},{upsert:true})
//         console.log(result)

//     }catch (error){
//         console.log(error)

//     }

// }

const deleteData=async(id)=>{
    try{
        const result=await StudentModel.deleteOne({_id:id})
        console.log(result)

    }catch (error){
        console.log(error)

    }
}

export  { createData ,deleteData}