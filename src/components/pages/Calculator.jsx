import React, {useState} from "react";

import AdditionLevel, {DataProcess} from "../services/AdditionLevel";
import {Button, TextField} from "@mui/material";
import "../../style/calculator.css"

export default function Calculator() {

    const [inputKeyboard, setInputKeybord] = useState(0);
    const [modeSend, setModeSend] = useState(false);
    const [resultAdd, setResultAdd] = useState(0);
    const changeResult = (newResult) => {
        setResultAdd(newResult)
    }

    return (
        <div>
            <h1>Calculator coming soon</h1>
            <AdditionLevel changeResult={changeResult}/><br/>
            <TextField
                variant={"outlined"}
                //defaultValue={"Alors ??? "}
                placeholder="Alors ???"
                onChange={event => setInputKeybord(event.target.value)}
            /><br/>
            <Button onClick={() => {setModeSend(true)}}>Envoyer</Button>
            {modeSend && <DataProcess inputKeyword={inputKeyboard} resultAdd={resultAdd} />}

        </div>
    )
}