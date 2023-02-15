import express from "express"
import { herfpage } from "../controller/herfNav.js"
import { routerLevelMidd } from "../controller/RouterMCon.js"

const router=express.Router()

import {allstudents,delelteStudent} from "../controller/students.js"
import { myMiddle } from "../middleware/midde.js"



// router.use(myMiddle)

// router.get("/routerM",routerLevelMidd)


router.get("/all",allstudents)
router.get("/index",herfpage)




router.get("/delelte/:id",delelteStudent)
 

export default router