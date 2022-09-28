import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams(); 

    return (
        <input
            type="text"
            style={{ padding: "0.3rem" }}
            value={searchParams.get("filter") || ""}
            onChange={event => {
                let filter = event.target.value;
                if (filter) {
                    setSearchParams({ filter })
                } else {
                    setSearchParams({})
                }
            }}
            placeholder="book search"
        />
    )
}

export default Search;