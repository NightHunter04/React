import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/CartContext'
import Item from '../../Item/Item'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { db } from '../../../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, uddateDoc, updateDoc} from "firebase/firestore"
import Swal from 'sweetalert2'




export const Cart = () => {
const { cart, total, clear, qty } = useContext(Context);

const comprador = {
  nombre: '',
  apellido : '', 
  email: ''
}
 const finalizarCompra =() =>{
  const ventasCollection = collection (db,"ventas");
  addDoc(ventasCollection, {
    comprador,
    items:cart,
    total,
    date:serverTimestamp()
  }) 
  .then(result =>{
    console.log(result.id)
    Swal.fire({
      title: 'Muchas Gracias',
      html: `Numero de compra: <b>${result.id}</b>`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  })

actualizarStock()
  
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
     <div className="detail-cart">
      
           <Link to="/formulario">
           <button className="boton-fin" onClick={finalizarCompra}>Finalizar compra</button>
           Swal.fire('Any fool can use a computer')
           </Link>
      </div> 
 </div>
 )}             
           