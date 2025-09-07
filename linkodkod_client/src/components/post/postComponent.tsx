import Time from "./date"
import "../../syles/postStyle.css"
import Like from "./likeComponents"
export default function Post(props:{imgSrc:string,description:string,authorName:string,amountOfLikes:number}){
    return(
        <div>
            <img src={props.imgSrc} alt="" />
            <p>{props.description}</p>
            <p>{props.authorName}</p>
            <Time/>
            <Like AmountOfLikes={props.amountOfLikes}/>
        </div>
    )
}