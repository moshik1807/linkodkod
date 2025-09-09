import Layout from "../components/application-layout/layout"
import {useRef} from "react"

export default function Create(){
    const form = useRef<HTMLFormElement>(null)
    const imgSrc=useRef<HTMLInputElement>(null)
    const description=useRef<HTMLInputElement>(null)
    const authorName=useRef<HTMLInputElement>(null)
    const amountOfLikes=useRef<HTMLInputElement>(null)

    return(
        <>
        <Layout>
            <form className="createForm" ref={form} action="">
            <input type="text" name="imgSrc" placeholder="enter imgSrc" ref={imgSrc}/>
            <input type="text" name="description" placeholder="enter description" ref={description}/>
            <input type="text" name="authorName" placeholder="enter authorName" ref={authorName}/>
            <input type="number" name="amountOfLikes" placeholder="enter amountOfLikes" ref={amountOfLikes}/>
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                const formData = new FormData(form.current as HTMLFormElement);
                const post: Record<string,any> = {};

                formData.forEach((value, key) => {
                    post[key] = value;  
                });

            fetch('http://localhost:3000/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(post)
            })
            }}>submit</button>
        </form>
        </Layout>
        </>
    )
}