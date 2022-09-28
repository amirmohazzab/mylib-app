import React, {useContext} from "react";
import {NavLink, Outlet, useLocation, useSearchParams} from "react-router-dom";
import BookForm from "./BookForm";
import Search from "./Search";
import { Bookcontext } from './../context/bookContext';


const Books = () => {
    const {books} = useContext(Bookcontext);
    const [searchParams] = useSearchParams(); 
    const location = useLocation();


    return (
         <div style={{display: "flex"}}>
            <nav style={{borderRight: "solid 1px", padding: "1rem", width: "18rem"}}>  
            <Search/>
                    {
                        books.filter((book) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            return book.title.toLowerCase().startsWith(filter.toLowerCase());
                        }).map((book) => (
                                <NavLink style={({isActive}) => {
                                    return {
                                        display: "block",
                                        margin: "0.5rem 0",
                                        color: isActive ? "red" : null,
                                        background: "#fb8500",
                                        textDecoration: "none",
                                        padding: "0.3rem"
                                    }
                                }}
                                to={`/books/${book.number}${location.search}`} 
                                key={book.number}
                                >
                                {book.title}
                                </NavLink>                         
                        ))
                    }
                    <BookForm/>
                    </nav>
          <Outlet/>
        </div> 
    )
}

export default Books;