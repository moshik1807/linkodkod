import Post from "../components/post/postComponent"
// import postJson from "../posts.json"
import "../syles/homeStyle.css"
import Layout from "../components/application-layout/layout"
import { useState,useEffect } from "react"

export default function Home(){
        type Post = {
        imgSrc: string;
        description: string;
        authorName:string;
        amountOfLikes:number
    };

    const[posts,setPosts]=useState<Post[]>([]);
    const[err,seterr]=useState("")
    
    useEffect(() => {
        fetch("http://localhost:3000/getAll")
            .then((res)=> res.json())
            .then((data)=> setPosts(JSON.parse(data)))
            .catch((err)=> seterr((err)))
    }, []);
    console.log(posts)
    console.log(Object.keys(err))

    if(err){
        return(
            <>
            <Layout>
            <main>
                {/* לטפל בהודעת שגיאה מדוייקת */}
                <p>{err.name}</p>
            </main>
            </Layout>
            </>
        )
    }

    return(
        <>
        <Layout>
        <main>
            {posts.length?posts.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            )):<h1 className="">The page is loading....</h1>}
        </main>
        </Layout>
        </>
    )
}