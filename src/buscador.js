import { restaurantes } from './arreglo-restaurantes'
 

let restauran =  (rest=>{
    return (` 
            <div class="card">
            
         <h4> ${rest.nombre}</h4>
         <p> ${rest.direccion}</p>
         <p> ${rest.describcion}</p>
         
          </div>
    `);
})



function mifunction() {
    let busca = document.getElementById("buscar").value;
    let volean = false;
  
   for (let i = 0; i < restaurantes.length; i++) {

    if (busca===restaurantes[i].nombre) {
         volean=true
       document.getElementById("container").innerHTML =restauran(restaurantes[i]);  
    }
   }
    if (volean===false) {
        document.getElementById("container").innerHTML =" No se encontraron resultados..."; 
    }
 }

 
export{
    mifunction
}