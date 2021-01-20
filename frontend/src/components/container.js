import React, { Component } from 'react';
import '../components/css/conteiner.css'

/* Dentro de Ajustes siga o mesmo raciocinio dos outros componetes*/
export class Ajuste extends Component {
    render(){
        return(
            <div id="Ajustes" className="container">
                {/* Para deixar um item abaixo do outro, crie uma nova div .row justify-content-center 
                para que ela fique alinha no centro da tela, vc podera fazer ajustes no conteiner pelo id="Ajustes"
                
                */ }
                <div className="row justify-content-center">AJUSTES</div>

                <div className="row justify-content-center">
                    <i className="fas fa-volume-up" id="ajustes-icon1"/> 
                    <div id="ajustes-texto">SOM</div>
                </div>
                <div className="row justify-content-center"  id="espaçamento-opcoes">
                    <button id="opcao" className="btn btn-outline-light">LIGADO</button>
                    <button id="opcao" className="btn btn-outline-light" >DESLIGADO</button>
                </div>

                <div className="row justify-content-center">
                    <i class="fas fa-music" id="ajustes-icon1"/> 
                    <div id="ajustes-texto">MÚSICA DE FUNDO</div>
                </div>
                <div className="row justify-content-center" id="espaçamento-opcoes">
                    <button id="opcao" className="btn btn-outline-light">LIGADA</button>
                    <button id="opcao" className="btn btn-outline-light" >DESLIGADA</button>
                </div>

                <div className="row justify-content-center">
                    <i class="fas fa-text-height" id="ajustes-icon1"/> 
                    <div id="ajustes-texto">FONTE</div>
                </div>
                <div className="row justify-content-center" id="espaçamento-opcoes">
                    <button id="opcao" className="btn btn-outline-light"><div id="sma">PEQUENA</div></button>
                    <button id="opcao" className="btn btn-outline-light" >MÉDIA</button>
                    <button id="opcao" className="btn btn-outline-light" ><div id="big">GRANDE</div></button>
                </div>

                
            </div>
        )
    }
}

/* esse aqui apenas renderiza os componets */
class Container extends Component {
    render(){
        return(
            <div>
                <div className="row justify-content-center">
                    <div></div>
                </div>
                <div className="row justify-content-center">
                    <div><Ajuste /></div>
                </div>
            </div>
        )
    }
}

export default Container;