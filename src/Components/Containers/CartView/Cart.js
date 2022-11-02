import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/CartContext'
import Item from '../../Item/Item'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'



export const Cart = () => {
const { cart } = useContext(Context);
 
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
    </div>
  );
};

  
  

