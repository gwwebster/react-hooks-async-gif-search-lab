import React from "react";

function GifList({ gifs }) {

    return (
        <ul>
            {gifs.map((gif, index) => (
                <div key={gif.id}>
                    <li style={{listStyle: "none", textAlign: "center"}}>
                        <img src={gif.images.original.url} alt={"Search Result #" + (index + 1)}/>
                    </li><br />
                </div>
               
            ))}
        </ul>
    );
}

export default GifList;