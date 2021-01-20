import React from 'react';
import Nav from './nav';
import Rodape from '../components/Rodape';
import Cadastro from '../components/Cadastro';
import abelha from '../components/imagens/abelhass.png';

const Page2 = () =>{
    return(
        <div className="App" id="cor-de-fundo">
                  <div>
                        <Nav />
                    </div>
            <div  className="container-fluid">
                <div className="row justify-content-center mt-5">
                    <div>
                        <Cadastro />
                    </div>
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

export default Page2;