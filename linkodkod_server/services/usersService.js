import bcrypt from 'bcrypt'

import * as fs from "fs/promises"

export async function newUser(user) {
    try{
        const data = JSON.parse(await fs.readFile("./users.json", "utf8"))
        user.password = await bcrypt.hash(user.password, 10)
        data.push(user)
        const newData = JSON.stringify(data)
        await fs.writeFile("./posts.json", newData, 'utf-8',null,2)
    }catch(err){
        console.log(err)
    }
}