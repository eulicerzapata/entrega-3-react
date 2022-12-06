import React from 'react'
import { mifunction } from './buscador'

export const Buscar = () => {
  return (
    <>
    

    <form>
  <div className="container p-5 my-5 border">
    
    <div className=" mb-3">
      <input type="text" id="buscar"  placeholder="Buscar" />
      <button  className="btn btn-primary" id="botonbuscar" type="button" onClick={mifunction} >Buscar</button>
    </div>
  </div>
</form>

<div  id="container" className="container">
  

</div>
    </>

   
  )
}
