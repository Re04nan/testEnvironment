import React from 'react';


import './css/Input.css';

function Input () {
    return (
        <div>
            <br/>
            <input className="rounded border-light" id="input-menor" placeholder="USUÁRIO"/>
            <br/>
            <input className="rounded border-light" id="input-maior" placeholder="NOME DE USUÁRIO"/>
        </div>
    );
}

export default Input;