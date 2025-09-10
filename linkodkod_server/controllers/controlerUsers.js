import { newUser,UserVerificationInList } from "../services/usersService.js"

//פונקציית הרשמה שמכניסה פרטים לקובץ ומחזירה לשרת טוקן
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

//פונקציית התחברות למשתמש קיים שמאמתת נתונים ומחזירה טוקן
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
