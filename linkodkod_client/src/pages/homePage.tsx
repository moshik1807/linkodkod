import Post from "../components/postComponent"
import postJson from "../posts.json"
import "../syles/homeStyle.css"
export default function Home(){
    return(
        <>
        <main>
            {postJson.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            ))}
        </main>
        </>
    )
}