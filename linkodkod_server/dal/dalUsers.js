import * as fs from "fs/promises"

export async function Read(){
    return JSON.parse(await fs.readFile("./users.json", "utf8"))
}

export async function Write(data){
    await fs.writeFile("./users.json", data, 'utf-8',null,2)
}