import { readPosts } from "../services/postService.js"
import { getPostByID } from "../services/postService.js"
export async function getAllPosts(req,res){
    const posts = await readPosts()
    res.json(posts)
}

export async function getPostById(req,res){
    const id = parseInt(req.params.id)    
    const data = await getPostByID(id)
    res.send(data)
}


// curl http://localhost:3000/getAll
// curl http://localhost:3000/getById/1