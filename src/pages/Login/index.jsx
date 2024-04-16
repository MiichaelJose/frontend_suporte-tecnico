import { useState } from "react";
import { Pag, Section } from "./styles"
import Logo from "../../components/LogoEmpresa";
import Icon from '../../assets/icon-helpdesk.svg'

import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucess } from "../../config/notify-hot-toast";

import { api } from "../../config/api";

function decodeficador_JWT(data) {
    const [encodedPayload] = data.token_acesso.split('.');

    const payload = JSON.parse(atob(encodedPayload)).exp;
}

export default function Login() {
    const [cpf, setCpf]  = useState('')
    const [senha, setSenha]  = useState('')

    function acessar() {
        const body = {
            "cpf":cpf,
            "senha":senha,
        }
        
        api.post(`/login`,body,{
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(({data}) => {
            decodeficador_JWT(data)

            localStorage.setItem("data", JSON.stringify(data)) 
            
            notifySucess('sucesso, acessando...')
            
            setTimeout(() => {window.location.href = '/home'},2000)
        })
        .catch(function (error) {
            notifyError('dados incorretos')
            console.error(error);
        });
    }

    return(
        <Pag>
            <Logo/>
            <Section>
                <h2>Login</h2>

                <p>preencha os campos abaixo para acessar tela de chamados</p>

                <section>
                    <input type="text" onChange={e => setCpf(e.target.value)} placeholder="cpf"/>
                    <input type="password" onChange={e => setSenha(e.target.value)} placeholder="senha"/>

                    <button onClick={() => acessar()}>Acessar</button>
                    <Toaster />
                </section>
                
                <div>
                    <img src={Icon} alt="icon-helpdesk"/>

                    <p className="info">area exclusiva apenas para a equipe do sistema helpdesk</p>
                </div>
            </Section>
        </Pag>
    )
}

