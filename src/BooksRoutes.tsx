import {Route, Routes} from "react-router-dom";
import {BookList} from "./pages/BookList";
import {Book} from "./pages/Book";
import {NewBook} from "./pages/NewBook";
import React from "react";
import BooksLayout from "./layout/BooksLayout";

const BooksRoutes = () => {

    return (
        <>
            <BooksLayout />

            <Routes>
                <Route index element={<BookList />} />
                <Route path=":id/:img?" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Routes>
        </>
    );
};

export default BooksRoutes;