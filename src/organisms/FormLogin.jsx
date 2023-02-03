import { useState } from "react";
import  login from "../styles/login.css"
import Logo from "../components/atoms/logo.jsx";
import Label from "../components/atoms/Label";
import {Link, redirect, useNavigate} from 'react-router-dom';
import { useRef } from 'react';

function FormLogin() {
   
  
     const navigate = useNavigate()
     const name = useRef()
     const username = useRef()
     const password = useRef()
     const form = useRef()
     const newForm = new FormData(form.current)
    const endpoint = 'http://34.225.239.102/api/iniciar'
    
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
                usuario: newForm.get('usuario'),
                contrasenia: newForm.get('contrasenia')
            })
        }
   
        if(newForm.get('usuario')=="" | newForm.get('contrasenia')==""){
    alert("No deje campos vacios")
        } 
       
        else{
          
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
              


                if(data.status==false){
                    alert("Contraseña o usuario incorrecto verifique nuevamente");
                   }
               else if(data.usuariosC.usuario==newForm.get('usuario')&&data.usuariosC.contrasenia==newForm.get('contrasenia')){
                alert("Eres tu!")
                alert(JSON.stringify(data))
               navigate('/upBus')
               }
               
               
               
             
             
               
            })

        }


       


    
   
  }


    return (  



<form ref={form} className="contenedor" >

<Logo></Logo>
<h6>Autobuses Kenny</h6>
<Label msj={"Username"}></Label>
<input type="text" name="usuario"/>

<Label msj={"Password"}></Label>

<input type="password" name='contrasenia' />
<br></br><br></br>
<button onClick={handlerClick}>Iniciar Sesion</button>

<h5>No tienes una cuenta?, <a href="/register">Registrate</a> </h5>

</form>
      


    );
}

export default FormLogin;