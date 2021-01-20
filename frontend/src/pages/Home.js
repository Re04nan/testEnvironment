import React from "react";
import '../components/css/home.css'
import '../components/css/botao.css';
import '../components/css/conteiner.css'
import Nav from './nav';
import Rodape from '../components/Rodape';
import {Botao} from '../components/botao';
import Img from '../components/imagens/eumeprotejo.png'
import abelha from '../components/imagens/abelhass.png';


const Home = () =>{
    return(
    <div>
        <div className="App" id="cor-de-fundo">
            <div>
            <Nav />
            </div>   
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-sm-10"></div>
                <div id="emp" className="col-md">                          
                    <p>CONHEÇA O <br/>
                    EU ME PROTEJO</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div id="cartaz" className="col-sm"><img src={Img}/></div>
            </div>
                <div className="row justify-content-center mt-5">
                    <div className="col"><Botao class="btn" nome="INICIAR" id="btni"/></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col"></div>
                    <Botao class="btn" nome="AJUSTES" id="btn"/>
                    <Botao class="btn mr-5 ml-5" nome="EXTRA" id="btn"/>
                    <Botao class="btn" nome="SAIR" id="btn"/>
                    <div className="col"></div>
                </div>
                <div className="row justify-content-center">
                </div>
           </div>
            <div className="fixed-bottom mb-5">
                <img className="ml-5" id="abelhinha" src={abelha}/>
            </div>
       </div>
       <div>
            <Rodape />
        </div>
    </div>
    )
}

export default Home;

/*
 return(
    
    )
*/