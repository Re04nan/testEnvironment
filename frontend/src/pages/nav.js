import React from 'react';
import {Link} from 'react-router-dom';
import '../components/css/menu.css'

const Nav = () => {
    return(
        <div id="menus">
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" to="/Login">LOGIN</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" to="/Cadastro">CADASTRO</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" to="/AlterarSenha">ALTERAR SENHA</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" to="/Ajustes">AJUSTES</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="menu-texto" class="nav-link" to="/Niveis">PROGRESSO</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;