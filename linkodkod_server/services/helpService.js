import {readdir} from "fs/promises"

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth();
const day = currentTime.getDate();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

//Returns the current date
export function Time(){
    return(`${year}/${month}/${day}/${hours}:${minutes}:${seconds}`)
}

//public checks that the inserted file name is in the files folder
export async function checkIfFFileExists(fileName){
    const files = await readdir('./public')
    return files.includes(fileName)
}




