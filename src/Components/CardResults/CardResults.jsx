import React from "react";
import './styles.css';

export const CardResults = ({ image, title, url }) => {
    return (
        <div className="contenido__imagen">
            <a href={url} target="_blank">
                <img src={image} alt={title} />
            </a>
        </div>
    )
}