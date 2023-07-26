import {useState} from "react";
import CarScore from "../common/CarScore";
import {Button} from "@mui/material";

export default function CarClicker() {

    // On déclare la variable score
    // On déclare la fonction setScore qui permet d'assigner une valeur
    // à score
    const [score, setScore] = useState(0);

    const [cost, setCost] = useState(5);

    const [power, setPower] = useState(1);

    // On déclare l'url de l'image
    const url = "https://opengameart.org/sites/default/files/spr_sportscar_0.png";

    // On déclare une variable pour définir le style de
    // notre div
    const divStyle = {
        backgroundColor: "green",
        width: "50vw"
    }

    const handleClick = async () => {
        if (score >= cost) {
            setPower(power * 2);
            setScore(score - cost);
            setCost(cost * 3);
        }
    }

    // On retourne l'affichage de la page
    return (
        <div style={divStyle}>
            <CarScore message="Score : " carScore={score}></CarScore>
            <img src={url} alt="car" onClick={
                () => setScore(score + power)
            }/>

            <Button
                color={(score >= cost) ? "success" : "error"}
                variant="contained"
                onClick={handleClick}
            >
                Amélioration
            </Button>
        </div>
    )
}