import React, { Component } from 'react';
import '../components/css/colmeia.css';
import '../components/css/conteiner.css';
import colmeias from '../components/imagens/colmeias.png';
import abelha from '../components/imagens/abelhass.png';


class Nivel extends Component {
    render(){
        return(
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
        )
    }
}

export default Nivel;