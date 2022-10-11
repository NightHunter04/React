import React from "react";
import  './Navbar.css';
import logo from '../../assets/pearl.jpg';
import ComponenteNavBar from '../ComponenteNavBar/ComponenteNavBar'
import { Button } from "@mui/material";


const Navbar = ({children}) =>{

  return (
    <header>
      <img className="Bateria" src= {logo} alt="Logo de Tresillo" />
      <h1>Tresillo Drum House </h1>
          <ul>
             <a href="">Baterias</a>
             <a href="">Platillos</a>
             <a href="">Accesorios</a>
             <a href="">Nosotros</a>
          </ul> 
           {children}
      
    <button className="carrito"><ComponenteNavBar/></button>
    </header>
  )
}

export default Navbar
