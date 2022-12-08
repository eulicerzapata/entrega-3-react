import React, { useState } from 'react';
import { restaurantes } from './arreglo-restaurantes';

const Buscar = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = '' } = valoresFormulario;
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
    <div className="container-fluid mt-5">


      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className='container p-5 my-5 border'>
          <div className="mb-3">

            <input required type="text" placeholder="Buscar restaurante" name="nombre" value={nombre}
              className="form-control" onChange={(e) => { handleOnChange(e) }} />
              
                     <br></br>
            <button type="submit" className="btn btn-primary"> Buscar</button>
          </div>
        </div>
      </form>


      <div id="container" className="container">
        {
          resultado.map(mostrar => {
            return (
              <div key={mostrar.id}>
                <div className="card">
                  {mostrar.imagen}
                  <div >
                    <h4 >{mostrar.nombre}</h4>
                    <p >{mostrar.direccion}</p>
                    <p >{mostrar.describcion}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export {
  Buscar
}