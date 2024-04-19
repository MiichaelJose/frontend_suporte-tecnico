import { useCallback, useState } from "react"

import { Section, AreaCadastro, Form } from "./styles"

import { config, urlLink } from "../../../config/config_script"

import MenuMobile from '../../../components/MenuMobile'
import Input from "../../../components/Input"
import Button from "../../../components/Button"

import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucess } from "../../../config/notify-hot-toast";

import { api } from "../../../config/api";

function cadastrar(data) {
    api.post(`/usuarios`,{ ...data, permissao:true}) 
    .then(({data}) => {
        console.log(data);
        notifySucess('cadastrado com sucesso!')
    })
    .catch(function (error) {
        notifyError('cadastro não realizado!')
        console.error(error);
    });
}

export default function UsuarioCadastro() {
    const [formData, setFormData] = useState({
        usuario:'', cpf:'', senha:'', departamento:'', cargo:''
    })

    const pegarMudanca = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    }

    // armazenar
    const handleSubmit = useCallback(() => {
        cadastrar(formData)
    }, [formData])

    return(
        <>
            <MenuMobile>
                <Button url={urlLink.urluserreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                <Button url={urlLink.urlusercad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
            </MenuMobile>
            <Section>
                <AreaCadastro>
                    <Form>
                        <p>Nome</p>
                        <Input width={config.width70}
                            type="text"
                            name="usuario"
                            value={formData.usuario}
                            onChange={pegarMudanca}
                        />   
                        <p>CPF</p>
                        <Input width={config.width50}
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={pegarMudanca}
                        />
                        <p>Senha de primeiro acesso</p>
                        <Input  width={config.width50}
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={pegarMudanca}
                        />
                        <p>Departamento</p>
                        <Input width={config.width50}
                            type="text"
                            name="departamento"
                            value={formData.departamento}
                            onChange={pegarMudanca}
                        />
                        <p>Cargo</p>
                        <select name="cargo"
                            value={formData.cargo}
                            onChange={pegarMudanca}
                        >
                            <option value={"TECNICO"}>Técnico</option>
                        </select>
                       
                        <Button  width={"50%"} text={config.buttontextform} onClick={handleSubmit}/>
                        <Toaster />
                    </Form>
                </AreaCadastro> 
            </Section>  
        </>
    )
}