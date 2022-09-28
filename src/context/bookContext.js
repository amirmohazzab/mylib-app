import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from './../reducers/bookReducer';

export const Bookcontext = createContext();

const BookContextProvider = (props) => {

    const booking = [
        {title: "Oliver Twist", number: 1, author: "Charles Dickens"},
        {title: "Animal Farm", number: 2, author: "George Orwell"},
        {title: "The Brothers Karamazov", number: 3, author: "Fyodor Dostoevsky"},
        {title: "War and Peace", number: 4, author: "Leo Tolstoy"},
        {title: "One hundred years of Solitude", number: 5, author: "Gabriel García Márquez"}
    ];

    let [books, dispatch] = useReducer(bookReducer, booking, () => {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    //const deleteBook = (number) => {
      //  setBook(books.filter(book => book.number !== number))
    //}

    //const addBook = (title, author) => {
      //  setBook([...books, { title, author, number: Math.floor(Math.random(1)*1000) }])
    //}

    return (
        <Bookcontext.Provider value={{ books, dispatch }}>
            {props.children}
        </Bookcontext.Provider>
    );  
}

export default BookContextProvider;