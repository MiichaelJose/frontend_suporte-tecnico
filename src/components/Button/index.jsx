import { Main } from "./styles"

export default function Button({url, width, background, text, ...rest}) {
    return(
        <Main to={url} width={width} backgroundcolor={background} {...rest}>{text}</Main>
    )
}