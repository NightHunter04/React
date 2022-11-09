import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"
import {getDoc, collection, doc, where} from "firebase/firestore"
import{db} from "../../../firebase/firebase"




const ItemDetailContainer = () => {

  

  const [listaProducto, setListaProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  

  useEffect(()=>{

    const productCollection = collection (db, 'productos')
    const refDoc = doc (productCollection, id)

    getDoc(refDoc)
    .then (result =>{
      setListaProducto({
        id: result.id,
        ...result.data()
      })
    })
.catch((error) =>{
  console.log ("error")
})
.finally (() =>{
  setLoading (false)
})
   
      
  },[id])
  
  



  return(
      <div>
         { loading ? <h1>Cargando</h1> : <ItemDetail listaProducto={listaProducto}/>}
      </div>
  )
}


export default ItemDetailContainer;