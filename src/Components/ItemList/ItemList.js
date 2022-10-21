import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({data}) => {
   console.log(data);
   return (
    <main>
        {data.map((producto) => {
            return <Item key={producto.id} producto={producto}/>;
        })}
    </main>
    );
};