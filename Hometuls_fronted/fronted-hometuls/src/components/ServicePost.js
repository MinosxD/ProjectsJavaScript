import React, {useState, Fragment} from 'react';
import FormularioPost from './FormularioPost';

const ServicePost = () => {

    //states
    const [latitud, guardarLatitud] = useState(4.710989);
    const [longitud, guardarLongitud] = useState(-74.072092);
    return ( 
        <Fragment>
        <h1>LOCALIZADOR HOMETULS</h1>
        <div className="u-full-width">
            <FormularioPost 
                latitud = {latitud}
                guardarLatitud = {guardarLatitud}
                longitud = {longitud}
                guardarLongitud = {guardarLongitud}                
            />

        </div>
    </Fragment>
     );
}
 
export default ServicePost;