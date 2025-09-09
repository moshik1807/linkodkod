import { useLocation } from "react-router"
import { useEffect,useState } from "react"
import Layout from "../components/application-layout/layout";
export default function PostPage(){

    const location = useLocation()
    const id = location.state?.id

    const[post,setPost]=useState(Object);
    const[err,seterr]=useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/getById/${id}`)
            .then((res)=> res.json())
            .then((data)=> setPost(data))
            .catch((err)=> seterr((err)))
    }, []);

    if(err){
        return(
            <>
            <Layout>
            <h1>{err.name}</h1>
            </Layout>
            </>
        )
    }
    return(
        <>
        <Layout>
            <img src={post.imgSrc} alt="" />
            <p>{post.description}</p>
            <p>{post.authorName}</p>
        </Layout>
        </>
    )
}