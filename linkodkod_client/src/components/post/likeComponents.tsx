import {useState } from "react"
import "../../syles/postStyle/likeStyle.css"
export default function Like(props:{AmountOfLikes:number}){
    const[addLike,setAddLike] =  useState(true)
    const[amountOfLikes,setAmountOfLikes] = useState(props.AmountOfLikes)

    
    return(
        <>
        <button className="like" onClick={(e)=>{
            if(!addLike && amountOfLikes!== props.AmountOfLikes){
                setAddLike(!addLike)
                setAmountOfLikes(amountOfLikes - 1)
                }
            else if(addLike){
                setAddLike(!addLike)
                setAmountOfLikes(amountOfLikes + 1)}
            e.stopPropagation()
            }}>♥️{amountOfLikes}</button>
        </>
    )
}