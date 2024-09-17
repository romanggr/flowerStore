import styled from "styled-components";


const StyledLogo = styled.h2`
        letter-spacing:2px;
        font-size:2rem;
        display:flex;
        align-items:center;
        font-weight:500;


        @media (max-width:500px) {
        font-size:1.5rem;

        & img{
            width:2rem;
        }
    }
  
`
const Logo = () => {
    return (
        <StyledLogo>FL<img src="/logo.svg" alt="logo" />WERS</StyledLogo>
    )
}

export default Logo