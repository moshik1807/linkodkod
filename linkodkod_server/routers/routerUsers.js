import express from "express"
import { signup ,login} from "../controllers/controlerUsers.js"

const routerUsers = express.Router()

routerUsers.post('/signup',signup)

routerUsers.post('/login',login)

export default routerUsers