import React from 'react';
import Index from './App';
import Login from './Login';
import Cadastro from './Cadastro';
import AlterarSenha from '../pages/AlterarSenha';
import Ajustes from '../pages/Ajustes';
import Niveis from '../pages/Niveis';
import { Switch, Route} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Login" component={Login}/>
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/AlterarSenha" component={AlterarSenha} />
            <Route path="/Ajustes" component={Ajustes} />
            <Route path="/Niveis" component={Niveis} />
        </Switch>
    )
}

export default Routes;