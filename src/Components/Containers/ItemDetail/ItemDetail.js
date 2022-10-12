import React from 'react'

 const ItemDetail = ({productos}) => {
  return (
    <div>
       <img alt= {productos.titulo} src= {productos.img}/>
       <h1>{productos.nombre}</h1>
       <span>{productos.descripcion}</span>
       <h2>{productos.precio}</h2>
    </div>
  )
}

export default ItemDetail