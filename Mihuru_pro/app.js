import  Express  from "express";
import path from "path"
import nodemailer from "nodemailer"
 import sender from "./store.js"

const port=3000
const app=Express()
const __dirname=path.resolve()


// app.get("/",(req,res)=>{
//     res.send("THis is project")
// })

app.use(Express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname ,"public","./index.html"))
})




app.post("/send",(req,res)=>{
    // res.send("send data")
    // let emailfirst1=req.query.userEmail;
    // let emailSecond=req.query.emailSecond;
    // let subject=req.query.subject;
    // let message=req.query.message;

    const mail=nodemailer.createTransport({
        service:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{user:sender.userEmail,
              pass:sender.pass}
              
    })
    //console.log(emailfirst1)
    const mess= mail.sendMail({
        from:"reachjitendra27@gmail.com",
        to:[userEmail],
        subject:subject,
        html:message
    },(err)=>{
        if(err) throw err;
        res.send("Mail has been send")
    })
})









app.listen(port,()=>{
    console.log(`Server Listening at port ${port}`)
})
