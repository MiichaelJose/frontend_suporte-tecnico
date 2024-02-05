import { Section, AreaUsuarios, Card, Image } from "./styles"

import IconUser from "../../../assets/homem.png"

import MenuMobile from '../../../components/MenuMobile'
import BottomSideBar from "../Components/BottomSideBar"

export default function UsuarioRegistro() {
    const urlEl1 = "/home/usuario-registro" 
    const urlEl2 = "/home/usuario-cadastro"

    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar urlEl1={urlEl1} urlEl2={urlEl2} />
                <AreaUsuarios>
                    <Card>
                        <div>
                            <h3>FUNCIONÁRIO CADASTRADO</h3>
                        </div>
                        <section>
                            <div>
                                <p>Michael J. Silva</p>
                                <p>Técnico</p>
                                <p>ATIVO</p>  
                            </div>
                            <div>
                                <Image src={IconUser}/>
                                <div>
                                    <input type="checkbox" name="check" id="check"  />
                                    <p>ACESSO</p>
                                </div>
                            </div>
                        </section>
                    </Card>
                </AreaUsuarios>
            </Section>  
        </>
    )
}