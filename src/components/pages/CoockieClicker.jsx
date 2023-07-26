import React, {useState, useEffect} from "react";
import Cookie from "../common/cookieClicker/Cookie"
import Score from "../common/cookieClicker/Score"
import Column from "../common/Column"
import UpgradeButton from "../common/cookieClicker/UpgradeButton"
import {Button} from "@mui/material";

export default function CoockieClicker() {

    // On définit les variables du score
    const [score, setScore] = useState(0);

    // On définit les variables de l'augmentation du score a chaques amélioration
    const [clickPower, setClickPower] = useState(1);



    return (
        // Componnent qui prends en parametres plusieurs componnents pour les
        // rangé en colonne
        <Column components={
            [
                <Score score={score} colNumber={0}/>,
                <Cookie setScore={setScore} score={score} clickPower={clickPower} colNumber={0}/>,
                <UpgradeButton score={score} setScore={setScore} clickPower={clickPower} setClickPower={setClickPower}/>
            ]
        }/>
    )
}