import React, { Component } from 'react';
import './css/botao.css';


export class BtnPlay extends Component {
    render(){
        return(
            <div>
                <button type="button" id={this.props.btnP} className="btn" class="fas fa-play"></button>
            </div>
        )
    }
}

export class BotaoRot extends  Component {
    render(){
        return(
            <Botao nome="Rotate" class="btn m-5 btn-lg"  id={this.props.id}/>
        )
    }
}

export class Botao extends Component {
    render(){
        return(
            <div className="row justify-content-center">
                <button type={this.props.type}  id={this.props.id}   className={this.props.class}>{this.props.nome}</button>
            </div>
        )
    }
}


 const Render = () => {
    return(
        <div className="#">
             <div className="#">
                <p>Pagina inicial:</p>
                <Botao class="btn" nome="INICIAR" id="btnInicio"/>
                <Botao class="btn" nome="AJUSTES" id="btn"/>
                <Botao class="btn" nome="EXTRA" id="btn"/>
                <Botao class="btn" nome="SAIR" id="btn"/>
            </div>
            <div>
                <BotaoRot id="btnRot"/>
                <BotaoRot id="btnRot2"/>
            </div>
            <div>
                <BtnPlay btnP="BtnPlay" c/>
            </div>
        </div>
    )
}

export default Render;