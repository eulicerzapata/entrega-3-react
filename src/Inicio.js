import React,{useState} from 'react'
import { restaurantes } from './arreglo-restaurantes'
import './Estilos.css';

export const Inicio = () => {

  const[restaurante] = useState(restaurantes);
    
    return  (
        <div id="container" className="container">

            {
                  restaurante.map(rest => {
                    return (
                        <div className="card" key={rest.id}>
                              {rest.imagen}
                            <h4> {rest.nombre}</h4>
                            <p> {rest.direccion}</p>
                            <p> {rest.describcion}</p>

                        </div>
                    )
                    
                })}

        </div>



    )
}

