import React, {useContext} from "react";
import { useSearchParams } from "react-router-dom";
import { Bookcontext } from './../context/bookContext';

const Search = ({ filteredBooks }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {books} = useContext(Bookcontext);


  return (
    <div style={{ display: "flex", justifyContent:"space-between", marginBottom: "0.5rem"}}>
      <input
        type="text"
        style={{ padding: "0.3rem" }}
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
        placeholder="book search"
      />
      <span
        style={{
          marginLeft: "1rem",
          marginTop: "0.25rem",
          background: "pink",
          padding: "0.4rem",
          height: "1rem",
          width: "3rem",
        }}
      >
        No: {searchParams ? filteredBooks.length : books.length}
      </span>
    </div>
  );
};

export default Search;
