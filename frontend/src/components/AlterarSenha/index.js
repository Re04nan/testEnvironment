import React from 'react';
import Nav from '../Menu';
import Rodape from '../Rodape';
import abelha from '../imagens/abelhass.png';

import '../css/conteiner.css';

const Page3 = () =>{
    return(
        <main id="cor-de-fundo">
            <Nav />
            <div id="conte1" className="container">
                <div className="row justify-content-center pt-4">
                    <form>
                            <label id="container-titulo">ALTERAR SENHA</label>
                            <div className="row justify-content-center">
                                <input id="InpL" type="password" className="mt-5" name="senha" placeholder="SENHA" required></input>
                                <input id="InpL" type="email" className="mt-5" name="email" placeholder="E-MAIL" required></input>        
                            </div>
                            <div className="row justify-content-center mt-2">
                                    <button type="submit" className="btn" nome="alterar" id="btnC">ALTERAR</button>
                            </div>
                    </form>
                </div>
            </div>
            <div className="fixed-bottom mb-5">
                <img className="ml-5" alt="Bee" id="abelhinha" src={abelha}/>
            </div>
            <Rodape />
        </main>   
    )
}

export default Page3;