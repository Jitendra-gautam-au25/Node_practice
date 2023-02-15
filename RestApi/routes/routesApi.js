import  express  from "express";
import StudentController from "../controller/studentCon.js";
const router=express.Router()


router.get("/getDoc",StudentController.getAllDoc)
router.post("/create",StudentController.createDoc)
router.get("/:id",StudentController.getDocById)
router.put("/update/:id",StudentController.UpadteDocById)
router.delete("/delete/:id",StudentController.deleteDocById)
















export default router