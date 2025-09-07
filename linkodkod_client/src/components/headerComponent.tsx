import "../syles/headerStyle.css"
export default function Header(props:{imgLogo:string,slogan:string}){
    return(
        <header>
            <h1>{props.slogan}</h1>
            <img src={props.imgLogo} alt="" />
        </header>
    )
}