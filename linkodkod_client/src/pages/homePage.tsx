import Post from "../components/post/postComponent"
import postJson from "../posts.json"
import "../syles/homeStyle.css"
import Layout from "../components/application-layout/layout"
export default function Home(){
    return(
        <>
        <Layout>
        <main>
            {postJson.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            ))}
        </main>
        </Layout>
        </>
    )
}