import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


const productos = [
  {
    id: 0,
    nombre: "Tama Swingstar",
    Stock: 5,
    Precio: 80000,
    descripcion: "loren ipsun",
    img:"https://novaeramusica.com/3609-large_default/tama-swingstar-bateria-ss52h5c-mnb.jpg"  },
  {
    id: 1,
    nombre: "Tama RockStar",
    Stock: 5,
    Precio: 90000,
    descripcion: "loren ipsun",
    img:"https://http2.mlstatic.com/D_NQ_NP_112901-MLA20425323999_092015-O.jpg " },
  {
    id: 2,
    nombre: "Tama Rythmn",
    Stock: 5,
    Precio: 100000,
    descripcion: "loren ipsun",
    img: "https://veerkamp.files.wordpress.com/2015/03/baterc3ada-tama-rhythm-mate-5-piezas.jpg",
  },
  {
    id: 3,
    nombre: "Tama Silverstar",
    Stock: 5,
    Precio: 120000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_758774-MLA43682318840_102020-O.webp",
  },
  {
    id: 4,
    nombre: "Tama Acrilica",
    Stock: 5,
    Precio: 130000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_748984-MLA29459262812_022019-O.jpg",
  },
  {
    id: 5,
    nombre: "Tama Doble-Bombo",
    Stock: 5,
    Precio: 430000,
    descripcion: "loren ipsun",
    img: "https://m.media-amazon.com/images/I/61LXzPORODL._AC_SX450_.jpg",
  },
];

function ItemListContainer({ greeting }) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
    getData.then(res => setData(res));

}, [])

  return (
    <>
      <h2>{greeting}</h2>
      
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
