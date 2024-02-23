import { useState } from "react"
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
    border:2px solid var(--color--black);
    color:var(--color--white);
    cursor: pointer;
    font-weight:600;
    transition:0.3s;

    &:hover{
        background-color:var(--color--white);
        color:var(--color--black);
        
    }

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

const Registration = () => {
    const [isUserData, setIsUserData] = useState<boolean>(false);

    const openPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsUserData(true);
    }

    return (
        <StyledContainer>
            {isUserData ?
                <>
                    <Header>Create password</Header>

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" />

                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input type="password" id="confirmPassword" />

                    <BigBtn>Confirm</BigBtn>
                    <Btn>Back</Btn>
                </>
                : <>
                    <Header>Create account</Header>

                    <Label htmlFor="firstName">First name</Label>
                    <Input type="text" id="firstName" />

                    <Label htmlFor="lastName">Last name</Label>
                    <Input type="text" id="lastName" />

                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" />

                    <BigBtn onClick={(e) => openPassword(e)}>Continue</BigBtn>
                    <Btn>I already have an account</Btn>
                </>}
        </StyledContainer>
    )
}

export default Registration