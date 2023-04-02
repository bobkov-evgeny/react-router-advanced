import {NavLink} from "react-router-dom";
import React from "react";
import './NavBar.css';

const NavBar = () => {

    return (
        <div className='navbar'>
            <NavLink to="/heroes">
                Heroes
            </NavLink>

            <NavLink to="/locations">
                Locations
            </NavLink>

            <NavLink to="/episodes">
                Episodes
            </NavLink>
        </div>
    );
};

export default NavBar;