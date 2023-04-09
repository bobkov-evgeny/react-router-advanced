import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import './NavBar.css';
import {useAuth} from "../../context/AuthProvider";

const NavBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth?.signOut(() => {
            navigate('/');
        });
    };

    const handleClick = () => {
        if (!auth?.user) {
            navigate('/login');
        } else {
            handleSignOut();
        }
    };

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

            <button className='auth-btn' onClick={handleClick}>
                {auth?.user ? 'Sign out' : 'Sign in'}
            </button>
        </div>
    );
};

export default NavBar;