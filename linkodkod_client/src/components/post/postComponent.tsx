import "../../syles/postStyle/PostStyle.css"
import Like from "./likeComponents"
import { useNavigate } from "react-router";

export default function Post(props:{imgSrc:string,description:string,authorName:string,amountOfLikes:number,id:number,createdIn:string}){
    const navigate = useNavigate();
    const id = props.id.toString()
    return(
        <button id={props.id.toString()} onClick={()=>{navigate('postPage', { state: { id }})}}>
            <div className="post">
            <img src={props.imgSrc} alt="" />
            <p>{props.description}</p>
            <p>Author-- {props.authorName}</p>
            <p>created on : {props.createdIn}</p>
            <Like AmountOfLikes={props.amountOfLikes}/>
        </div></button>
    )
}