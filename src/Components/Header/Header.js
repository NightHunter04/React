import React from "react";
import  './header.css';
import logo from '../../assets/pearl.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'




const Header = () =>{
  return (
    <header>
      <img src= {logo} alt="Logo de Tresillo" />
      <h1>Tresillo Drum House</h1>
    
          <ul>
            <a href="">Baterias</a>
            <a href="">Platillos</a>
            <a href="">Accesorios</a>
            <a href="">Nosotros</a>
          </ul>
       
     
      <ShoppingCartIcon className="iconShop" sx={{ color: '#7D141D', fontSize: '55px' }}/>
        </header>
  )
}

export default Header


  
