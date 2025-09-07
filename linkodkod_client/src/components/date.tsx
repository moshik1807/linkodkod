const currentTime: Date = new Date();
const hours: number = currentTime.getHours();
const minutes: number = currentTime.getMinutes();
const seconds: number = currentTime.getSeconds();

export default function Time(){
    return(
        <>
        <p>{`Current time: ${hours}:${minutes}:${seconds}`}</p>
        </>
    )
}