import { Pag } from "./styles"

import { config } from "../../config/config_script"

import Input from "../Input"
import Button from "../Button"

export default function FormChamado({text}) {
    return(
        <Pag>
            <p>{text}</p>
                
            <div>
                <h4>CPF</h4>
                <Input type="text" />
                
                <h4>DEPARTAMENTO</h4>
                <Input type="text" /> 

                <h4>SERIAL EQUIPAMENTO</h4>
                <Input type="text" />  

                <h4>DESCRIÇÃO</h4>
                <textarea></textarea>

                <Button width={config.width50} text={config.buttontextform}/>
            </div>
        </Pag>
    )
}