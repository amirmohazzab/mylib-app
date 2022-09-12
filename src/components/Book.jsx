import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId))
    const navigate = useNavigate();
    const location = useLocation();

    if (book) {
        return (
            <main style={{padding: "1rem"}}>
                <h2> price: {`${book.amount} euro`}</h2>
                <p>{book.name}</p>
                <p>Author: {book.Author}</p>
                <p>
                    <button onClick={() => {
                        deleteBook(book.number);
                        navigate("/books"+location.search);

                    }}>
                    delete book
                    </button>
                </p>
    
            </main>
        )
    } else {
        return (
            <main style={{padding: "1rem"}}>
            not found such book
        </main>
        )
    }
}

export default Book;