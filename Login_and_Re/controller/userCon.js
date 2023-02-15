import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt"
class UserController{
    static home= (req,res)=>{
       res.render("index") 

    }
    static registration= (req,res)=>{
        res.render("registration") 
 
     }
     // without hash password
    //  static createDoc= async(req,res)=>{
    //     try {
    //         const doc=new UserModel({
    //             name:req.body.name,
    //             email:req.body.email,
    //             password:req.body.password,
    //             mobile:req.body.mobile,

    //         })
    //         // save document
    //         await doc.save()
    //         res.redirect("/login")
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    //  }

    //with hash password
     static createDoc= async(req,res)=>{
        const hasPassword=await bcrypt.hash(req.body.password,10)
        try {
            const doc=new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:hasPassword,
                mobile:req.body.mobile,

            })
            // save document
            await doc.save()
            res.redirect("/login")
        } catch (error) {
            console.log(error)
            
        }
     }
     static login= (req,res)=>{
        res.render("login") 
 
     }
    //  static verifyLogin=async(req,res)=>{
    //     try {
    //         const {email,password}=req.body
    //         const result=await UserModel.findOne({email:email})
    //         //console.log(result)
    //         if(result!=null){
    //             //const isMatch=await bcrypt.compare(password,result.password)
    //             if(result.email ==email && result.password==password){
    //                 res.send(`<h1> Login SuccessFully ${result.name}</h1`)
    //             }else{
    //                 res.send(`<h1>Error email or password inValid</h1>`)
    //             }

    //         }else{
    //             res.send(`<h1>User IS not registered First Resgistred</h1>`)
    //         }
           
          
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    //  }


     // hash password login
     static verifyLogin=async(req,res)=>{
        try {
            const {email,password}=req.body
            const result=await UserModel.findOne({email:email})
            //console.log(result)
            if(result!=null){
                const isMatch=await bcrypt.compare(password,result.password)
                if(result.email ==email && isMatch){
                    res.send(`<h1> Login SuccessFully ${result.name}</h1`)
                }else{
                    res.send(`<h1>Error email or password inValid</h1>`)
                }

            }else{
                res.send(`<h1>User IS not registered First Resgistred</h1>`)
            }
           
          
        } catch (error) {
            console.log(error)
            
        }
     }


}

export default  UserController