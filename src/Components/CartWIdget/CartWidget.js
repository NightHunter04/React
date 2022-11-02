import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CartContext';
import './CartWidget.css'
import {CartContext} from "../../"

export const CartWidget = () => {
  const {qty} = useContext (Context);
  
  return (
    <>
    <div>
        <span className='carrito'>{qty}</span>
            <ShoppingCartIcon color="white" fontSize="large" /> 
    </div>  
    </>
  )
}
