import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {BookList} from "./pages/BookList";
import {Book} from "./pages/Book";

function App() {

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/books">BookList</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/books/:id/:img?" element={<Book />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
