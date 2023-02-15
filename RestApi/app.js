import express from "express"
const port=process.env.PORT|| 3000
import dbConnection from "./db/dbConnection.js"
const app=express()

import web from "./routes/routesApi.js"

dbConnection()


//API Json

app.use(express.json())


//Routes Load
app.use("/student",web)


app.listen(port,()=>{
    console.log(`Server at running at ${port}`)
})