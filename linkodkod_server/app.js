import express, { json } from "express"

const PORT = 3000
const server = express()

server.use(json())

server.listen(PORT,()=>{
    console.log(`server listening to port:${PORT}`)
})