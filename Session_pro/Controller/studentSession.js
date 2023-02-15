class StudentControllerS {
   static set_session_info=(req,res)=>{
    console.log(req.session)
    console.log(req.session.id)
    console.log(req.session.cookie)
    console.log(req.session.cookie.maxAge)
    console.log(req.session.originalMaxAge)
    console.log(req.sessionID)
    res.send("session Infro..")
   }
   // Regenerate Session Id
   static regn_session=(req,res)=>{
      req.session.regenerate(()=>{
         console.log(`Regenerate Sessio ... New Sessoion id ${req.session.id}`)
      })
      res.send("session Id Regenerate")

   }

   //delete session Id
   static delete_session=(req,res)=>{
      req.session.destroy(()=>{
         console.log(`Session id Delete .. cannot access old id ${req.session.id}`)

      })
      res.send("Session Deleted")

   }

   //set and get session variable  
   static session_example=(req,res)=>{
      if(req.session.count){
         req.session.count++
      }else{
         req.session.count=1
      }
      res.send(`Count:${req.session.count}`)
   }

}



export default StudentControllerS