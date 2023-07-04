import React, { useState } from "react";

function GifSearch({ handleSubmit }) {

    const [searchText, setSearchText] = useState("");

    function onGifSubmit(e) {
        e.preventDefault()
        handleSubmit(searchText)
        setSearchText("");
    }

    return (
        <div className="search-form">
            <form style={{marginLeft: "15px"}} onSubmit={onGifSubmit}>
                <label>Enter a Search Term:</label><br />
                <input 
                    type="text" 
                    name="search-text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                /><br />
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    );
}

export default GifSearch;