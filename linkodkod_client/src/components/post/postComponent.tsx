import Time from "./date"
import "../../syles/postStyle/PostStyle.css"
import Like from "./likeComponents"
import { useNavigate } from "react-router";

export default function Post(props:{imgSrc:string,description:string,authorName:string,amountOfLikes:number,id:number}){
    const navigate = useNavigate();
    return(
        <button id={props.id.toString()} onClick={()=>{navigate('postPage')}}>
            <div className="post">
            <img src={props.imgSrc} alt="" />
            <p>{props.description}</p>
            <p>{props.authorName}</p>
            <Time/>
            <Like AmountOfLikes={props.amountOfLikes}/>
        </div></button>
    )
}