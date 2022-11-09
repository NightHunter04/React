import React from "react";
import './App.css';
import Navbar from "../src/Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {Cart} from "./Components/Containers/CartView/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../src/Components/Containers/ItemDetailContainer/ItemDetailContainer"
import { LandingPage } from "./Components/LandingPage/LandingPage";
import {CustomProvider} from "./Context/CartContext" 
import Formulario from "./Components/Formulario/Formulario";



const App = () => {
  const mensaje = "Gracias por visitarnos"
  return (
    <CustomProvider>
    <BrowserRouter>
     <Navbar/> 
     <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          
     </Routes>
     
    </BrowserRouter>
    </CustomProvider>    
     
          
    )
}
    
export default App 
   
