import React, {useContext} from "react";
import { Context } from "../../../Context/CartContext";
import './ItemCart.css'



const ItemCart = ({product}) => {
    console.log(product);

    const { deleteItem } = useContext(Context)
    console.log(deleteItem);
    return(
        <>
        <section className="itemCart">
            <img src={product.imagen} alt=""/>
                <p>Nombre: {product.nombre}</p>
                <p>Precio: ${product.precio}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button className="boton__borrar" onClick={()=>deleteItem(product.id)}>

                </button>
                  
                    
        </section>
        </>
    )
}


export default ItemCart