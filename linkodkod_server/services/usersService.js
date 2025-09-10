import bcrypt from 'bcrypt'
import { ReadUsers,WriteUsers } from '../dal/dalUsers.js'
import * as fs from "fs/promises"


//בדיקה ששם משתמש זה לא קיים ,הצפנת הסיסמא והכנסה לקובץ משתמשים
export async function newUser(newuser) {
    try{
        const data = await ReadUsers()
        const existingUser = data.find(user=>user.name === newuser.name)
        if(existingUser){
            return "existing user"
        }
        newuser.password = await bcrypt.hash(newuser.password, 10)
        data.push(newuser)
        const newData = JSON.stringify(data)
        await WriteUsers(newData)
    }catch(err){
        console.log(err)
    }
}


//אימות שם משתמש וסיסמא
export async function UserVerificationInList(usertocheck) {
    const data = await ReadUsers()
    const isPasswordValid = await bcrypt.compare(password, check.player.password)
    const existingUser = data.find(user=>user.name === usertocheck.name && user.password === hashedPassword)
    return existingUser
}
