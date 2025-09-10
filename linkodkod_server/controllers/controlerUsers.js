import { newUser,UserVerificationInList } from "../services/usersService.js"

//A registration function that inserts details into a file and returns a token to the server.
export async function signup(req,res){
    if(req.body.name && req.body.password){
    try{
        const resulte = await newUser(req.body)
        res.send(resulte)
    }
    catch(err){
        res.end(result)
    }}else{
        res.end("No suitable parameters were entered.")
    }
}

//A login function for an existing user that validates data and returns a token
export async function login(req,res){
    if(req.body.name && req.body.password){
    try{
        const result = await UserVerificationInList(req.body)
        console.log(result)
        res.send(result)
    }
    catch(err){
        res.send(err)
    }}else{
        res.end("No suitable parameters were entered.")
    }
}
