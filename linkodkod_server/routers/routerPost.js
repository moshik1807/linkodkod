import express from "express"
import  {getAllPosts}  from "../controllers/controllerPost.js"
import  {getPostById}  from "../controllers/controllerPost.js"
import { createPost } from "../controllers/controllerPost.js"
const routerPost = express.Router()

routerPost.get('/getAll',getAllPosts)

routerPost.get("/getById/:id",getPostById)

routerPost.post("/create",createPost)

export default routerPost

