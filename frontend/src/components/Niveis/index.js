import React from 'react';
import Rodape from '../Rodape';
import colmeias from '../imagens/colmeias.png';
import abelha from '../imagens/abelhass.png';

import '../css/colmeia.css';
import '../css/conteiner.css';
import '../css/botao.css';

const Nivel = () => {
        return(
            <>
                <main id="cor-de-fundo" className="container-fluid">
                    <div className="row justify-content-end">
                        <button className="btn m-4" id="btn" type="submit" name="sair">SAIR</button>
                        <button className="btn m-4" id="btnE" type="submit" name="excluir">APAGAR CONTA?</button>
                    </div>
                    <div  className="row justify-content-center pt-4">
                            <div id="fundo-aqui">
                                <div  className="row justify-content-right p-4">
                                    <h1>FASE:</h1>
                                </div>
                                PROGRESSO
                                <div id="menor-texto" className="">
                                    COMPLETE AS<br />FASES PARA CONTINUAR!
                                </div>
                                    <img id="colmeia-img" alt="Colmeia" src={colmeias}/>
                            </div>
                            <div className="fixed-bottom mb-5">
                                <img id="abelhinha" alt="Bee" src={abelha}/>
                            </div>
                    </div>
                </main>
            <Rodape />
            </>
        )
}

export default Nivel;