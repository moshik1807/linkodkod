import * as fs from "fs/promises"

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
    console.log(post)
    if(post.length){
        return post[0]
    }else{
        return "This post does not exist."
    }
}

export async function newPost(post) {
    try{
        const data = JSON.parse(await fs.readFile("./posts.json", "utf8"))
        post.id = data[data.length - 1].id + 1
        data.push(post)
        const newData = JSON.stringify(data)
        await fs.writeFile("./posts.json", newData, 'utf-8',null,2)
    }catch(err){
        console.log(err)
    }
}

// const y = {
//     "a":1,
//     "b":2
// }


// async function x(y){
//     fetch('http://localhost:3000/create', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json',},
//         body: JSON.stringify(y)
//         })
// }
// await x(y)
