import express from "express"
import  {getAllPosts}  from "../controllers/controllerPost.js"
import  {getPostById}  from "../controllers/controllerPost.js"
import { createPost } from "../controllers/controllerPost.js"
import auth from "../services/authService.js"
const routerPost = express.Router()

routerPost.post('/getAll',auth(['user']),getAllPosts)

routerPost.post("/getById/:id",auth(['user']),getPostById)

routerPost.post("/create",auth(['user']),createPost)

export default routerPost

