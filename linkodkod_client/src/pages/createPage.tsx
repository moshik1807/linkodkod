import {useRef} from "react"
import "../syles/pagesStyle/createPageStyle.css"

export default function Create(){
    const form = useRef<HTMLFormElement>(null)
    const imgSrc=useRef<HTMLInputElement>(null)
    const description=useRef<HTMLInputElement>(null)
    const authorName=useRef<HTMLInputElement>(null)

    return(
        <>
            <form className="createForm" ref={form} action="">
            <input className="input" type="text" name="imgSrc" placeholder="enter imgSrc" ref={imgSrc}/>
            <input className="input" type="text" name="description" placeholder="enter description" ref={description}/>
            <input className="input" type="text" name="authorName" placeholder="enter authorName" ref={authorName}/>
            <button className="input submit" type="submit" onClick={(e)=>{
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
        </>
    )
}