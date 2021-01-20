import React from 'react';
import Nav from '../pages/nav';
import Rodape from './Rodape';
import abelha from './imagens/abelhass.png';
import { Link } from 'react-router-dom';

import '../components/css/Login.css';
import '../components/css/colmeia.css';
import '../components/css/Fundo.css';

const Login = () =>{
    return(
        <>
            <Nav/>
            <div id="conte1" className="container">
                <div id="cor-de-fundo" className="row justify-content-center pt-4">
                    <form>
                        <label id="container-titulo">LOGIN</label>

                        <div className="row justify-content-center">
                            <input id="InpL" type="text" class="mt-5 row" name="exe" placeholder="NOME DE USUÁRIO" />
                            <input id="InpL" type="text" class="mt-4" name="exe" placeholder="SENHA" />
                        </div>
                        <div className="row justify-content-center">
                            <input type="checkbox" name="mark-ativo" value="mark-ativo" id="mark-ativo"/>
                            <label id="manter-conectado" for="mark-ativo">MANTER CONECTADO</label>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <button type="button" className="btn btn-light rounded-circle" id="botaoplay">
                                <i class="fas fa-play"/>
                            </button>
                        </div>
                        <Link to="/Page2" id="clique-aqui" className="mt-4">NÃO TEM CADASTRO?
                        <p id="aqui">CLIQUE AQUI</p></Link>
                    </form>
                </div>
            </div>

                <div className="fixed-bottom mb-5">
                    <img className="ml-5" id="abelhinha" src={abelha}/>
                </div>
            <Rodape/>
        </>
    )
}
export default Login;
