import * as fs from "fs/promises"

export async function ReadUsers(){
    return JSON.parse(await fs.readFile("./users.json", "utf8"))
}

export async function WriteUsers(data){
    await fs.writeFile("./users.json", data, 'utf-8',null,2)
}