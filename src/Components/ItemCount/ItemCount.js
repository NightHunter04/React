import React, {useState} from 'react'
import './ItemCount.css'
export const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);


  const handlerClickRestar = () => {
    if( count > 1) {
      setCount(count - 1)
    }
  };

  const handlerClickSumar= () => {
    if( count < stock){
      setCount(count + 1)
    }
  };
  

  return (
    <div className='counter'>
      <button className='restar' onClick={handlerClickRestar}>-</button>
      <h3 className='contador'>{count}</h3>
      <button className='sumar' onClick={handlerClickSumar}>+</button>
      <button className='finalizar' disabled={stock === 0 } onClick={()=>onAdd(count)}>
        <span className='agregar'>{stock === 0 ? "No tenemos stock" : "Agrega al carrito"}</span>
        
        </button>
    </div>
  );


};