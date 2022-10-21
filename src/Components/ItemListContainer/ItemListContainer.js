import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetailContainer } from "../Containers/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const body = [
  {
    id: 17,
    categoria :"Home",
    img: "https://aquilespriester.com/site/wp-content/uploads/2020/08/aquiles-priester-drum-kit-2017-pic-by-arthur-galvao854-1.jpg",
    
  },
]
const productos = [
  {
    id: 0,
    categoria: "Baterias",
    nombre: "Tama Swingstar",
    Stock: 5,
    Precio: 120000,
    descripcion: "loren ipsun",
    img:"https://novaeramusica.com/5729/tama-swingstar-bateria-ss52fh5c-vts.jpg"  },
  {
    id: 1,
    categoria: "Baterias",
    nombre: "Tama RockStar",
    Stock: 5,
    Precio: 150000,
    descripcion: "loren ipsun",
    img:"https://http2.mlstatic.com/D_NQ_NP_112901-MLA20425323999_092015-O.jpg " },
  {
    id: 2,
    categoria: "Baterias",
    nombre: "Tama Rythmn",
    Stock: 5,
    Precio: 160000,
    descripcion: "loren ipsun",
    img: "https://veerkamp.files.wordpress.com/2015/03/baterc3ada-tama-rhythm-mate-5-piezas.jpg",
  },
  {
    id: 3,
    categoria: "Baterias",
    nombre: "Tama Silverstar",
    Stock: 5,
    Precio: 180000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_758774-MLA43682318840_102020-O.webp",
  },
  {
    id: 4,
    categoria: "Baterias",
    nombre: "Tama Acrilica",
    Stock: 5,
    Precio: 180000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_748984-MLA29459262812_022019-O.jpg",
  },
  {
    id: 5,
    categoria: "Baterias",
    nombre: "Tama Doble-Bombo",
    Stock: 5,
    Precio: 430000,
    descripcion: "loren ipsun",
    img: "https://m.media-amazon.com/images/I/61LXzPORODL._AC_SX450_.jpg",
  },
  {
    id: 6,
    categoria :"Platillos",
    nombre: "Set platos",
    Stock: 5,
    Precio: 100000,
    descripcion: "loren ipsun",
    img: "https://tiendafeedback.com.ar/13555-large_default/set-de-platillos-zildjian-a-series-14-16-18-21.jpg",
  }, 
  {
    id: 7,
    categoria :"Platillos",
    nombre: "Ride",
    Stock: 5,
    Precio: 95000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_983416-MLA45042584841_032021-O.webp",
  }, 
  
  {
    id: 8,
    categoria :"Platillos",
    nombre: "Hi-Hat",
    Stock: 5,
    Precio: 120000,
    descripcion: "loren ipsun",
    img: "https://www.inovamusicnet.com/wp-content/uploads/2021/05/61PL72B2BaCmL.AC_SL1500_.jpg",
  },
  
  {
    id: 9,
    categoria :"Platillos",
    nombre: "China",
    Stock: 5,
    Precio: 130000,
    descripcion: "loren ipsun",
    img: "https://tiendafeedback.com.ar/12103-large_default/platillo-zildjian-china-a-series-18.jpg",
  },
  
  {
    id: 10,
    categoria :"Platillos",
    nombre: "Crash",
    Stock: 5,
    Precio: 100000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_442121-MLA20716445558_052016-O.webp",
  },
  
  {
    id: 11,
    categoria :"Platillos",
    nombre: "Splash",
    Stock: 5,
    Precio: 43000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_754700-MLA46603816509_072021-O.jpg",
  },

  {
    id: 12,
    categoria :"Accesorios",
    nombre: "Porta Baquetas",
    Stock: 5,
    Precio: 8000,
    descripcion: "loren ipsun",
    img: "https://www.heavenimagenes.com/heavencommerce/b23e72e1-40ba-4adb-9dc3-7ee3d3a63b35/images/v2/VIC%20FIRTH/1511161914363926_01_medium.jpg",
  },
  {
    id: 13,
    categoria :"Accesorios",
    nombre: "Set Parches",
    Stock: 5,
    Precio: 18000,
    descripcion: "loren ipsun",
    img: "https://http2.mlstatic.com/D_NQ_NP_838862-MLA40568233691_012020-O.jpg",
  },
  {
    id: 14,
    categoria :"Accesorios",
    nombre: "Banqueta",
    Stock: 5,
    Precio: 43000,
    descripcion: "loren ipsun",
    img: "https://alvarezmusica.com.ar/1473-large_default/banqueta-para-bateria-gibraltar-6608-asiento-moto.jpg",
  },
  {
    id: 15,
    categoria :"Accesorios",
    nombre: "Set Soportes y pedal",
    Stock: 5,
    Precio: 170000,
    descripcion: "loren ipsun",
    img: "https://ar.xprostore.com/image/cache/data/imagenesweb/hw680w-650x650.jpg",
  },
  {
    id: 16,
    categoria :"Accesorios",
    nombre: "Corral",
    Stock: 5,
    Precio: 78000,
    descripcion: "loren ipsun",
    img: "https://storage.googleapis.com/tecnowestune/2021/02/e661ebb0-dr-80.jpg",
  },
  
];
const getData = new Promise(resolve => {
  setTimeout(() => {
      resolve(productos);
  }, 2000);
});

function ItemListContainer({ greeting }) {
  const {id} = useParams ()
  console.log(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData
    .then ((data)=>{
     if (id){
      setData(data.filter(productos =>productos.categoria === id ))
    }else {
      setData (data)
    }
    
    })

    .catch ((error) =>{
      console.log("error");
    })
   

}, [id])

  return (
    <>
      <h2>{greeting}</h2>
      
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;