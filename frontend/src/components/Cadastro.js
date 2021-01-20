import React, {Component} from 'react';
import './css/botao.css';
import {Input} from './container';
import {Botao} from './botao'
import './css/Cadastro.css';

 class Cadastro extends Component {
    render(){
        return(
            <div id="Cadastro" className="container">
                <div className="row justify-content-center pt-4">
                    <div id="titulo">CADASTRAR</div>
                </div>
                <div className="justify-content-center mt-4">
                    <div><Input id="InpC" type="text" class="mt-4 text-center" name="usuario" place="NOME DE USUÁRIO"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-5 text-center" name="senha" place="SENHA"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-5 text-center" name="confirme" place="CONFIRME A SENHA"></Input></div>
                    <div><Input id="InpC" type="text" class="mt-5 text-center" name="e-responsa" place="E-MAIL DO RESPONSAVEL"></Input></div>
                </div>
                <div className="row justify-content-center mt-2">
                    <Botao type="submit" class="btn" nome="CRIAR" id="btnC"/>
                </div>
            </div>
        )
    }
}

export default Cadastro;