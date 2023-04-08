import {Outlet} from 'react-router-dom'
import NavBar from "../components/NavBar/NavBar";
import React from "react";

const MainLayout = () => {

    return (
        <>

            <Outlet />
        </>
    )
};

export default MainLayout;