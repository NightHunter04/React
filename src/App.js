import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Navbar/ItemListContainer";




const App = () => {
  const mensaje = "Gracias por visitarnos"
  return (
    <>
    <Navbar>
  
    </Navbar>     
    < ItemListContainer greeting={mensaje}/>

    </>
  )
}

export default App
