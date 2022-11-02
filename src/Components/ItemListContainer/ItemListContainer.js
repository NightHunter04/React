import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetailContainer } from "../Containers/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore"
import{db} from "../../firebase/firebase"



function ItemListContainer({ greeting }) {
  const {id} = useParams ();


  
  const [data, setData] = useState([]);
  const [loader,setLoader] = useState (true)
 
  
  

  useEffect(() => {

   const productCollection = collection (db,'productos') 
   const q = id ? query(productCollection, where('categoria', '==', id)) : productCollection;
   
   getDocs(q)
   .then((resultado)=>{

    const listProducts = resultado.docs.map (item =>{
      return {
        ...item.data(),
        id : item.id
      }
    })
    setData (listProducts)
   })
   
   
   
   
  
    
   

}, [id,])

  return (
    <>
      <h2>{greeting}</h2>
      
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;