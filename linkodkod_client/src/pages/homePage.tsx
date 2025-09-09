import Post from "../components/post/postComponent"
import "../syles/pagesStyle/homeStyle.css"
import { useState,useEffect } from "react"

export default function Home(){
    console.log(111)
        type Post = {
        imgSrc: string;
        description: string;
        authorName:string;
        amountOfLikes:number;
        id:number;
        createdIn:string;
    };

    const[posts,setPosts]=useState<Post[]>([]);
    const[err,seterr]=useState("")
    
    useEffect(() => {
        fetch("http://localhost:3000/posts/getAll")
            .then((res)=> res.json())
            .then((data)=> setPosts(JSON.parse(data)))
            .catch((err)=> seterr((err)))
    }, []);
    console.log(posts)
    console.log(Object.keys(err))

    if(err){
        return(
            <>
            <main>
                {/* לטפל בהודעת שגיאה מדוייקת */}
                <p>{err.name}</p>
            </main>
            </>
        )
    }

    return(
        <>
        <main>
            {posts.length?posts.map(p=>(
                <Post id={p.id} imgSrc={p.imgSrc} description={p.description} authorName={p.authorName} amountOfLikes={p.amountOfLikes} createdIn={p.createdIn}/>
            )):<h1 className="">The page is loading....</h1>}
        </main>
        </>
    )
}