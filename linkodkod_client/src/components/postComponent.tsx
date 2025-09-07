import Img from "./imgComponent"
import Text from "./textComponent"
import Time from "./date"
import "../syles/postStyle.css"
export default function Post(props:{imgSrc:string,description:string,authorName:string}){
    return(
        <div>
            <Img imgSrc={props.imgSrc}/>
            <Text text={props.description}/>
            <Text text={props.authorName}/>
            <Time/>
        </div>
    )
}