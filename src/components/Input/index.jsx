import { Main } from "./styles"

export default function Input({content}) {
    console.log(content);
    return(
        <Main width={content} />
    )
}