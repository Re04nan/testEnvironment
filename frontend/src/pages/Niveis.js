import React from 'react';
import Nav  from '../components/Menu';
import Rodape from '../components/Rodape';
import Nivel  from '../components/Nivel';

const Niveis = () =>{
    return(
        <div className="App" id="cor-de-fundo">
            <div>
                <Nav />
            </div>
        <div  className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div><Nivel /></div>
            </div>
        </div>
        <div >
            <Rodape />
        </div>
    </div>  
    )
}

export default Niveis;