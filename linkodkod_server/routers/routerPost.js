import express from "express"
import { getAllPosts } from "../controllers/controllerPost"
const routerPost = express.Router()

routerPost.get('/getAll',getAllPosts)

