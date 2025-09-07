import {useState } from "react"

export default function Like(props:{AmountOfLikes:number}){
    const[addLike,setAddLike] =  useState(true)
    const[amountOfLikes,setAmountOfLikes] = useState(props.AmountOfLikes)

    
    return(
        <>
        <button onClick={()=>{
            if(!addLike && amountOfLikes!== props.AmountOfLikes){
                setAddLike(!addLike)
                setAmountOfLikes(amountOfLikes - 1)
                }
            else if(addLike){
                setAddLike(!addLike)
                setAmountOfLikes(amountOfLikes + 1)}
            }}>♥️{amountOfLikes}</button>
        </>
    )
}