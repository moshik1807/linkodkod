import { readPosts } from "../services/postService"

export function getAllPosts(req,res){
    const posts = readPosts()
    res.json(posts)
}