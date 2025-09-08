import express, { json } from "express"
import routerPost from "./routers/routerPost.js"
import path from 'path'
const PORT = 3000
const server = express()

server.use(json())


server.use(express.static(path.join(process.cwd(), './public')));
server.use('/',routerPost)

server.listen(PORT,()=>{
    console.log(`server listening to port:${PORT}`)
})