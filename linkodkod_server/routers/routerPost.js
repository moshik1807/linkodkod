import express from "express"
import  {getAllPosts}  from "../controllers/controllerPost.js"
const routerPost = express.Router()

routerPost.get('/getAll',getAllPosts)

export default routerPost

