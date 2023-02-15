// const http =require("http")

// const server=http.createServer((req,res)=>{
//     res.end("Heol fromm me ")

// })

// server.listen(8000,()=>{
//     console.log("server is listen");
// })

// fs module
// const http =require("http")
// const fs=require("fs")
// const add =("./module/import.js")
// const data=fs.readFileSync("read.txt","utf-8")
// console.log(data);

// fs.rename("read.txt","myFile.txt",()=>{
//     console.log("name chnage");
// })
// fs.mkdir("create",(err)=>{
//     console.log("create folder");
// })

// fs.writeFile("./create/reat.txt","crrate data",()=>{
//     console.log("create data");
// })

// const os =require("os")
// console.log(os.arch());



// const server= http.createServer((req,res)=>{
//     res.end("Helo ok")
// })

// server.listen(2000,()=>{
//     console.log("server is rumning");
// })


const http = require("http")
const fs = require("fs")
// const {event,myEvent}=require("./event.js")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("helo server")
    }else if(req.url == "/about") {
            res.end("helo server about")
        
    } else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/Userapi/appi.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data)


        })

    }else if (req.url == "/event") {
        fs.readFile(`${__dirname}/event.js`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data)


        })    

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("404 Not Found");
    }




})

server.listen(3000, () => {
    console.log("sever running on port 2000");

})