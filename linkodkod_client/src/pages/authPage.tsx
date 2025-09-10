import { useNavigate } from "react-router";
import { loadToken } from "../util/localstorege";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "../syles/pagesStyle/authPageStyle.css"


export default function AuthPage(){
    const navigate = useNavigate();


    type DecodedToken = {
        role: string;
    };

    const stored = loadToken("authToken"); 
    useEffect(() => {
        if (stored) {
            try {
                const decoded: DecodedToken = jwtDecode(stored);
                if (decoded.role === "user") {
                    navigate("/home");
                }
                } catch (err) {
                    console.error("Invalid token", err);
                }
            }
        }, [stored, navigate]);

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