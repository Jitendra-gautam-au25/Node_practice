const express =require('express');
// const res = require('express/lib/response');
// const path =require('path')
// const reqFilter =require('./middleware')
// const route=express.Router();
const dbConnect=require("./mongodb")



const app=express();
// route.use(reqFilter)


// mogodb
//  async function getData()
//  {
//      let result = await client.connect();
//      let db = result.db(database)
//      let collection =db.collection('practice')
//      let response =await collection.find({}).toArray();
//      console.log(response);
//  }
const main =async()=>{
        let data=await dbConnect();
        data = await data.find().toArray();
        console.warn(data);
}
main();

//  getData();
// const publicPath=path.join(__dirname,'public')
// app.set('view engine','ejs')

// app.get('/profile',(_,res)=>{
//     const user={
//         name:'Jeetu',
//         email:"jeetutvs@gamil.com",
//         country:"India",
//     }
//     res.render('profile',{user})
// })



// app.get('',(req,res)=>{
//     res.send('welcome, this is nhome Page')
// });

// app.get('/about',(req,res)=>{
//     res.send('Wlcome this about page')
// });

// app.get('/Home',(req,res)=>{
//     res.send("Welcome to Home Page")


// });

// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/home',(_,res)=>{
//     res.sendFile(`${publicPath}/home.html`)
// })


// Middleware rotes

// route.get('/aboutme',(req,res)=>{
//     res.send("WElcome to About page")
// })

// route.get('/contact',(req,res)=>{
//     res.send("WElcome to contact page")
// })

// app.use('/',route)



// app.listen(4000,()=>{
//     ("Server is runing")
// })/
