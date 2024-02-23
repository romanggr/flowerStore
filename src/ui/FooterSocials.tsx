import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const StyledContainer = styled.div`

& h2{
    text-align:center;
}
@media (max-width: 1024px) {
        order:3;
}
`

const Socials = styled.div`
    display:flex;
    justify-content:center;
    gap:2rem;
    margin:1rem 0;


    

& button{
    margin-top:1rem;
    border:none;
    cursor: pointer;
    height:3rem;
    width:3rem;
    border-radius:2rem;
    transition: transform 0.3s ease;
    color:white;
    & *{
        font-size:1.8rem;
    }

    &:hover{
        transform: scale(1.2) ;
    }
}
`
const StyledFb = styled.button`
    background-color:#3b5998;
    
    
`
const StyledInst = styled.button`
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  
`

const StyledTw = styled.button`
    background-color:#1da1f2;
  
`



const FooterSocials = () => {
    const openExternalLink = (url: string) => {
        window.open(url, '_blank');
    };
    return (
        <StyledContainer>
            <h2>Social media:</h2>
            <Socials>
                <StyledFb onClick={() => openExternalLink("https://www.facebook.com/")}>
                    <FaFacebookF />
                </StyledFb >
                <StyledInst onClick={() => openExternalLink("https://www.instagram.com/")}>
                    <FaInstagram />
                </StyledInst>
                <StyledTw onClick={() => openExternalLink("https://twitter.com/")}>
                    <FaTwitter />
                </StyledTw>
            </Socials>
        </StyledContainer>
    )
}

export default FooterSocials