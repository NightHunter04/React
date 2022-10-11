import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


const App = () => {
  const mensaje = "Gracias por visitarnos"
  return (
    <>
    <Navbar/> 
    <ItemListContainer greeting={mensaje}/>
   
    </>
  )
}

export default App
