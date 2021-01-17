import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import API from '../../axios/Api';

const App = () => {
    const [msg, setMsg] = useState(true);
    const [entrar, setEntrar] = useState(false);
    const [cadastro, setCadastro] = useState({
        nome: "",
        email: "",
        senha: ""
    });
    const [login, setLogin] = useState({
        nome: "",
        senha: ""
    });
   
    const controleCadastro = (event) => {
        setCadastro({
            ...cadastro,
            [event.target.name]: event.target.value
        });
    }

    // Registrar
    async function upCadastro(event){
        event.preventDefault();

        let campo2 = document.getElementById("confirmeSenha").value;
        let campo1 = document.getElementById("senha").value;
        if(campo2 === campo1){
            await API.post('/Cadastro.php', cadastro)
            .then((response) => {
                console.log(response.data.sucess);
                setMsg(response.data.sucess);

                setTimeout(()=>{
                    setMsg(true);
                }, 3000);

                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";
                document.getElementById("confirmeSenha").value = "";
            })   
        } else{
            setMsg(false);
            setTimeout(()=>{
                setMsg(true);
            }, 3000);
        }
    }

    const controleLogin = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }

    async function upLogin(event) {
        event.preventDefault();

        await API.post('/Login.php', login)
        .then((response) => { 
            setEntrar(response.data.sucess);
            console.log(entrar);
            console.log(response.data.id);
        })
    }

    return (
        <>
            <main Style="display: flex; justify-content: space-around;">
                <form onSubmit={upCadastro} className="m-4">
                    <fieldset>
                        <legend>Cadastro</legend>
                            <label htmlFor="nome">Login:</label><br/>
                            <input onChange={controleCadastro} type="text" name="nome" id="nome"></input><br/>
                            <label htmlFor="email">E-mail:</label><br/>
                            <input onChange={controleCadastro} type="email" name="email" id="email"></input><br/>
                            <label htmlFor="senha">Senha:</label><br/>
                            <input onChange={controleCadastro} type="password" name="senha" id="senha"></input><br/>
                            <label htmlFor="confirmeSenha">Confirmar Senha:</label><br/>
                            <input onChange={controleLogin} type="password" name="confirmeSenha" id="confirmeSenha"></input><br/><br/>
                            <button className="btn btn-success">Cadastrar</button>
                            <button type="reset" className="btn btn-success m-2">Limpar</button>
                    </fieldset>
                </form>
                
                { 
                    !msg && <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">
                    Erro para Cadastrar
                    </div>
                }

                <form onSubmit={upLogin} className="m-4">
                    <fieldset>
                        <legend>Login</legend>
                            <label htmlFor="nome">User/Nick:</label><br/>
                            <input onChange={controleLogin} type="text" name="nome" id="nome"></input><br/>
                            <label htmlFor="senha">Senha:</label><br/>
                            <input onChange={controleLogin} type="password" name="senha" id="senha"></input><br/><br/>
                            {
                               entrar?<button className="btn btn-success"><Link to='/Menu'>Jogar</Link></button>:
                               <button className="btn btn-success">Jogar</button>
                            } 
                            
                    </fieldset>
                </form>
            </main>
        </>
    );
};

export default App;