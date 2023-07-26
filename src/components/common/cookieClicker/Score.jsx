import React from "react";

export default function Score({score, colNumber}) {
    const scoreStyle = {
        gridRow: 1,
        gridColumn: colNumber,
        color: "white",
    }

    return (
        <h1 style={scoreStyle}>Score : {score}</h1>
    );
}