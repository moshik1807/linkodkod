import { readPosts } from "../services/postService.js"
import { getPostByID } from "../services/postService.js"
import { newPost } from "../services/postService.js"
export async function getAllPosts(req,res){
    const posts = await readPosts()
    res.json(posts)
}

export async function getPostById(req,res){
    const id = parseInt(req.params.id)    
    const data = await getPostByID(id)
    res.send(data)
}

export async function createPost(req,res){
    try{
        await newPost(req.body)
        res.end("Post created")
    }
    catch(err){
        res.end(result)
    }
}


// curl http://localhost:3000/getAll
// curl http://localhost:3000/getById/1