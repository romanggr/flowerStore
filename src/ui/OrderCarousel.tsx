import styled from "styled-components";
import { IOrderCarousel } from "../helpers/types";

const CarouselContainer = styled.div`
    overflow:auto;
    height:9rem;
    display:flex;
    flex-direction:column;
    gap:2rem;

    &::-webkit-scrollbar {
    width: 7px; 
    }
  &::-webkit-scrollbar-track {
    background: var(--color--pink-light); 
    border-radius:1rem;
    }
  &::-webkit-scrollbar-thumb {
    background: var(--color--pink);
    border-radius: 10px; 
    }

    & img{
        width:5.5rem;
        border-radius:1rem;
    }
`

const CarouselItem = styled.div`
    display:flex;
    gap:1rem;
`

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    
    &>h3{
        font-weight:600;
        font-size:1rem;    
    }

    &>div{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:0.1rem;

        &>p{
            font-weight:600;
        }
    }
`

const Right = styled.p`
    display:flex;
    justify-content:flex-end;
    margin-right:1rem;
`



const OrderCarousel = ({ items }: { items: IOrderCarousel[] }) => {


    return (
        <CarouselContainer>
            {items.map((item, i) =>
                <CarouselItem key={i}>
                    <img src={`/${item.image}`} alt="image" />
                    <TextContainer>
                        <h3>{item.title}</h3>
                        <div>
                            <p>Price:</p>
                            <Right>${item.price}</Right>
                            <p>Count:</p>
                            <Right>{item.quantity}</Right>
                        </div>
                    </TextContainer>
                </CarouselItem>)}
        </CarouselContainer>
    );

}

export default OrderCarousel