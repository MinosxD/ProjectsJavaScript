import React, { Fragment } from 'react';

const Resultado = ({data}) => {
    return ( <Fragment>
    <div className="App">
      <ul className="u-full-width container2">
        {data.length > 0 &&
          data.map((item) => {
              if(item.latitude == null || item.longitude == null){
                  return null;
              }else{return (
                <li key={item.id} className = "listas">
                    <div>
                        <strong>
                          {item.staName} {item.citName}
                        </strong>
                    </div>
                    <div >
                        <p >{item.latitude}</p>
                        <p >{item.longitude}</p>
                    </div>
                </li>
                  
                );}            
          })}
      </ul>
    </div>
    </Fragment> );
}
 
export default Resultado;

/*

<li key={item.id} className="item">
                <div>
                  <img className="img" src={item.image} />
                </div>
                <div className="info">
                  <p>
                    <strong>
                      {item.staName} {item.citName}
                    </strong>
                  </p>
                  <p>{item.latitude}</p>
                  <p>{item.longitude}</p>
                </div>
              </li>
              */