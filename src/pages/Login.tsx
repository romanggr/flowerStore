import styled from "styled-components"
import Label from "../ui/Label"
import Input from "../ui/Input"

const StyledContainer = styled.form`
    width:25vw;
    margin:20vh auto 0;
    display:flex;
    flex-direction:column;
    gap:1rem;

    @media (max-width:1024px) {
    margin-top:15vh;
    width:40vw;
    
}

@media (max-width:768px) {
    margin-top:10vh;
    width:70vw;
    
}
`

const Header = styled.h3`
    font-size:1.8rem;
    font-weight:700;
    margin-bottom:1rem;
`

const BigBtn = styled.button`
    margin-top:2rem;
    width:100%;
    height:3rem;
    background-color:var(--color--black);
    border:none;
    color:var(--color--white);
    cursor: pointer;
    font-size:1.4rem;
`

const Btn = styled.button`
    background-color:transparent;
    border:none;
    color:var(--color--grey);
    cursor: pointer;
    transition:0.2s;

&:hover{
    color:var(--color--pink);
}
`

const Login = () => {
    return (
        <StyledContainer>
            <Header>Login</Header>

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />

            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />

            <BigBtn>Login</BigBtn>
            <Btn>Don't have an account</Btn>
        </StyledContainer>
    )
}

export default Login