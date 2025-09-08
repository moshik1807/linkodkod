import fs from "fs/promises"

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
    const data = await fs.readFile("./posts.json", "utf8");    
    const post = JSON.parse(data).filter((e) => e.id == id)
    console.log(data)
    console.log(post)
    if(post.length){
        return post[0]
    }else{
        return "This post does not exist."
    }
}

