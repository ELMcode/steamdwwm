import React from "react";
import {Adb} from "@material-ui/icons";
import {Box, Typography} from "@material-ui/core";
import {Button} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Documentation from "../pages/Documentation";
import RightPrice from "../pages/RightPrice";
import Calculator from "../pages/Calculator";
import Crabs from "../pages/Crabs";
import SuperGame from "../pages/SuperGame";

const itemMenus=[
    {key:"1",path:"/",label:"Accueil"},
    {key:"2",path:"/rightprice",label:"Le juste prix"},
    {key:"3",path:"/calculator",label:"Calculator"},
    {key:"4",path:"/crabs",label:"Morpion"},
    {key:"5",path:"/supergame",label:"Mon super jeu"},
    {key:"6",path:"/documentation", label:"Documents"}
];

export default function MenuTop() {

    return (
        <>
            <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Stream by Dwwm
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {itemMenus
                    .map((itemMenu)=>(
                        <Button key={itemMenu.key} component={Link} to={itemMenu.path} color={"primary"}>
                            {itemMenu.label}
                        </Button>
                    ))
                }
            </Box>
        </>
    )
}
export function LayoutMain() {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/rightprice"} element={<RightPrice/>}/>
                <Route path={"/calculator"} element={<Calculator/>}/>
                <Route path={"/crabs"} element={<Crabs/>}/>
                <Route path={"/supergame"} element={<SuperGame/>}/>
                <Route path={"/documentation"} element={<Documentation/>}/>
            </Routes>
        </>
    )

}