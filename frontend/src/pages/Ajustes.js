import React from 'react';
import Nav  from '../components/Menu'
import Rodape from '../components/Rodape';
import Ajuste  from '../components/Ajustes';
import abelha from '../components/imagens/abelhass.png';

const Ajustes = () =>{
    return(
        <div className="App" id="cor-de-fundo">
                <div>
                    <Nav />
                </div>
            <div  className="container-fluid">
                <div className="row d-flex justify-content-center mt-5">
                    <div><Ajuste /></div>
                </div>
            </div>
            <div className="fixed-bottom mb-5">
                    <img className="ml-5" id="abelhinha" src={abelha}/>
                </div>
            <div >
                <Rodape />
            </div>
        </div>   
    )
}

export default Ajustes;