import React from 'react';
import Index from './Index';
import Login from '../components/Login';
import Cadastro from '../components/Cadastro';
import AlterarSenha from './AlterarSenha';
import Ajustes from './Ajustes';
import Niveis from './Niveis';
import { Switch, Route} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Login" component={Login} exact/>
            <Route path="/Cadastro" component={Cadastro} exact/>
            <Route path="/AlterarSenha" component={AlterarSenha} />
            <Route path="/Ajustes" component={Ajustes} />
            <Route path="/Niveis" component={Niveis} />
        </Switch>
    )
}

export default Routes;