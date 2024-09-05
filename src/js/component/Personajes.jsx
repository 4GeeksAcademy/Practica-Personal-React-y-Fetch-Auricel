import React, { useState, useEffect } from 'react';


export const Personajes = () => {
    const [personajes, setPersonaje] = useState([]);
    // con dataPersonajes llamo a todoos sus elementos
    const dataPersonajes = async () => {

        //Metodo Get Estructura
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url);
        const data = await response.json();

        // En data. llamo lo que quiero que me muestre de los elementos del URL de la parte de RESULTS
        setPersonaje(data.results);

    };

    useEffect(() => {
        dataPersonajes();
    }, []);

    console.log(personajes);

    return (

        <div className="container">
            <div div className="row">
            {
                //Utilizo el .map para recorrer los personajes de la API, estara afuera del div 
                personajes.map((personaje) => (
                    
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={personaje.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={personaje.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {personaje.name}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> {personaje.status} </li>
                                        <li className="list-group-item">{personaje.species}</li>
                                        <li className="list-group-item">{personaje.gender}</li>
                                    </ul>
                                    // 
                                    <a href={personaje.url} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    
                ))
            }
            </div>

        </div>

    );
};



