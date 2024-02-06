import { Main } from "./styles"

export default function Button({url, width, background, text}) {
    return(
        <Main to={url} width={width} backgroundcolor={background}>{text}</Main>
    )
}