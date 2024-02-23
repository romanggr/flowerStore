import styled from 'styled-components'

const StyledInput = styled.input`
    outline:none;
    border:none;
    border-bottom:3px solid var(--color--black);
    padding:0.5rem;
    transition:0.1s;
    
    &:focus{
        border-bottom:3px solid var(--color--pink);
    }
`

const Input = ({ id, type }: { id?: string, type?: string }) => {
    return (
        <StyledInput id={id} type={type} />
    )
}

export default Input