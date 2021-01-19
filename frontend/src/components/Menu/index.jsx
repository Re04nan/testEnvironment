import API from '../../axios/Api';

const Menu = ({match}) => {

    function deleteUser (event) {
        event.preventDefault();
        async function del (){
            await API.delete('/Excluir.php?id='+ match.params.id)
            .then((res) => {
                console.log(res.data.sucess);
            });
        };
        del()
    }
    
    return(
        <main>
            <button className="btn btn-danger" onClick={deleteUser}>Apagar Conta</button>  
        </main>
    );
}

export default Menu;