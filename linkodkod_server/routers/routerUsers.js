import express from "express"
import { signup } from "../controllers/controlerUsers.js"

const routerUsers = express.Router()

routerUsers.post('/signup',signup)


export default routerUsers