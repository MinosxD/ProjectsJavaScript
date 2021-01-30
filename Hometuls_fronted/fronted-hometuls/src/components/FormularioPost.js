import React, {Fragment, useState} from 'react';
import clienteAxios from '../config/axios';
import { v4 as uuidv4 } from 'uuid';
import ResultadoPost from './ResultadoPost';

const FormularioPost = ({latitud, guardarLatitud, longitud, guardarLongitud}) => {
    const [error, guardarerror] = useState(false);
    const [resultado, guardarresultado] = useState(false);
    const [id, guardarId] = useState('');
    
    const data_coordenada = {
        "id": "2b56c0dd-4895-4b8d-bd4a-9d932b32f38b",
        "uuid": null,
        "categoryA": null,
        "categoryB": null,
        "categoryC": null,
        "subCategory": null,
        "institutionName": null,
        "comments": "Registro de prueba RAM2",
        "politicA": null,
        "politicB": null,
        "politicC": null,
        "anonymus": true,
        "name": "Santiago",
        "email": "RAM@correo.com",
        "phone": "231312323",
        "code_state": null,
        "code_city": null,
        "gender": "M",
        "ip_address": null,
        "ip_info": null,
        "date": 1611730186000,
        "image": null,
        "staName": null,
        "citName": null,
        "citId": null,
        "latitude": null,
        "longitude": null,
        "locInfo": null,
        "countItems": 0,
        "fileRecords": null
    }

    const cargarCoordenadas = (e) =>{
        const uuid = uuidv4();
        console.log(id);
        e.preventDefault();
        console.log('validando formulario...');
        console.log(latitud, longitud);
        if (latitud === 0 && longitud === 0){
            console.log('Hay un error');
            guardarerror(true);
            return;
        }
        //eliminar el error 
        guardarerror(false);
        data_coordenada.id = uuid;
        data_coordenada.latitude = latitud;
        data_coordenada.longitude = longitud;
        console.log(data_coordenada);
        clienteAxios.post('./recordController/createRecord', data_coordenada)
            .then(result => {guardarId(uuid)})
            .catch(err => {console.log(err)})
        guardarresultado(true);
    }

    const leerLatitud = (e) => {
        guardarresultado(false);
        console.log('escribiendo Latitud', e.target);
        guardarLatitud(parseFloat(e.target.value));            
    }

    const leerLongitud = (e) => {
        guardarresultado(false);
        console.log('escribiendo Longitud', e.target);
        guardarLongitud(parseFloat(e.target.value));            
    }

    return ( <Fragment>
        <form onSubmit = {cargarCoordenadas} className="container">  
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
                      value="Cargar Coordenadas" 
                      className="button-primary u-full-width" 
                  />
              </div>
            
        </div>                  

        {(resultado)?
            <div id="resultadoPost" >
                <ResultadoPost
                    id = {id}
                    latitud = {latitud}
                    longitud = {longitud}
                />               
            </div> : null}

        {(error)?<p className="error">Todos los campos son obligatorios y distintos de 0</p> : null}
        
        </form>
    </Fragment>);
}
 
export default FormularioPost;