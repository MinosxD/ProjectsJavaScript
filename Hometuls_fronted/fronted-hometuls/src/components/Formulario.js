import React, { Fragment, useState } from 'react';
import MapContainer from './GoogleMap';

const Formulario = ({latitud, guardarLatitud, longitud, guardarLongitud, tipoConsulta, guardartipoConsulta}) => {
    
    const [error, guardarerror] = useState(false)
    const [resultado_mapa, guardarresultado_mapa] = useState(false)

    const leerLatitud = (e) => {
        console.log('escribiendo Latitud', e.target);
        guardarLatitud(parseFloat(e.target.value));            
    }

    const leerLongitud = (e) => {
        console.log('escribiendo Longitud', e.target);
        guardarLongitud(parseFloat(e.target.value));            
    }

    const calcularMapa = (e) =>{
        e.preventDefault();
        guardartipoConsulta(1);
        console.log('validando formulario...');
        console.log(latitud, longitud);
        if (latitud === 0 && longitud === 0){
            console.log('Hay un error');
            guardarerror(true);
            return;
        }
        //eliminar el error 
        guardarerror(false);
        guardarresultado_mapa(true);
    }

    return ( 
        <Fragment>
            <form onSubmit = {calcularMapa} className="container">  
            <div className="row">
                <div className="six columns">
                    <label>Latitud</label>
                    <input className="u-full-width" type="number" step="any" placeholder="4.710989" id="latitud"
                    onChange = { leerLatitud }
                    ></input>
                </div>
                <div className="six columns">
                    <label>Longitud</label>
                    <input className="u-full-width" type="number" step="any" placeholder="-74.072092" id="longitud"
                    onChange = { leerLongitud }
                    ></input>
                </div>
                
                <div>
                  <input 
                      type="submit" 
                      value="Consultar Mapa" 
                      className="button-primary u-full-width" 
                  />
              </div>
                
            </div>  
                        
            {(resultado_mapa)?
            <div id="map" >
                <MapContainer
                    lat = {latitud}
                    lng = {longitud}
                />               
            </div> : null}

            {(error)?<p className="error">Todos los campos son obligatorios</p> : null}
            
            </form>
        </Fragment> );
}
 
export default Formulario;

/*
{(resultado_mapa)?
            <div id="map" >
                <MapContainer
                    lat = {latitud}
                    lng = {longitud}
                />               
            </div> : null}


<div className="six columns">
                    <label>Reason for contacting</label>
                    <select className="u-full-width" id="exampleRecipientInput">
                        <option value="Option 1">Questions</option>
                        <option value="Option 2">Admiration</option>
                        <option value="Option 3">Can I get your number?</option>
                    </select>
                </div>
                */