import { checkIfFFileExists ,Time} from "./helpService.js";
import { Readfile,WritePosts } from '../dal/dalPosts.js'

//Returns all existing posts in the list
export async function readPosts(){
    try {
        const data = await Readfile()
        console.log("File content:", data);
        return data
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

//Returns a specific post from the list by ID number
export async function getPostByID(id){
    const data = await Readfile() 
      
    const post = data.filter((e) => e.id == id)
    if(post.length){
        return post[0]
    }else{
        return "This post does not exist."
    }
}

//Add a new post to the list
export async function newPost(post) {
    try{
        const fileExists = await checkIfFFileExists(post.imgSrc)
        if(!fileExists){
            throw Error ("No such image exists.")
        }
        const data = await Readfile()
        post.id = data[data.length - 1].id + 1
        post.createdIn = Time()
        post.amountOfLikes = 0
        post.imgSrc = `http://localhost:3000/${post.imgSrc}`
        data.push(post)
        const newData = JSON.stringify(data)
        await WritePosts(newData)
    }catch(err){
        console.log(err)
    }
}


