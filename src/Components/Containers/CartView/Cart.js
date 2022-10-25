import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/CartContext'
import './Cart.css'
export const Cart = () => {
  const { cart } = useContext(Context);


  
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className=' titulo'>
            No agregaste productos, hacelo haciendo <Link to="/">CLICK AQUI</Link>
            
          </h1>
          
        </>
      ) : (
        <>
          
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
           
          ))}
        </>
      )}
    </>
  );
};


