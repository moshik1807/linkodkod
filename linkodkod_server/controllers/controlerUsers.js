import { newUser } from "../services/usersService.js"
export async function signup(req,res){
    if(req.body.name && req.body.password){
    try{
        await newUser(req.body)
        res.end("added user")
    }
    catch(err){
        res.end(result)
    }}else{
        res.end("No suitable parameters were entered.")
    }

}