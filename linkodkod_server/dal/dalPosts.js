import fs from "fs/promises"

export async function Readfile(){
    return JSON.parse(await fs.readFile("./posts.json", "utf8"))
}

export async function WritePosts(data){
    await fs.writeFile("./posts.json", data, 'utf-8',null,2)
}