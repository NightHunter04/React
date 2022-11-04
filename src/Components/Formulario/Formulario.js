import React, {useState,useContext} from "react";
import './Formulario.css';
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContext";
import { Formik } from "formik";
import {Cart} from "../../Components/Containers/CartView/Cart"


const Formulario = () => {
    const {finalizarCompra} = useContext(Context)
    const [alerta, setAlerta] = useState(false)


    return (
        <div className="contenedor">
            <Formik
            initialValues={
                {
                nombre : '',
                apellido : '',
                correo : '',
            }
            }
            validate= {

                (valor) => {
                    let errores = {};

                    if(!valor.nombre){
                     errores.nombre = 'Por favor ingresa un nombre.'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombre)){
                        errores.nombre= 'Ingresar solo letras y espacios.'
                    }

                    if(!valor.apellido){
                        errores.apellido = 'Porfavor ingresa un apellido.'
                       }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.apellido)){
                        errores.apellido= 'Ingresar solo letras y espacios.'
                    }

                    if(!valor.email){
                        errores.email= 'Por favor ingresa un email.'
                    }else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)){
                        errores.email= 'Formato incorrecto.'
                    }
                    
                    return errores;
                
                }
            }
            onSubmit={(valores, {resetForm})=>{ 
                resetForm();
               
               setAlerta(true)
               }}
            >
                {({values , errors , touched,  handleSubmit , handleBlur ,handleChange} ) => (
                    <form onSubmit={handleSubmit} className="formulario">
                        <h2 className="titulo">Ingrese sus datos / Please complete form</h2>
                    <div>
                      <label htmlFor="nombre">Nombre / Name</label>
                      <input type="text" 
                      id="nombre"
                      name="nombre" 
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && <div><span  className="spanForm">{errors.nombre}</span></div>}
                    </div>
                    <div>
                     <label htmlFor="apellido">Apellido / Lastname</label>
                    <input type="text"
                    id="apellido"
                    name="apellido" 
                    value={values.apellido} 
                    onChange={handleChange}
                    onBlur={handleBlur}

                     />
                      {touched.apellido && errors.apellido && <div><span className="spanForm">{errors.apellido}</span></div>}
                     </div>
                     
                    <div>
                    <label htmlFor="email">Correo / Email</label>
                    <input type="email" 
                    id="email" 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
 
                    />
                    {touched.email && errors.email && <div><span className="spanForm">{errors.email}</span></div>}
                    </div>
                    <div>
                   <div>
                   <button type="submit">Continuar / Continue</button>
                   </div>
                   
                 
            
                   </div>
                </form>

                )}
        
        </Formik>
        </div>
       
    )
}

export default Formulario