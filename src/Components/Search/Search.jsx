import React, { useEffect, useState } from "react";
import IconSearch from '../../icons/ilustra_header.svg';
import Glass from '../../icons/icon-search-mod-noc.svg';
import { CardResults } from "../CardResults/CardResults";
import { API_KEY, ENDPOINT, LIMIT, API_URL } from "../../Resources/Constants";
import { ListaAutocomplete } from "../Autocomplete/Autocomplete";
import { Mensaje } from "../Mensaje/Mensaje";
import Loading from '../../icons/loading.svg';
import '../../Resources/Constants';
import './styles.css';

export const Search = ({ modeDark }) => {
    const [trending, setTrending] = useState([]);
    const [dataAuto, setDataAuto] = useState([]);
    const [inputSearch, setInputSearch] = useState(""); //busqueda
    const [btnBuscar, setBtnBuscar] = useState(false);

    //CAPTURAR VALOR DE INPUT
    const capturarInput = (e) => {
        setInputSearch(e.target.value);
    }

    //BTN BUSCAR
    const submitButton = (e) => {
        e.preventDefault();
        setBtnBuscar(true);
    }

    //CLICK AUTOCOMPLETE
    const clickAutocomplete = (e) => {
        console.log(e.target.lastChild.data)
        setInputSearch(e.target.lastChild.data);
        setBtnBuscar(true);
    }

    //TRENDING
    useEffect(() => {
        fetch(`${API_URL}${ENDPOINT.TRENDIG}?api_key=${API_KEY}&limit=${LIMIT.LIMIT_15}`)
            .then(result => {
                return result.json();
            })
            .then((data) => {
                setTrending(data.data)
            })
            .catch((err) => console.log(err));
    }, [])

    //SEARCH
    useEffect(() => {
        if (btnBuscar === true) {
            fetch(`${API_URL}${ENDPOINT.SEARCH}?api_key=${API_KEY}&q=${inputSearch}&limit=${LIMIT.LIMIT_12}`)
                .then(result => {
                    return result.json();
                })
                .then((data) => {
                    setBtnBuscar(false);
                    setTrending(data.data)
                    setInputSearch("");
                })
                .catch((err) => console.log(err));
        }
    }, [btnBuscar, inputSearch]);

    //AUTOCOMPLETE
    useEffect(() => {
        fetch(`${API_URL}${ENDPOINT.AUTOCOMPLETE}?api_key=${API_KEY}&q=${inputSearch}&limit=${LIMIT.LIMIT_5}`)
            .then(result => {
                return result.json();
            })
            .then((data) => {
                setDataAuto(data.data)
            })
            .catch((err) => console.log(err));
    }, [inputSearch]);

    return (
        <div className={`container__search ${!modeDark ? "light" : "dark"}`}>
            <div className={`contenido__search ${!modeDark ? "light" : "dark"}`}>
                <h1>¡Inspirate y busca los mejores <span className="font-weight">GIFS!</span></h1>
                <div className="imagen__search">
                    <img src={IconSearch} alt="" />
                    <form className="formulario__busqueda" onSubmit={submitButton}>
                        <div className={`contenido__formulario ${!modeDark ? "light" : "dark"}`}>
                            <input type="text" placeholder="Busca gifs" value={inputSearch} onChange={capturarInput} required />
                            <button type="submit">
                                <img src={Glass} alt="" />
                            </button>
                        </div>
                        <div className="lista__autocomplete">
                            {
                                inputSearch === '' ? (
                                    <></>
                                ) : dataAuto.length > 0 && inputSearch !== '' ? (

                                    <ListaAutocomplete autocomplete={dataAuto} clickAutocomplete={clickAutocomplete} />
                                ) : <></>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <h2>Resultados de la búsqueda</h2>
            <div className={`container__cardresults ${!modeDark ? "light" : "dark"}`}>
                {
                    inputSearch.length >= 0 && btnBuscar === true ? <img src={Loading} alt="Gift Cargando" /> : trending.length === 0 ? <Mensaje /> : // inputSearch === '' && btnBuscar === true ? <Mensaje modeDark={modeDark} /> : trending !== [] && btnBuscar === true ? <img src={Loading} alt="" /> :
                        (trending.map((trend) => {
                            return (
                                <CardResults key={trend.id} url={trend.embed_url} image={trend.images.fixed_width.url} title={trend.title} />
                            )
                        }))
                }
            </div>
        </div >
    )
}