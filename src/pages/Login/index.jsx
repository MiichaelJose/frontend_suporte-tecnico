import { useState } from "react";

import axios from "axios";

import { uri } from "../../config/config_script";

import { Pag, Section } from "./styles"

import Logo from "../../components/LogoEmpresa";
import Icon from '../../assets/icon-helpdesk.svg'


function decodeficador_JWT(data) {
    const [encodedPayload] = data.token_acesso.split('.');

    const payload = JSON.parse(atob(encodedPayload)).exp;

    console.log(payload);
}

export default function Login() {
    const [cpf, setCpf]  = useState('')
    const [senha, setSenha]  = useState('')


    function acessar() {
        const body = {
            "cpf":cpf,
            "senha":senha,
        }
        
        axios.post(`${uri.server}/login`,body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(({data}) => {
            decodeficador_JWT(data)
            localStorage.setItem("data", JSON.stringify(data)) 
            window.location.href = '/home'
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

                <p>preencha os campos abaixo para acessar tela de chamados</p>

                <form>
                    <input type="text" onChange={e => setCpf(e.target.value)} placeholder="cpf"/>
                    <input type="text" onChange={e => setSenha(e.target.value)} placeholder="senha"/>

                    <button onClick={() => acessar()}>Acessar</button>
                </form>
                
                <div>
                    <img src={Icon} alt="icon-helpdesk"/>

                    <p className="info">area exclusiva apenas para a equipe do sistema helpdesk</p>
                </div>
            </Section>
        </Pag>
    )
}

