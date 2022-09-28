import React, { useState, useContext} from 'react';
import { Bookcontext } from './../context/bookContext';

const BookForm = () => {
    const {dispatch} = useContext(Bookcontext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       // addBook(title, author);
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setAuthor('');
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} style={{width: "auto", 
            padding: "5px"}} required onChange={(e) => setTitle(e.target.value)} />

            <input type="text" placeholder= "author" value={author} style={{width: "auto",
            padding: "5px", marginTop: "5px"}} required onChange={(e) => setAuthor(e.target.value)} />

            <input type="submit" value="register" style={{display: "block", margin: "0.3rem auto"}} />
        </form>
    );
}

export default BookForm;