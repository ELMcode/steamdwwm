import React, {useState} from "react";
import {Button, createTheme, CssBaseline, FormControlLabel, Switch, ThemeProvider} from "@material-ui/core";


export default function Layout(){
    const [state, setState]= useState({
            checkedA: true,
            checkedB: true,
        }
    )
    const handleChange= (event) =>{
        setState({...state,[event.target.name]:event.target.checked})
    }

    const switchText = state.checkedA ? "Dark mode ON" : "Dark mode OFF"

    // switch onChange // changer le nom du bouton si on ou off
    return <ThemeProvider theme={themeLight}>
        <CssBaseline/>
        <Button color="primary" variant="contained">Mon super bouton</Button>

            <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label={switchText}
            />
        </ThemeProvider>
}

const themeDark = createTheme({
    palette:{
        background:{
            paper: '#007be0',
            default:'#001e3c'
        }
    }
})

const themeLight = createTheme({
    palette:{
        background:{
            paper: '#84848c',
            default:'#c8def5'
        }
    }
})