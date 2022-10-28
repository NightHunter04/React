import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CartContext';
import './CartWidget.css'

export const CartWidget = () => {
  const {cantidad} = useContext (Context);
  return (
    <>
    <div>
        <span className='carrito'>{cantidad}</span>
            <ShoppingCartIcon color="white" fontSize="large" /> 
    </div>  
    </>
  )
}
