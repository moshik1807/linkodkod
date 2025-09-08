import { readPosts } from "../services/postService.js"

export async function getAllPosts(req,res){
    const posts = await readPosts()
    res.json(posts)
}
// curl http://localhost:3000/getAll