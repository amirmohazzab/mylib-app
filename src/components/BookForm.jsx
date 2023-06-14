import React, { useState, useContext, useRef } from 'react';
import { Bookcontext } from './../context/bookContext';

const BookForm = () => {
    const {dispatch} = useContext(Bookcontext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const titleRef = useRef();

    
    const handleSubmit = (e) => {   
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} style={{width: "auto", 
            padding: "5px"}} required ref= {titleRef} onChange={(e) => setTitle(e.target.value)} />

            <input type="text" placeholder= "author" value={author} style={{width: "auto",
            padding: "5px", marginTop: "5px"}} required onChange={(e) => setAuthor(e.target.value)} />

            <button  style={{display: "block", margin: "0.3rem auto"}} onClick={()=> titleRef.current.focus()}>
                register
            </button>
        </form>
    );
}

export default BookForm;