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


    useEffect(() => {
        fetch("http://localhost:3000/getAll")
            .then((res)=> res.json())
            .then((data)=> setPosts(JSON.parse(data)))
            .catch((err)=> console.log("Error fetching riddles:", err))
    }, []);
    console.log(posts)


    return(
        <>
        <Layout>
        <main>
            {posts.map(p=>(
                <Post imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes}/>
            ))}
        </main>
        </Layout>
        </>
    )
}