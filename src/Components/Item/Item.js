import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Item.css"
import { Link ,Navlink } from "react-router-dom";


 function Item({producto}) {
  

  return (
    <div className="Fondo" >
        <Card className="tarjetaBateria">
          <img className='tarjetaImagen' src= {producto.img}/>
         <CardContent>
          <p >
            {producto.nombre}
          </p>
            <p>Precio: ${producto.Precio}</p>
          
        </CardContent>
        <Link to ={`/producto/${producto.id} `}>
        <button className="boton" size="large" color="primary">
               Descripcion
        </button>
        </Link>
        </Card>
    </div>    
   );
}
export default Item;      
 
  



    













/*function Item({ producto }){
    console.log(producto);
    return(
        <div>
            <h3>{producto.nombre}</h3>
             <img src={producto.img} />
             <p>{producto.descripcion}</p>
             <h3>${producto.Precio}</h3>
            
            
        </div>    
               
         
           
            
           
        
    );
}*/