import React from 'react'
import './Estilos.css';
export const Nuevo = () => {
  return (
    <>
    

  <div className="container-fluid">
    <h1 id="t_nuevo">
      <center>Nuevo restaurante</center>
    </h1>
  </div>
  <div className="container p-5 my-5 border">


    <form action="/action_page.php">
      <div className="mb-3 mt-3">
        <label for="Nombre" className="form-label">Nombre del restaurante:</label>
        <input type="text" class="form-control" id="text" name="text"></input>
      </div>
      <div className="mb-3 mt-3">
        <label for="Describcion" className="form-label">Describción:</label>
        <input type="text" class="form-control" id="text" name="text"></input>
      </div>
      <div className="mb-3 mt-3">
        <label for="Direccion" className="form-label">Dirección:</label>
        <input type="text" class="form-control" id="text" name="text"></input>
      </div>

      <div className="1 mb-3 mt-3">
        <label for="Imagen 1" className="form-label 1">Imagen URL 1:</label>
        <input type="url " class="form-control 1" id="url1" name="url1"></input>
      </div>
      <div className="2 mb-3 mt-3">
        <label for="Imagen 2" className="form-label 2">Imagen URL 2:</label>
        <input type="url " class="form-control 1" id="url1" name="url1"></input>
      </div>

      
      <button type="submit" className="btn btn-primary">Guardar</button>
      <button type="reset" className="btn btn-primary">eliminar información</button>
    </form>
  </div>
    </>
 
  )
}
