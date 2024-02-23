import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledContainer = styled.div`
    position:relative;
    width:13vw;
    cursor: pointer;

    & img{
        width:100%;
        border-radius:1rem;
    }

    &>h3{
        position:absolute;
        bottom:30%;
        left:5%;
        font-weight:600;
        font-size:1rem;
        color:white;
        transition:0.4s;
        padding: 0 0.5rem ;
    }

    &:hover{
        &>h3{
        bottom:40%;        
    }
    }

    @media (max-width:1120px) {
    width:18vw;
    }

    @media (max-width:768px) {
    width:25vw;
        
    }

    @media (max-width:535px) {
    width:35vw;
        &>h3{
        font-size:0.9rem;
        }
    }

    @media (max-width:370px) {
        &>h3{
        bottom:40%;
        }
    }
`

const StyledBottom = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:0.5rem;
`

const StyledPrice = styled.h4`
    font-size:1.2rem;
    font-weight:600;
`

const StyledPriceDiscount = styled.div`
& div{
    gap:0.5rem;
    display:flex;
    align-items:center;
}

    & h5{
        text-decoration:line-through;
        color:var(--color--grey);
        font-weight:500;
        font-size:1rem;
    }

    & p{
        border-radius:2rem;
        background-color:#D21C2E;
        padding:0.3rem 0.5rem;
        color: white;
        font-size:0.7rem;
        font-weight:600;
    }
`

const StyledAdd = styled.div`
    width:1.8rem;
    transition:0.2s ease;
    
    
    &:hover{
        opacity:0.5;
        }
`

const ProductsItem = ({ id, image, discount, price, name }: { name: string, image: string, price: number, discount: null | number, id: number }) => {
    const [isAdded, setIsAdded] = useState<boolean>(false)
    const navigate = useNavigate();
    const newPrice = discount ? Math.round(price - price * discount / 100) : -1;

    const handleAddToCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIsAdded(isAdded => !isAdded)
    };

    return (
        <StyledContainer onClick={() => navigate(`/product/${id}`)}>
            <img src={`/products/${image}`} alt="image" />
            <h3 onClick={() => navigate(`/product/${id}`)}>{name}</h3>
            <StyledBottom>
                {newPrice === -1 ? <StyledPrice>${price}</StyledPrice> :
                    <StyledPriceDiscount>
                        <div>
                            <h5>${price}</h5><p>{discount}%</p>
                        </div>
                        <StyledPrice>${newPrice}</StyledPrice>
                    </StyledPriceDiscount>}
                <StyledAdd onClick={(e) => handleAddToCart(e)}>{isAdded ? <img src="/basket-active.png" alt="basket" /> : <img src="/basket.png" alt="basket" />}</StyledAdd>
            </StyledBottom>
        </StyledContainer >
    )
}

export default ProductsItem