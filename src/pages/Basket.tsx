import styled from 'styled-components'
import BasketItem from '../ui/BasketItem';
import { useNavigate } from 'react-router-dom';


const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  justify-content:space-between;
  gap:2rem;
    
    &>ul {
        margin: 3rem auto 0;
        width: 80vw;
        list-style-type: none;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        justify-items:center;
        gap: 7rem;
        
        &>li{
            width:100%;

        }
    }

    @media (max-width: 1300px) {
        &>ul {
            gap:3rem;
        }
    }

    @media (max-width: 1100px) {
        &>ul {
            grid-template-columns:1fr 1fr;
        }
    }

    @media (max-width: 750px) {
        &>ul {
            width: 90vw;
        }
     
    }

    @media (max-width: 600px) {  
        &>ul {
            grid-template-columns: 1fr;
            margin-bottom:5rem;
        }
    }

`;

const Panel = styled.div`
    margin: 3rem auto 2rem; 
    width: 70vw;
    background-color: var(--color--pink);
    padding:1rem;
    color:white;
    border-radius:0.8rem;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        width:100vw;
        position:fixed;
        bottom:0;
        left:0;
        margin: 0; 
        border-radius:0;
        background-color:white;
        padding:0;
    }


    & button{
        transition:0.3s;
        border:none;
        border-radius:0.7rem;

        @media (max-width: 600px) {
        width:50vw;
        height:4rem;
        border-radius:0;
        padding:0;
        }

        &:hover{
        transform:scale(1.1);
    }
    }
`;

const TotalPrice = styled.button`
    background-color:transparent;
    font-size:1.2rem;
    font-weight:600;
    color:white;
    

    @media (max-width: 600px) {
        color:black;
    }
`

const SignupBtn = styled.button`
    background-color:white;
    padding:0.5rem 2rem;
    font-size:1rem;
    font-weight:500;
    cursor: pointer;

    @media (max-width: 600px) {
        background-color:var(--color--pink); 
        font-size:1.5rem;
        color:white;
    }
`

const LoginBtn = styled.button`
    background-color:white;
    padding:0.5rem 2rem;
    font-size:1rem;
    font-weight:500;
    cursor: pointer;

    @media (max-width: 600px) {
        font-size:1.5rem;
    }
`

const Buy = styled.button`
    background-color:white;
    color:black;
    padding:0.5rem 2rem;
    font-size:1rem;
    font-weight:500;
    cursor: pointer;

    @media (max-width: 600px) {
        color:white;
        background-color:var(--color--pink);
        font-size:1.5rem;
    }
`



const data = [
    { image: "rose.png", name: "A thousand ", price: 29.99, quantity: 2, id: 1 },
    { image: "rose.png", name: "A thousand arrows ", price: 49.99, quantity: 2, id: 2 },
    { image: "rose.png", name: "A thousand arrows of the Cupid", price: 19.99, quantity: 2, id: 3 },
    { image: "rose.png", name: "A thousand arrows  Cupid saefaws asdfsd", price: 49.99, quantity: 2, id: 15 },
];


const Basket = () => {
    const navigate = useNavigate()
    const totalPrice = data.reduce((cur, acc) => cur + acc.price, 0)
    const isLogin = false

    return (
        <BasketContainer>
            <ul>
                {data.map((item) => <li key={item.id}><BasketItem item={item} /></li>)}
            </ul>
            <Panel>

                {isLogin ?
                    <>
                        <TotalPrice>Total: ${Math.ceil(totalPrice)}</TotalPrice>
                        <Buy>Buy</Buy>
                    </>
                    :
                    <>
                        {
                            window.innerWidth <= 768
                                ?
                                <LoginBtn onClick={() => navigate("/login")}>Log In</LoginBtn>
                                :
                                <TotalPrice>Total: ${Math.ceil(totalPrice)}</TotalPrice>
                        }
                        <SignupBtn onClick={() => navigate("/registration")}>Sign Up</SignupBtn>
                    </>}
            </Panel>
        </BasketContainer>
    )
}

export default Basket

