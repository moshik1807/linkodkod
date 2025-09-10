import bcrypt from 'bcrypt'
import { ReadUsers,WriteUsers } from '../dal/dalUsers.js'
import { CreatToken } from './authService.js'

//Checking that this username does not exist, encrypting the password and inserting it into the users file
export async function newUser(newuser) {
    try{
        const data = await ReadUsers()
        const existingUser = data.find(user=>user.name === newuser.name)
        if(existingUser){
            throw Error ("enter other name")
        }
        newuser.password = await bcrypt.hash(newuser.password, 10)
        data.push(newuser)
        const newData = JSON.stringify(data)
        await WriteUsers(newData)
        const user = data.filter((e) => e.name == newuser.name)
        const token = CreatToken(user[0])
        console.log(token)
        return token
    }catch(err){
        console.log(err)
    }
}


// Username and password verification at login
export async function UserVerificationInList(usertocheck) {
    const data = await ReadUsers()
    const user = data.filter((e) => e.name == usertocheck.name)
    if(user.length){
        const isPasswordValid = await bcrypt.compare(  usertocheck.password,user[0].password)
        if(isPasswordValid){
            const token = CreatToken(user[0])
            return token
        }
    }
    else{throw Error ("User does not exist.")}
}

