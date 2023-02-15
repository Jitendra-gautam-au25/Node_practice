import express from "express"
import StudentControllerS from "../Controller/studentSession.js"

const router = express.Router()

router.get("/getSession",StudentControllerS.set_session_info)

router.get("/regenSession",StudentControllerS.regn_session)

router.get("/deleteSession",StudentControllerS.delete_session)
router.get("/exampleSession",StudentControllerS.session_example)

export default router