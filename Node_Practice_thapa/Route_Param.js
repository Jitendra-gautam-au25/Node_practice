import express from "express"
const app=express()
import student  from "./routes/routes.js"
import { myMiddle } from "./middleware/midde.js"
import { dbConnected } from "./dbConnect/Mongodb.js"
import {createData,deleteData, } from "./models/studentsModel.js"

//import { updateData } from "./models/studentsModel.js"

const port=3000

dbConnected()
// static file css

// create data call
createData()
app.use(express.static("public"))

// setup directory where template files are loacted
// app.set("views","./views")

app.set("view engine","ejs")

// uPadte Dcument
//updateData("6431f1b84178c1a6f83c3d26")
deleteData("6411f1b84178c1a6f83c3d26")
//Application  of middleware
// app.use("/student/all",myMiddle)  // path given root (student) then path of routes(all)

// app.use("/",student)

// lOad routes 
app.use("/student",student)

app.get("/",(req,res)=>{
    res.send("HEllo Route")
})


// // Route PArameter
// app.get("/student/delete/:id",(req,res)=>{
//     console.log(req.params)
//     res.send("STudent ID DELETE")
// })

// app.get("/product/:category/:id",(req,res)=>{
//     console.log(req.params)
//     // res.send(`Product Category:${req.params.category} and Product ID:${req.params.id}`)
//     const {category,id}=req.params      // object destructureing
//     res.send(`Product Category:${category} and Product ID:${id}`)
// })



// app.get("/product/order/:year/and/:month",(req,res)=>{
//     console.log(req.params)
//     const {year,month}=req.params
//     res.send(`Order Year:${year} Month:${month}`)
// })

// app.get("/loaction/:from-:to",(req,res)=>{
//     console.log(req.params)
//     const {from,to}=req.params
//     res.send(`location :${from} to:${to}`)

// })

// //With REgs

// app.get("/reg/delete/:id([0-9]{2})",(req,res)=>{
//     console.log(req.params)
//     res.send(`Students Delete: ${req.params.id}`)

// })

// //app params

// app.param(["id","page"],(req,res,next,value)=>{
//     console.log(`called one time ${value}`)
//     next()
// })

// app.get("/user/:id/:page",(req,res,next)=>{
//     console.log("this is path one")
//     next()
// })

// app.get("/user/:id/:page",(req,res)=>{
//     console.log("this is path two")
//     res.send('REspone comming')
// })








app.listen(port,()=>{
    console.log(`Server is Running ${port}`);
})