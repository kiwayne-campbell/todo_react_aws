import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "./List.js";

const Search = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        let timerId = null;
        if(value) {
            timerId = setTimeout(async () => {
                const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });

                setResults(data.query.search)
            }, 1000);
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [value])

    return (
        <React.Fragment>
            <form className="ui form">
            <input type="text" 
            placeholder="Searh wikipedia..."
            value={value}
            onChange={(e) => setValue(e.target.value)}></input>
        </form>
        <List results={results} />
        </React.Fragment>
        
    );
}

export default Search;