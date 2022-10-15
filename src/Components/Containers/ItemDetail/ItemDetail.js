import React from 'react'
import "./ItemDetail.css"
import { ItemCount } from '../../ItemCount/ItemCount'
 

const ItemDetail = ({listaProducto, onAdd}) => {
  console.log (listaProducto)
  return (
    <div className='vistaProducto'>
       <img className='imgProducto' alt= {listaProducto.titulo} src= {listaProducto.img}/>
       <h1 className='nombreProducto'>{listaProducto.nombre}</h1>
       <span className=' descripcionProducto'>{listaProducto.descripcion}</span>
       <h2 className='precioProducto'>{listaProducto.Precio}</h2>
       <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail