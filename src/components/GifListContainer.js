import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [gifs, setGifs] = useState([]);

    function handleSubmit(searchText) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=1Lw5M1wXJ21yw6D906f3YCmM9cUDtbsX&rating=g`)
        .then(r => r.json())
        .then(gifs => setGifs(gifs.data.slice(0, 3)))
    }

    return (
        <div>
            <GifSearch handleSubmit={handleSubmit} />
            <GifList gifs={gifs} />
        </div>
    );
}

export default GifListContainer;