import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import BasketBar from "./BasketBar"

const StyledHeader = styled.header`
    display:grid;
    grid-template-columns:1fr 2fr 0.7fr;
    gap:1rem;
    align-items:center;

    width:85vw;
    margin:1rem auto;
    flex-wrap:wrap;
    

    @media (max-width: 950px) {
        grid-template-columns:1fr 1fr;

    }
`


const StyledNavBar = styled.nav`
    display:flex;
    gap:3.5rem;
    align-items:center;
    justify-content:center;

        & a{
         font-size:1.3rem;
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

         @media (max-width: 950px) {
            order:1;
            grid-column:span 2;
            justify-self:center;
         }

         @media (max-width: 500px) {
            width:100%;
            gap:0;
            justify-content:space-between;

            & a{
                font-size:1rem;
            }
         }

`


const Header = () => {


    return (
        <StyledHeader>
            <Logo />
            <StyledNavBar>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/locations"}>Locations</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={"/blog"}>Blog</Link>
            </StyledNavBar>
            <BasketBar />
        </StyledHeader>
    )
}

export default Header

