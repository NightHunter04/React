import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/CartContext'
import Item from '../../Item/Item'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { db } from '../../../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, uddateDoc, updateDoc} from "firebase/firestore"




export const Cart = () => {
const { cart, total, clear, qty } = useContext(Context);

const comprador = {
  nombre: 'Nico',
  apellido : 'Dondo', 
  email: 'email@gmail.com'
}
 const finalizarCompra =() =>{
  const ventasCollection = collection (db,"ventas");
  addDoc(ventasCollection, {
    comprador,
    items:cart,
    total,
    date : serverTimestamp()
  }) 
  .then(result =>{
    console.log (result)
  })

  
clear()

 }

 const actualizarStock = () => {
  cart.forEach(item => {
      const product = doc(db, "productos", item.id);
      updateDoc(product, {stock: item.stock - item.qty})
  })
}
return (
    <div className='cart'>
      {cart.length === 0 ? (
        <>
          <h1 className=' titulo'>
            No agregaste productos, hacelo haciendo <Link to="/">CLICK AQUI</Link>
            
          </h1>
          
        </>
      ) : (
        <>
          
          {cart.map((producto) => (
            < ItemCart key={producto.id} product ={ producto}/>
           
          ))}
        </>
      )}
      <button onClick={actualizarStock}>Finalizar Compra</button>
    </div>
  );
};
