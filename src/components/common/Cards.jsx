import React, {useState} from "react";
import CardFlip from "react-card-flip";


export default function Cards({id, url, pos, rota}) {
    const [opacity, setOpacity] = useState(1);

    const cardStyle = {
        transform: "rotateY(" + rota + "deg)",
        backgroundColor: "black",
        width: "15vw",
        height: "35vh",
        borderRadius: "2vw",
        gridColumn: pos[1],
        gridRow: pos[3],
        transition: "transform 0.8s",
        backfaceVisibility: "hidden",
    }

    const imageStyle = {
        width: "10vw",
        marginTop: "calc(35vh / 2 - (10vw / 2))",
        marginLeft: "calc(15vw / 2 - (10vw / 2))",
    }

    const backFace = {
        marginTop: "calc((35vh - (10vw) + 2.5vw) * -1)",
        backgroundColor: "black",
        width: "15vw",
        height: "35vh",
        borderRadius: "2vw",
        transition: "0.8s",
        backfaceVisibility: "hidden",
        opacity: opacity,
    }

    const flipCard = {}

    return (
        <div style={cardStyle} onClick={
            function (e) {
                setOpacity(0);
            }
        }>
            <img src={url} style={imageStyle}></img>
            <div style={backFace}></div>
        </div>
    )
}