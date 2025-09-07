import Post from "./postComponent"
import postsList from "../jsonPosts"
export default function Home(){
    return(
        <>
        <main>
            {postsList.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            ))}
        </main>
        </>
    )
}