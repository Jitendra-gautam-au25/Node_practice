import  express  from "express";
import UserController from "../controller/userCon.js";
const router=express.Router()


router.get("/",UserController.home)
router.get("/registration",UserController.registration)
router.post("/registration",UserController.createDoc)
router.get("/login",UserController.login)
router.post("/login",UserController.verifyLogin)
// router.put("/update/:id",UserController.UpadteDocById)
// router.delete("/delete/:id",UserController.deleteDocById)















export default router