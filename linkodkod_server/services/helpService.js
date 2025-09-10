import {readdir} from "fs/promises"

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth();
const day = currentTime.getDate();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

//מחזירה את התאריך הנוכחי
export function Time(){
    return(`${year}/${month}/${day}/${hours}:${minutes}:${seconds}`)
}

//public בודקת ששם הקובץ שהוכנס נמצא בתיקיית הקבצים 
export async function checkIfFFileExists(fileName){
    const files = await readdir('./public')
    return files.includes(fileName)
}




