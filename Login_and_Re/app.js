
import dotenv from "dotenv";
dotenv.config()
import express from "express"
import dbConnection from "./db/dbConnection.js"
const port=process.env.PORT 
const app=express()
const DATABASE_URL=process.env.DATABASE_URL
import web from "./routes/routesApi.js"

dbConnection(DATABASE_URL)



//API Json

app.use(express.json())
// Set Template Engine
app.set("view engine","ejs")

// middleware
app.use(express.urlencoded({extended:true}))

//Routes Load
app.use("/",web)


app.listen(port,()=>{
    console.log(`Server at running at ${port}`)
})