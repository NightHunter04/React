import React, { useState, useContext } from "react";
import "../../Components/ItemsDetail/ItemDetail.css"
import {ItemCount} from '../../Components/ItemCount/ItemCount'
import {Link} from "react-router-dom";
//import { Context } from "../../context/CartContext";


export const ItemDetail = ({ producto }) => {
  const [isPressedButton, setIsPressedButton ] = useState(false);
  //const { addItem } = useContext(Context);


  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(producto, count);
  };

  return (
    <div class="item">
      <img class="itemimg" alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}$</h2>
      {! isPressedButton ? (
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )
      }
    </div>
  );
};
