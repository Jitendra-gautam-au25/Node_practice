import express from "express"
//mport StudentController from "../Controller/studentCon.js"
const router =express.Router()

import StudentController from "../Controller/studentCon.js"

router.get("/setcookies",StudentController.set_cookie)
router.get("/getcookies",StudentController.get_cookie)
router.get("/deletecookies",StudentController.delete_cookie)










export default router