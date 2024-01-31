import { Pag } from "./styles"

import Input from "../Input"

//import Button from "../Button"

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

                <button>ACIONAR</button>
            </div>
        </Pag>
    )
}