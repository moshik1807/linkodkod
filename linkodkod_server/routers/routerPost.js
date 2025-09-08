import express from "express"
import  {getAllPosts}  from "../controllers/controllerPost.js"
import  {getPostById}  from "../controllers/controllerPost.js"

const routerPost = express.Router()

routerPost.get('/getAll',getAllPosts)

routerPost.get("/getById/:id",getPostById)

export default routerPost

