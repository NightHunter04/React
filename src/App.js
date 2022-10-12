import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {Cart} from "./Components/Containers/CartView/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const mensaje = "Gracias por visitarnos"
  return (
    <>
    <BrowserRouter>
     <Navbar/> 
     <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
          
   
    </>
  )
}

export default App
