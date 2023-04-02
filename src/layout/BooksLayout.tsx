import {Link, NavLink, Outlet} from "react-router-dom";
import React from "react";

const BooksLayout = () => {

    return (
        <>
            <ul>
                <li><NavLink to="/books/1">Harry Potter 1</NavLink></li>
                <li><NavLink to="/books/2">Harry Potter 2</NavLink></li>
                <li><NavLink to="/books/3">Harry Potter 3</NavLink></li>
                <li><NavLink to="/books/new">New Book</NavLink></li>
            </ul>

            <Outlet context={{name: 'Test'}}/>
        </>

    );
};

export default BooksLayout;