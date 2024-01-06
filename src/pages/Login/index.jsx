import { Pag, Section } from "./styles"

import Logo from "../Component/LogoEmpresa";

import { useState } from "react";

import axios from "axios";


export default function Login()
{
    const [cpf, setCpf]  = useState('')
    const [senha, setSenha]  = useState('')

    function acessar() {
        const body = {
            "cpf":cpf,
            "senha":senha,
        }
        
        axios.post("http://localhost:8080/login",body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(({data}) => {
            localStorage.setItem("data", JSON.stringify(data)) 
            window.location.href = '/ticket'
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <Pag>
            <Logo/>
            <Section>
                <h2>Login</h2>

                <p>preencha os campos a seguir para acessar tela de chamados</p>

                <div>
                    
                    <input type="text" onChange={e => setCpf(e.target.value)} placeholder="cpf"/>
                    <input type="text" onChange={e => setSenha(e.target.value)} placeholder="senha"/>

                    <button onClick={() => acessar()}>Acessar</button>
                </div>
            </Section>
        </Pag>
    )
}