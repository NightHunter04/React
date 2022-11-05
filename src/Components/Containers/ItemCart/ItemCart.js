import React, {useContext} from "react";
import { Context } from "../../../Context/CartContext";
import './ItemCart.css'



const ItemCart = ({product}) => {
    console.log(product);

    const { removeItem } = useContext(Context)
    console.log(removeItem);
    return(
        <div className="compras">
        <section className="itemCart">
            <img src={product.img} alt=""/>
                <p className="nombre">Nombre: {product.nombre}</p>
                <p className="precio">Precio: ${product.precio}</p>
                <p className="cantidad">Cantidad: {product.cantidad}</p>
                <p className="total">Subtotal: ${product.cantidad * product.precio}</p>
                <button className="eliminar" onClick={() => removeItem(product.id)}>XXXX</button>
                  
                    
        </section>
        </div>
    )
}


export default ItemCart