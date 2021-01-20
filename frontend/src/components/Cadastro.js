import React from 'react';
import Nav from '../pages/nav';
import Rodape from './Rodape';
import abelha from './imagens/abelhass.png';

import '../components/css/colmeia.css';
import './css/Global.css';
import './css/Cadastro.css';
import './css/botao.css';

 const Cadastro = () => {

        return(
        <>
            <main id="cor-de-fundo">
                    <Nav/>
                    <div id="Cadastro" className="container">
                        <div id="teste" className="row justify-content-center pt-4">
                            <form>
                                <label id="titulo">CADASTRAR</label>
                                    <input id="InpC" type="text" className="mt-4" name="usuario" placeholder="NOME DE USUÁRIO"></input>
                                    <input id="InpC" type="text" className="mt-5" name="senha" placeholder="SENHA"></input>
                                    <input id="InpC" type="text" className="mt-5" name="confirme" placeholder="CONFIRME A SENHA"></input>
                                    <input id="InpC" type="text" className="mt-5" name="e-responsa" placeholder="E-MAIL DO RESPONSAVEL"></input>
                               
                                <div className="row justify-content-center mt-2">
                                    <button type="submit" className="btn" nome="CRIAR" id="btnC">CRIAR CONTA</button>
                                </div>
                            </form>
                        </div>
                    </div>
                <div className="fixed-bottom mb-5">
                    <img className="ml-5" alt="Bee" id="abelhinha" src={abelha}/>
                </div>
            </main>
                <Rodape />
        </>
        )
}

export default Cadastro;