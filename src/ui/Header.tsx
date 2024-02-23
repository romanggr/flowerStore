import styled from "styled-components"
import UserBar from "./UserBar"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useState } from "react"

const StyledHeader = styled.header`
    margin:1rem 5rem;
    display:grid;
    grid-template-columns:1fr 2fr 0.7fr;
    gap:1rem;
    align-items:center;
    

    @media (max-width:968px) {
        margin:1rem 2rem;
       
    }

    @media (max-width:800px) {
        grid-template-columns:1fr 1fr;
        
    }

    @media (max-width:510px) {
        margin:1rem;
    }
    
`


const StyledNavBar = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;

    & a{
        font-size:1.2rem;
        color:var(--color--black);
        text-decoration:none;
        font-weight:500;
        position: relative;
        
        
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -3px;
            left: 0;
            background-color: var(--color--black);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        
        &:hover::after{
            transform: scaleX(1);
            transform-origin: bottom left;
        }
        }

        @media (max-width:800px) {
            order:3;
            grid-column: span 2;
            justify-content:center;
        }


        @media (max-width:510px) {
            gap:1.5rem;

            & a{
            font-size:1rem;
            }
        }
`

const LoginCont = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:1rem;
    min-width:13rem;
   
    &>button{
        border-radius:1rem;
        font-size:1rem;
        font-weight:500;
        padding:0.5rem 1rem;
        cursor: pointer;
    }

    @media (max-width:510px) {
        &>button{
        font-size:0.8rem;
        padding:0.3rem 0.7rem;
    }
    }
`

const LoginBtn = styled.button`
    background-color:transparent;
    border:3px solid var(--color--pink);

    &:hover{
        background-color:transparent;

    }
`

const SignUpBtn = styled.button`
    background-color:var(--color--pink);
    border:3px solid var(--color--pink);
`

const Header = () => {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <StyledHeader>
            <Logo />
            <StyledNavBar>
                {/* <Link to={"/shop"}>Shop</Link> */}
                <button onClick={() => setIsLogged(prev => !prev)}>log</button>
                <Link to={"/locations"}>Locations</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={"/blog"}>Blog</Link>
            </StyledNavBar>
            {isLogged
                ?
                <UserBar />
                :
                <LoginCont>
                    <SignUpBtn>Sign Up</SignUpBtn>
                    <LoginBtn>Log In</LoginBtn>
                </LoginCont>}

        </StyledHeader>
    )
}

export default Header