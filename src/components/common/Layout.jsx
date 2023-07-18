import React from "react";
import {Button, createTheme, CssBaseline, FormControlLabel, ThemeProvider} from "@material-ui/core";


export default function Layout(){

    // switch onChange // changer le nom du bouton si on ou off
    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline/>
            <Button color="primary" variant={"contained"}>Mon super bouton</Button>
            <FormControlLabel/>
        </ThemeProvider>
    )
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