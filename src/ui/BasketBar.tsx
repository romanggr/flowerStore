import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:1rem;
    cursor: pointer;
    font-size:1.2rem;
    font-weight:600;

    &>div{
        position: relative;
        
        
        &>span{
            background-color:var(--color--pink);
            color:white;
            border-radius:50%;
            width:1.5rem;
            height:1.5rem;

            text-align:center;
            padding-top:0.2rem;
            font-size:0.8rem;
            font-weight:500;
            position:absolute;
            right:-0.8rem;
            top:-0.2rem;
        }

        &>svg{
            font-size:2rem;
        }
    }

    @media (max-width: 500px) {
        font-size:1rem;
      
        &>div{
            &>span{
                width:1.2rem;
                height:1.2rem;
                font-size:0.6rem;
                right:-0.6rem;
            }

            &>svg{
                font-size:1.5rem;
            }
        }
    }
`


const BasketBar = () => {
    const navigate = useNavigate()
    return (
        <Container onClick={() => navigate("basket")}>
            $32.0
            <div>
                <FaBasketShopping />
                <span>{12}</span>
            </div>

        </Container>
    )
}

export default BasketBar