import { readPosts } from "../services/postService.js"
import { getPostByID } from "../services/postService.js"
import { newPost } from "../services/postService.js"
export async function getAllPosts(req,res){
    const posts = await readPosts()
    console.log(posts)
    res.send(posts)
}

//A function that uses a service to retrieve a post with a given ID.
export async function getPostById(req,res){
    const id = parseInt(req.params.id)    
    const data = await getPostByID(id)
    res.send(data)
}

//Create a post
export async function createPost(req,res){
    try{
        await newPost(req.body)
        res.end("Post created")
    }
    catch(err){
        res.end(result)
    }
}


