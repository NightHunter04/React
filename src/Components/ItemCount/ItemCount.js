import React, {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  const handlerClickSumar= () => {
    if( count < stock){
      setCount(count + 1)
    }
  };

  const handlerClickRestar = () => {
    if( count > 1) {
      setCount(count - 1)
    }
  };

  const handlerClickAggCarrito = () => {
    onAdd();
  };


  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handlerClickRestar}>-</button>
      <button onClick={handlerClickSumar}>+</button>
      <button onClick={handlerClickAggCarrito}>Agg al Carrito</button>
    </div>
  );


};
