import React from "react";
import  './Navbar.css';
import logo from '../../assets/pearl.jpg';
import ComponenteNavBar from '../ComponenteNavBar/ComponenteNavBar'
import { Button } from "@mui/material";
import { Link ,Navlink } from "react-router-dom";


const Navbar = ({children}) =>{

  const categorias = [
    
    {nombre: "Baterias", id : 0, ruta: "/categoria/Baterias"},
    {nombre: "Platillos", id: 1, ruta :"/categoria/Platillos"},
    {nombre:"Accesorios", id: 2, ruta:"/categoria/Accesorios"},
    {nombre:"Nosotros", id: 3, ruta: "/categoria/Nosotros"},
]
  return (
    <header>
      <Link to ="/">
        <img className="Bateria" src= {logo} alt="Logo de Tresillo" />
      </Link>
      <h1>Tresillo Drum House </h1>
          <ul>
            {
             categorias.map ((categoria)=>{
              return <Link key={categoria.id} to={categoria.ruta}>{categoria.nombre}</Link>
             } )
            }
          </ul> 
           {children}
     <Link to= "/cart">
     <button className="carrito"><ComponenteNavBar/></button>
     </Link> 
    
    </header>
  )
}

export default Navbar
