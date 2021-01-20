import React from 'react';
import Nav from './nav';
import Rodape from '../components/Rodape';

const Page3 = () =>{
    return(
        <div className="App" id="cor-de-fundo">
                    <div>
                        <Nav />
                    </div>
            <div  className="container-fluid">
            </div>
            
            <div >
                <Rodape />
            </div>
        </div>   
    )
}

export default Page3;