import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import ServicePost from './components/ServicePost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';

function App() {
    
    const [data, guardarData] = useState([]);

    //UseEffect
    useEffect( () => {
      const consultarAPI = () => {
          clienteAxios.get('/recordController/getAllRecords')
            .then(respuesta => {guardarData(respuesta.data)})
            .catch( err => {console.log(err)})
      }
      consultarAPI();
    }, []);

  return ( 
    <Router>
      <Switch>
      <Route 
          exact path = "/"
          component = {() => <Main data={data}/>}
        />
        <Route 
          exact path = "/createRecord"
          component = {() => <ServicePost data={data}/>}
        />
      </Switch>
    </Router>
  );
}

export default App;

/**/
  //definir el state
    //const [state, setstate] = useState(initialState)          -> state: variable setstate -> funcion q va a ser utilizada para ir guardando el state, initialState--> valor inicial del state
    
    /*const [cantidad, guaardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [cargando, guardarCargando] = useState(false);

    let componente;
    if(cantidad === 0){
      componente = <Mensaje />;
    } else{
      componente = <Resultado 
        cantidad = {cantidad}
        guaardarCantidad = {guaardarCantidad}
        plazo = {plazo}
      />;
    }

  return (
    <Fragment>
      <Header 
        titulo = "Cotizador de Prestamos"
        descripcion = "Nuevo proyecto"
      />

      <div className="container">
        <Formulario 
          cantidad = {cantidad}
          guaardarCantidad = {guaardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
        />
        <div className="mensajes">
          {componente}
        </div>
        <div>
        {(!cargando)? <Spinner /> : null}
        </div>
        
      </div>
    </Fragment>
     ); */ 

