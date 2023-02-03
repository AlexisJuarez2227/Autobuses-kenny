import upbus from "../styles/upbus.css";
import Logo from "../components/atoms/logo";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
function FormUpBus() {
    
    const navigate = useNavigate()
     const claveBus = useRef()
     const placaBus = useRef()
     const numeroAsiento = useRef()
     const fechaAlta = useRef()
     const tipo = useRef()
     const nombreChofer = useRef()
     const numLicencia = useRef()

     const form = useRef()
     const endpoint = 'http://34.225.239.102/api/autobus/register'
    
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
                    clave: newForm.get('clave'),
                    placa: newForm.get('placa'),
                    numasientos: newForm.get('numasientos'),
                    fecha: newForm.get('fecha'),
                    tipo: newForm.get('tipo'),
                    nombre: newForm.get('nombrechofer'),
                    licencia: newForm.get('licencia')
                
                })
            }
       
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                alert(data.message)
            })
        }

    return (  

        <form ref={form} className="contenedorUpBus">
            <Logo></Logo>
            <h6>Autobuses Kenny</h6>
        <h5>Clave autobus</h5>
        <input type="text" name="clave"></input>
        <h5>Placa autobus</h5>
        <input type="text" name="placa"></input>
        <h5>Numero de asientos</h5>
        <input type="number"name="numasientos"></input>
        <h5>Fecha de alta</h5>
        <input type="date" name="fecha"></input>
         <h5>Tipo</h5>
         <select name="tipo" >
            <option>Turismo</option>
            <option>Lujo</option>
        </select>
        <h5>Nombre del chofer</h5>
        <input type="text" name="nombrechofer"></input>
        <h5>Numero de licencia</h5>
        <input type="text" name="licencia"></input>
        <button onClick={handlerClick}>Registrar</button>
        </form>
     


    );
}

export default FormUpBus;