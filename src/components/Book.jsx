import React, {useContext} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Bookcontext } from './../context/bookContext';

const Book = () => {

    const {books, dispatch} = useContext(Bookcontext);
    const {number} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const getBook = (number) => {
        return books.find((book) => book.number===number);
    };

    let book = getBook(parseInt(number));
    

    if (book) {
        return (
            <main style={{padding: "3rem", width: "35rem"}}>
                <p>title: {book.title}</p>
                <p>author: {book.author}</p>
                <p>
                    <button onClick={() => {
                        dispatch({type: 'DELETE_BOOK', number:parseInt(number)})
                        navigate("/books"+location.search);
                    }}>
                    delete book
                    </button>
                </p>
            </main>
        );
    } else {
        return (
            <main style={{padding: "1rem"}}>
            <h2> not found such book </h2>
        </main>
        );
    }
};

export default Book;