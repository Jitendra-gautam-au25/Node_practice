import expres from "express"
//import cookieParser from "cookie-parser"
//import web from "./routes/webRoutes.js"
import web from "./routes/webSession.js"
import session from "express-session"
const port = 3000

const app = expres()

// Cookie parser
// middle sessio
app.use(session({
    name:"sessiongeek",
    secret:"iamkeydale",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))


//app.use(cookieParser())
app.use("/",web)

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`)
})