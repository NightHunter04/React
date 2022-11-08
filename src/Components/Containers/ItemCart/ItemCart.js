import React, {useContext} from "react";
import { Context } from "../../../Context/CartContext";
import './ItemCart.css'
import DeleteIcon from '@mui/icons-material/Delete';



const ItemCart = ({product, finalizarCompra}) => {
    console.log(product);

    const { removeItem } = useContext(Context)
    
    return(
        <div className="compras">
        <section className="itemCart">
            <img className="imagen" src={product.img} alt=""/>
                <h3 className="nombre">{product.nombre}</h3>
                <h3 className="nombre"> ${product.precio}</h3>
                <h3 className="nombre">Cantidad:{product.cantidad}</h3>
                <h3 className="nombre">Subtotal: ${product.cantidad * product.precio}</h3>
                <DeleteIcon  color="black" className="eliminar" onClick={() => removeItem(product.id)}/>
               
                    
        </section>
        </div>
    )
}


export default ItemCart