import React from 'react';
import Gifo from '../../icons/logo-desktop.svg';
import GifoDark from '../../icons/logo-mobile-modo-noct.svg';
import '../Header/styles.css';

export const Header = ({ cambiarEstado, modeDark }) => {
    return (
        <div className="container__header">
            <div className="contenido__header">
                <div className="icon__header">
                    <img src={`${!modeDark ? Gifo : GifoDark}`} alt="" />
                </div>
                <div className={`button__header ${!modeDark ? "light" : "dark"}`} onClick={cambiarEstado}>
                    <button>{`${!modeDark ? "MODO DARK" : "MODO LIGHT"}`}</button>
                </div>
            </div>
        </div>
    )
}