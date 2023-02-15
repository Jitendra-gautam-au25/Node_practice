import {join} from "path"
const allstudents=(req,res)=>{
    // res.send("All studnets data")
    // res.sendFile(join(process.cwd(),"views","about.html"))

    const data={"name":"BAbu", "id":"10","marks":[1,2,3,4,5,6]} // ejs if conditons
    res.render("about",data) // for ejs file 

}

const delelteStudent=(req,res)=>{
    console.log(req.params)
    const {id}=req.params
    if(id==10){
        res.send("Y Nehu ki id H not delete")
    }else{
        res.send(`students id delete $${id}`)
    }

}
 
export  {allstudents,delelteStudent}