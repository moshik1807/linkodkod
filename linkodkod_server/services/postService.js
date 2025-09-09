import * as fs from "fs/promises"
import { checkIfFFileExists ,Time} from "./helpService.js";
export async function readPosts(){
    try {
        const data = await fs.readFile("./posts.json", "utf8");
        console.log("File content:", data);
        return data
    } catch (error) {
        console.error("Error reading file:", error);
    }
}


export async function getPostByID(id){
    const data = await fs.readFile("./posts.json", "utf8")    
    const post = JSON.parse(data).filter((e) => e.id == id)
    if(post.length){
        return post[0]
    }else{
        return "This post does not exist."
    }
}

export async function newPost(post) {
    try{
        const x = await checkIfFFileExists(post.imgSrc)
        if(!x){
            console.log("123456")
            return "No such image exists."
        }
        const data = JSON.parse(await fs.readFile("./posts.json", "utf8"))
        post.id = data[data.length - 1].id + 1
        post.createdIn = Time()
        post.amountOfLikes = 0
        post.imgSrc = `http://localhost:3000/${post.imgSrc}`
        data.push(post)
        const newData = JSON.stringify(data)
        await fs.writeFile("./posts.json", newData, 'utf-8',null,2)
    }catch(err){
        console.log(err)
    }
}


