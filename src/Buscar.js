import React, { useState } from 'react';
import { restaurantes } from './arreglo-restaurantes';

const Buscar = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = '', apellido = '', edad = '' } = valoresFormulario;
  const [resultado, setResultado] = useState([]);

  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    //console.log(e);
    console.log(e.target.name, e.target.value);
    //setValoresFormulario({ ...valoresFormulario, miedad: e.target.value });
    if (e.target.name === 'nombre') {
      setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
    }
    console.log(valoresFormulario);
  }

  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    console.log('estoy haciendo click');
    const filtro = restaurantes
      .filter(hshshs => hshshs.nombre.toUpperCase().includes(nombre.toUpperCase()));
    console.log(resultado);
    setResultado(filtro);
  }

  return (
    <div className="container-fluid mt-3">
      <div className='row'>
        <div className='col'>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="mb-3">

              <input required type="text" placeholder="Buscar restaurante" name="nombre" value={nombre}
                className="form-control" onChange={(e) => { handleOnChange(e) }} />
            </div>

            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {
              resultado.map(asasas => {
                return (
                  <div className="col" key={asasas.id}>
                    <div className="card">
                      {asasas.imagen}
                      <div className="card-body">
                        <h4 >{asasas.nombre}</h4>
                        <p >{asasas.direccion}</p>
                        <p >{asasas.describcion}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Buscar
}