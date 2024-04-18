import { Section, AreaUsuarios, Card, Image } from "./styles"

import { config, urlLink } from "../../../config/config_script"

import IconUser from "../../../assets/homem.png"
import MenuMobile from '../../../components/MenuMobile'
import Button from "../../../components/Button"

export default function UsuarioRegistro() {
    return(
        <>
            <MenuMobile>
                <Button url={urlLink.urluserreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                <Button url={urlLink.urlusercad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
            </MenuMobile>
            <Section>
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
                                    <input type="checkbox" name="check" id="check"/>
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