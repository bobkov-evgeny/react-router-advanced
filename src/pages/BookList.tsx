import {Link} from "react-router-dom";
import React from "react";

export const BookList = () => {

    return (
        <>
            <h1>BookList</h1>

            <ul>
                <li><Link to="/books/1">Harry Potter 1</Link></li>
                <li><Link to="/books/2">Harry Potter 2</Link></li>
                <li><Link to="/books/2">Harry Potter 3</Link></li>

            </ul>
        </>
    )
}