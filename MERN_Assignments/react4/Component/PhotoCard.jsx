import React from "react";
import "../styles/PhotoCard.css"

export const PhotoCard = ({id,url}) => {
    return(
        <div id="photoCard">
            <img src={url} alt="" />
            <h1>{id}</h1>
        </div>
    )
}