import { mongoose } from "mongoose"

// const dbConnected=()=>{
//    return  mongoose.connect("mongodb://localhost:27017/testing").then(()=>{
//     console.log("Conect successFully")
//    })
//    .catch((err)=>{
//     console.log("not connected")

//    })
// }

// async and await function use
// const dbConnected=async ()=>{
//     try{
//         await  mongoose.connect("mongodb://localhost:27017/testing")
//             console.log("Conect successFully")
//            }
//            catch(err){
//             console.log("not connected")
        
//            }

//     }


const dbConnected=async()=>{
    try {
        await mongoose.connect("http://1202")
        console.log("connect")
    } catch (error) {
        console.log("not coonect")
    }
}
  
 
export {dbConnected}