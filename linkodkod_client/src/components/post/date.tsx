import "../../syles/postStyle/dateStyle.css"
const currentTime: Date = new Date();
const hours: number = currentTime.getHours();
const minutes: number = currentTime.getMinutes();
const seconds: number = currentTime.getSeconds();

export default function Time(){
    return(
        <>
        <p className="date">{`Created in: ${hours}:${minutes}:${seconds}`}</p>
        </>
    )
}