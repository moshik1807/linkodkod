import Post from "../components/post/postComponent"
import "../syles/pagesStyle/homeStyle.css"
import { useState,useEffect } from "react"
import { loadToken } from "../util/localstorege";

export default function Home(){

        const stored = loadToken("authToken"); 


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
        fetch("http://localhost:3000/posts/getAll",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + stored
                }
            })
            .then((res)=> res.json())
            .then((data)=> setPosts(data))
            .catch((err)=> seterr((err)))
    }, []);
    console.log(posts)
    console.log(err)
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