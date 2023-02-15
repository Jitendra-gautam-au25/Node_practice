//const app =require('./app')

// //const arr =[1,23,4,5,6,];
// var x =1
// function foo(){
//     var x =3;
// }
// foo();
// console.log(x);
// function bar(){
//     x =4;
// }
// bar();
// cons
// var a=['apple','banana','coco']
// var b =a
// var c=a.slice();
// console.log(b)
// a.push('date')
// console.log(c)

// var x =2;
// var y =4;
// if((y>x|| y++===4) && ++y ===5){
//     x=1;

// }else{
//     x=4;
// }
// console.log(x)
// console.log(y)

// function foo(a,b,c){
//     a++;
//     b= "new str";
//     c['key']='new value'
// }

// var a=1,
//     b='old str'
//     c={'key':'old value'};
// foo(a,b,c);    
// console.log(a,b,c)

// const fs =require('fs');
// fs.writeFileSync('node.txt',"msake file");

// server on browser  response
//const http=require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>hello .This Jeetu</h1>");
//     res.end();
// }).listen(3000)
// console.log("Server is running on 3000");

// // parameter declaratiomn
// function dataControl(req,res){
//     res.write("Whwre Are you");
//     res.end();

// }

// http.createServer(dataControl).listen(2000)

// create static api
// const data =require('./app')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'appliction\json'});
//     res.write(JSON.stringify(data));
//     res.end();

// }).listen(3000)
// console.log("server is running");

// CREATING MULTIPLE FILE IN ONE FOLDER

// const { rejects } = require('assert');
// const fs =require('fs');
// const { resolve } = require('path');
// const path =require('path');
// const dirPath=path.join(__dirname,'curd');
// const filePath=`${dirPath}/apple.txt`;

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath +'/hello'+i+'.txt','a simple file');  // HERE CREATE A FILES
// }

// fs.readdir(dirPath,(err,files)=>{  // HERE READ ALL FILES AND GIVES FILES IN ARRAY  FORM
//     console.log(files);
// })

// fs.readdir(dirPath,(err,files)=>{ // here READ ALL THE FILE ONE BY ONE
//     files.forEach((item)=>{
//         console.log("file anme is",item);
//     })
// })

// CIURD OPERATION (CRREATE FILE DELETE, REANAME)
//fs.writeFileSync(filePath,'This is a simple text file');   //(here CREATE A FILE BD INSERTED DATA)

// fs.readFile(filePath,'utf8',(err,item)=>{    // (HERE READ FILE'S DADA WHICH INSIDE IN FILE GIVE OUTPUT IN CONSOLE)
//     console.log(item);
// })

// fs.appendFile(filePath, ' and my file name node ',(err)=>{       // (HERE WE ADD THE DADA EXISTING FILE)
//     if(!err) console.log("file is update");
// })


// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{    //(here RENAME THE FILE EXISTING AND DELETE THE PRIVOUS FILE )
//     if(!err) console.log('file name is update');
// })


// ASYNCHRONOUS
// let a = 10;
// let b =0;

// setTimeout(()=>{    // (Drow back of async ,it does not value of 'b')
//     b=20;
// },2000)
// console.log(a+b);

// RESOLVE OF ASYNCHRONOUS (USING PROMISE FUNCTION)
let a =20;
//let b =0;

let waitingData =new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((b)=>{
    
    console.log(a+b);
})