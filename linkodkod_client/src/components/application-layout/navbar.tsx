import "../../syles/application-layoutStyle/navbarStyle.css"
import { useNavigate } from "react-router";

export default function Navbar(){
    const navigate = useNavigate();

    return(
        <div className="navbar">
        <button onClick={()=>{
            navigate("/home")
        }}>Home</button>

        <button onClick={()=>{
            navigate("/create")
        }}>➕</button>
        </div>
    )
}