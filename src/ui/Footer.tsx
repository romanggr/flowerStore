import styled from "styled-components"
import Logo from "./Logo"
import FooterSocials from "./FooterSocials"

const StyledFooter = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  margin:5rem 7rem;
  display:flex;
  justify-content:center;
  gap:5rem;

  & h2{
    font-weight:500;
  }

@media (max-width: 1024px) {
    margin:2rem;
    gap:3rem;
    flex-wrap:wrap;
}


  &>div{
    width:33%;
    @media (max-width: 1024px) {
        width:17rem;
}
  }
  &>h2{
    font-size:2rem;
  }

`

const About = styled.div`
    & p{
        font-size:0.8rem;
        margin-top:1.5rem;
        color:var(--color--grey);
    }
`

const Subscription = styled.div`
    & form{
        margin-top:1.5rem;
        position:relative;
        height:2rem;
        width:80%;
    }

    & input{
        border:2px solid var(--color--grey-light);
        border-radius:2rem;
        height:100%;
        width:110%;
        padding:1.5rem;
        
    }

    & button{
        border:none;
        background-color:transparent;
        position:absolute;
        
        top:40%;
        right:0; 
        cursor: pointer;
    }
`



const Footer = () => {

    return (
        <StyledFooter>
            <About>
                <Logo />
                <p>We are a floral studio that has just opened in Popa,
                    but has already won the hearts of many visitors.
                    And all because we work for the result, we make
                    efforts to find an approach to everyone, we even
                    try to guess your thoughts.</p>
            </About>
            <FooterSocials />
            <Subscription>
                <h2>Stay tuned for new products and promotions:</h2>
                <form>
                    <input type="email" placeholder="Type your email" />
                    <button><img src="./bird.svg" alt="send" /></button>
                </form>
            </Subscription>
        </StyledFooter>
    )
}

export default Footer