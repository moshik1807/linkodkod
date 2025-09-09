import express, { json } from "express"
import routerPost from "./routers/routerPost.js"
import routerUsers from "./routers/routerUsers.js"
import path from 'path'
import cors from 'cors'

const PORT = 3000
const server = express()

server.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

server.use(json())


server.use(express.static(path.join(process.cwd(), './public')));
server.use('/posts',routerPost)
server.use('/users',routerUsers)

server.listen(PORT,()=>{
    console.log(`server listening to port:${PORT}`)
})