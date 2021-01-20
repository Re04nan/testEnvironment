import React from 'react';
import Nav  from '../Menu';
import Rodape from '../Rodape';
import colmeias from '../imagens/colmeias.png';
import abelha from '../imagens/abelhass.png';

import '../css/colmeia.css';
import '../css/conteiner.css';

const Nivel = () => {
        return(
            <>
                <main id="cor-de-fundo">
                    <Nav />
                    <div  className="container-fluid">
                        <div className="mt-5 pt-5">
                            <div id="fundo-aqui" className="text-center">
                                PROGRESSO
                                <div id="menor-texto" className="">
                                    COMPLETE AS<br />FASES PARA CONTINUAR!
                                </div>
                            </div>
                            <div className="fixed-bottom mb-5">
                                <img id="abelhinha" src={abelha}/>
                            </div>
                            <div className="fixed-bottom"> 
                                <img id="colmeia-img" src={colmeias}/>
                            </div>
                        </div>
                    </div>
                </main>
            <Rodape />
            </>
        )
}

export default Nivel;