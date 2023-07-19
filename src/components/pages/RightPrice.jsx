import React, {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";

export default function RightPrice(){
    const[myPrice,setMyPrice]=useState("");
    const [randomPrice, setRandomPrice]=useState("");

    // const priceRandom = Math.round(Math.random() * (10,200));

    const priceRandom=()=>{
        const _priceRandom=Math.round(Math.random()*(10,200));
        setRandomPrice(_priceRandom)
    }



    useEffect(()=>{
        if(randomPrice != 0) priceRandom()
    }, [randomPrice])

    const handleClick =()=>{

    }

    return(
        <div>
            <h1>Le Juste Prix coming soon</h1>
            <TextField id="outlined-basic"
                       label="Prix ?"
                       variant="outlined"
                       defaultValue={"Quel est votre prix ?"}
                       onChange={event=>setMyPrice(event.target.value)}
            />
            <br/>
            <Button>Vérifier</Button>
            {myPrice === priceRandom.toString() ? (
                <p>Juste prix trouvé !</p>
            ) : (
                <p>Prix incorrect</p>
            )}
        </div>
    )
}