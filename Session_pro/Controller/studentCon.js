class StudentController {
    static set_cookie=(req,res)=>{
        res.cookie("username","geekyshows",{maxAge:30000})
        res.send("Cookie Set ...")
    }
    static get_cookie=(req,res)=>{
        console.log(req.cookies)
        res.send("Cookie get ...")
    }
    static delete_cookie=(req,res)=>{
        res.clearCookie("delete User")
        res.send("Cookie Deleted ...")
    }
}

export default StudentController