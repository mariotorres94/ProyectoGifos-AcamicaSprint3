import React from "react";
import Lupa from '../../icons/icon-search-mod-noc.svg';
import './styles.css';

export const ListaAutocomplete = ({ autocomplete, clickAutocomplete }) => {
    return (
        <div className="contenedor__autocomplete">
            {
                autocomplete.map((data) => {
                    return (
                        <div key={data.analytics_response_payload} className="contenido__autocomplete">
                            <div className="imagen__lupa">
                                <img src={Lupa} alt="Search" />
                            </div>
                            <ul>
                                <li onClick={clickAutocomplete}>
                                    {data.name}
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
