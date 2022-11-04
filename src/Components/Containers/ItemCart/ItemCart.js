import React, {useContext} from "react";
import { Context } from "../../../Context/CartContext";
import './ItemCart.css'



const ItemCart = ({product}) => {
    console.log(product);

    const { deleteItem } = useContext(Context)
    console.log(deleteItem);
    return(
        <div className="compras">
        <section className="itemCart">
            <img src={product.img} alt=""/>
                <p className="nombre">Nombre: {product.nombre}</p>
                <p className="precio">Precio: ${product.precio}</p>
                <p className="cantidad">Cantidad: {product.cantidad}</p>
                <p className="total">Subtotal: ${product.cantidad * product.precio}</p>
                <button className="boton__borrar" onClick={()=>deleteItem(product.id)}>Eliminar</button>
                  
                    
        </section>
        </div>
    )
}


export default ItemCart