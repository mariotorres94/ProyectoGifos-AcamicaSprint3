import React from "react";
import './styles.css';
import Error from '../../icons/icons8-error-64.png'

export const Mensaje = ({ modeDark }) => {
    return (
        <div className={`container__mensaje ${!modeDark ? "light" : "dark"}`}>
            <h1>Lo sentimos no encontramos su busqueda</h1>
            <p>¡Inténtalo de nuevo!</p>
            <img src={Error} alt="" />
        </div>
    )
}
