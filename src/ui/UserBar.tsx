import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledUserBar = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:2rem;
    
    & p{
        display:flex;
        align-items:center;
        gap:0.5rem;
        font-size:1.2rem;
        font-weight:600;
        cursor: pointer;
    }

    & svg{
        font-size:2rem;
    }

    & img{
        cursor: pointer;
        border-radius:50%;
        width:4rem;
    }

    @media (max-width:510px) {
        gap:0.5rem;

        & img{
            width:3rem
        }

        & svg{
            font-size:1.5rem;
        }
    }

`


const UserBar = () => {
    const navigate = useNavigate()
    return (
        <StyledUserBar onClick={() => navigate("basket")}>
            <p>$32.0 <span><FaBasketShopping /></span></p>
        </StyledUserBar>
    )
}

export default UserBar