import { ReactNode } from "react"
import styled from "styled-components"


const StyledLabel = styled.label`
    font-weight:200;
    margin-bottom:-1rem;

`

const Label = ({ children, htmlFor }: { children: ReactNode, htmlFor: string }) => {
    return (
        <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
    )
}

export default Label