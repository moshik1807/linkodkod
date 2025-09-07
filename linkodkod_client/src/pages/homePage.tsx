import Post from "../components/postComponent"
import postJson from "../posts.json"
import Header from "../components/headerComponent"
import "../syles/homeStyle.css"
export default function Home(){
    return(
        <>
        <Header imgLogo="../../public/image.png" slogan="Linkodkod"/>
        <main>
            {postJson.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            ))}
        </main>
        </>
    )
}