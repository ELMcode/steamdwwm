import {useState} from "react";

export default function Gif(){

    const [data,setData]=useState([]);
    const [started,setStarted]=useState(false)

    const getGif = async()=>{
        if (!started){
            setStarted(true);
        var response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lV037QsCl68DVDWbpwWfkvQYN8GASzjG&q=coucou&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
        var json = await response.json();
       const gifUrl=json.data.map((gif)=> gif.images.original.url);
       setData(gifUrl)
        }
    }

    getGif();

    return (
        <div>
            {data.map((gifUrl) => (
            <img key={gifUrl} src={gifUrl} alt="GIF" />
            ))}
        </div>
    );
}