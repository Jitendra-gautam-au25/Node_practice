// const express=require("express")

// const app=express()

// const port=3000

// app.get("/" ,(req,res)=>{
//     res.send("HEllo World")
// })

// Regualr express

// app.get(/c/,(req,res)=>{
//     res.send("This is regular expression")
   
// })

// app.get("/abcExam",(req,res,next)=>{
//     console.log("THis IS First CallBack")
//     next()
// },(req,res)=>{
//     console.log("THsi IS SEcond  CAllback")
//     res.send("THIS MORE THAN ONE EXPAMPLE")
// })


// chain Callback                                                                      
// app.route("/student")
// .get((req,res)=>{
//     res.send("All Studenst")

// })
// .post((req,res)=>{
//     res.send("Add New Student")
// })
// .put((req,res)=>{
//     res.send("Upadte data")
// })




// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
// })



import express from "express"
const port=4001
const app=express()
import fs from "fs"

app.get("/",(req,res)=>{
    res.send("helo")

})

fs.writeFileSync("read.txt","helo bab")
const fd=fs.readFileSync("read.txt","utf-8")
    console.log(fd)


app.listen(port,()=>{
    console.log(`server is ${port}`)
})