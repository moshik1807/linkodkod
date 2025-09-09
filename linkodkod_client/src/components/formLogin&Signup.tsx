import { useRef } from "react"
export default function FormLoginAndSignup(props:{point:string}){
    const form = useRef<HTMLFormElement>(null)
    const name=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    return(
        <>
            <form className="createForm" ref={form} action="">
            <input className="input" type="text" name="name" placeholder="enter name" ref={name}/>
            <input className="input" type="password" name="password" placeholder="enter password" ref={password}/>
            <button className="input submit" type="submit" onClick={(e)=>{
                e.preventDefault();
                const formData = new FormData(form.current as HTMLFormElement);
                const user: Record<string,any> = {};

                formData.forEach((value, key) => {
                    user[key] = value;  
                });
            
            fetch(`http://localhost:3000/users/${props.point}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(user)
            })
            }}>submit</button>
        </form>
        </>
    )
}