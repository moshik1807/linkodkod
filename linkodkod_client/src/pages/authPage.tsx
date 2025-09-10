import { useNavigate } from "react-router";
import "../syles/pagesStyle/authPageStyle.css"
export default function AuthPage(){
    const navigate = useNavigate();
    return(
        <>
        <main id="auth">
        <button onClick={()=>{
            navigate('signup')
        }}>Signup</button>

        <button onClick={()=>{
            navigate('login')
        }}>login</button>
        </main>
        </>
    )
}