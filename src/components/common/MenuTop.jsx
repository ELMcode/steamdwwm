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
import Memory from "../pages/Memory";
import CoockieClicker from "../pages/CoockieClicker";
import Gif from "../pages/Gif";
import ReduxPages from "../reducer/ReduxPages";
import CarClicker from "../pages/CarClicker";

const itemMenus=[
    {key:"1", path:"/", label:"Accueil"},
    //{key:"2", path:"/rightPrice", label:"Le juste prix"},
    {key:"2", path:"/calculator", label:"Calculator"},
    //{key:"4", path:"/crabs", label:"Morpion"},
    //{key:"5", path: "/documentation", label:"Documents"},
    {key:"3", path: "/memory", label:"Memory"},
    {key:"4", path: "/cookieClicker", label:"CookieClicker"},
    {key:"5", path: "/gif", label:"Gif"},
    {key:"6", path: "/redux", label:"Redux"},
    {key:"7", path: "/carClicker", label:"CarClicker"}
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
                        <Button key={itemMenu.key} component={Link} to={itemMenu.path} >
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
                <Route path={"/rightPrice"} element={<RightPrice/>}/>
                <Route path={"/calculator"} element={<Calculator/>}/>
                <Route path={"/crabs"} element={<Crabs/>}/>
                <Route path={"/documentation"} element={<Documentation/>}/>
                <Route path={"/memory"} element={<Memory/>}/>
                <Route path={"/cookieClicker"} element={<CoockieClicker/>}/>
                <Route path={"/gif"} element={<Gif/>}/>
                <Route path={"/redux"} element={<ReduxPages/>}/>
                <Route path={"/carClicker"} element={<CarClicker/>}></Route>
            </Routes>
        </>
    )

}