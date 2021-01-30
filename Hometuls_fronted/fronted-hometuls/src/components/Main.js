import React, { Fragment, useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';

const Main = ({data}) => {

    //states
    const [latitud, guardarLatitud] = useState(4.710989);
    const [longitud, guardarLongitud] = useState(-74.072092);
    const [tipoConsulta, guardartipoConsulta] = useState(0);
    let componente;
    if(tipoConsulta === 0){
        componente = <Resultado data={data}/>;
      } else{
        componente = null;
      }
    return ( <Fragment>
        <h1>LOCALIZADOR HOMETULS</h1>
        <div className="u-full-width">
            <Formulario 
                latitud = {latitud}
                guardarLatitud = {guardarLatitud}
                longitud = {longitud}
                guardarLongitud = {guardarLongitud}
                tipoConsulta = {tipoConsulta}
                guardartipoConsulta = {guardartipoConsulta}
            />
            
            <div className="mensajes">
                {componente}
            </div>

        </div>
    </Fragment>
         );
}
 
export default Main;