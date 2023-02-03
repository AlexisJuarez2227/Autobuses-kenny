import Register from "../styles/register.css";
import Logo from "../components/atoms/logo.jsx";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import Label from "../components/atoms/Label";
function FormRegister() {
    const navigate = useNavigate()
     const name = useRef()
     const username = useRef()
    
     const email = useRef()
     const form = useRef()
     const newForm = new FormData(form.current)
     const endpoint = 'http://34.225.239.102/api/registrar/usuario'
    
    const options = {
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
       
    }
    
    

  const handlerClick = (e) => {
    e.preventDefault();
   
          


        const newForm = new FormData(form.current)

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }
   
       
    
          
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
               

           if(newForm.get('nombre')==""|newForm.get('usuario')==""|newForm.get('contrasenia')==""){
            alert("Favor de no dejar campos vacios")
           }
               else{
 
                alert(data.message)
                navigate('/login')
               }
          
               
               
            
             
               
            })

        
    
        }
    
    
    return (

        
        

<form  ref={form} className="contenedorRegister" >
    <br></br><br></br>
<Logo></Logo>
<h6>Autobuses Kenny</h6>
    <h5>Name</h5>
<input type="text" name="nombre"></input>
    <h5>E-Mail</h5>
<input type="text" name="correo"></input>
    <h5>Username</h5>
<input type="text" name="usuario"></input>
    <h5>Password</h5>
<input type="password" name="contrasenia"></input>
<br></br><br></br>

<button onClick={handlerClick} >Registro</button>
<br></br> <br></br>
</form>



        
      );
}

export default FormRegister;