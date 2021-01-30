import React, {Fragment} from 'react';

const ResultadoPost = ({id, latitud, longitud}) => {
    return ( 
    <Fragment>
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
        <p>Se registro la corrdenada con ID: {id}</p>
        <p>Latitud: {latitud}   Longitud:{longitud}</p>
        </div>
    </Fragment> );
}
 
export default ResultadoPost;