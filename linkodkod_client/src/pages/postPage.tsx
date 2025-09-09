import { useLocation } from "react-router"
import { useEffect,useState } from "react"
import "../syles/pagesStyle/postPageStyle.css"
export default function PostPage(){

    const location = useLocation()
    const id = location.state?.id

    const[post,setPost]=useState(Object);
    const[err,seterr]=useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/posts/getById/${id}`)
            .then((res)=> res.json())
            .then((data)=> setPost(data))
            .catch((err)=> seterr((err)))
    }, []);

    if(err){
        return(
            <>
            <h1>{err.name}</h1>
            </>
        )
    }
    return(
        <>
            <img src={post.imgSrc} alt="" />
            <p id="txt">{post.description}</p>
            <p id="author">author:  {post.authorName}</p>
            <p>created on : {post.createdIn}</p>
        </>
    )
}