import React, { Component } from 'react';
import '../components/css/conteiner.css'
import {Botao} from './botao';
import './css/botao.css';

export class Input extends Component {
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <input id={this.props.id} type={this.props.type} className={this.props.class} name={this.props.name} placeholder={this.props.place}/>
                </div>
            </div>
            
        )
    }
}

/* faça as alterações aqui :) */
export class Cadastro extends Component {
    render(){
        return(
            <div id="Cadastro" className="container">
                <div className="row justify-content-center pt-4">
                    <div id="titulo">CRIAR CONTA</div>
                </div>
                {/*
                css
                ::-webkit-input-placeholder {
                color: white;
                font-family: 'Paytone One', sans-serif;
            }
            */ }
                <div className="justify-content-center mt-4">
                    <div><Input id="InpC" type="text" class="mt-4 row align-self-item-center" name="exe" place="NOME DE USUÁRIO"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-4 row" name="exe" place="SENHA"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-4 row" name="exe" place="CONFIRME A SENHA"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-4 row" name="exe" place="E-MAIL DO RESPONSAVEL"></Input></div>
                </div>
                <div className="row justify-content-center mt-2">
                    <Botao type="submit" class="btn" nome="CRIAR" id="btnC"/>
                </div>
            </div>
        )
    }
}
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
                    <div><Cadastro /></div>
                </div>
                <div className="row justify-content-center">
                    <div><Ajuste /></div>
                </div>
            </div>
        )
    }
}

export default Container;