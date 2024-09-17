import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components'

const Container = styled.div`
    display:grid;
    grid-template-columns:auto 1fr;
    gap:1rem;

    &>img{
        width:7rem;
        height:8rem;
        border-radius:0.5rem;
    }

    
`

const TextContent = styled.div`
    width:100%;
    display:grid;
    grid-template-rows: 1fr 1.5rem 2.5rem;
    justify-items:end;

    &>h3{
        font-size:1.2rem;
        font-weight:600;
    }
    
`

const Heading = styled.div`
    font-size:1rem;
    font-weight:600;
    text-align:end;
    

    @media (max-width: 600px) {
        justify-self:start;
        text-align:start;
        
    }
`


const ChangeQuantity = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;


    &>button {
      border: none;
      padding: 0.5rem 0.5rem 0.3rem 0.5rem;
      border-radius: 0.7rem;
      transition: transform 0.2s ease;
      font-size:0.8rem;
      &:hover {
        transform: scale(1.2);
      }
    }
`

const IncreaseBtn = styled.button`
  background-color: var(--color--pink);
  color: white;
`;

const DecreaseBtn = styled.button`
  background-color: transparent;
  color: var(--color--pink);
`;




interface props {
    item: {
        image: string;
        name: string;
        price: number;
        quantity: number;
        id: number;
    },
}

const BasketItem = ({ item }: props) => {
    const [count, setCount] = useState(item.quantity)
    return (
        <Container>
            <img src={`/${item.image}`} alt="image" />

            <TextContent>
                <Heading>
                    {item.name}
                </Heading>
                <h3>${item.price}</h3>
                <ChangeQuantity>
                    <DecreaseBtn onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}>
                        <FaMinus />
                    </DecreaseBtn>
                    <p>{count}</p>
                    <IncreaseBtn onClick={() => setCount((count) => count + 1)}>
                        <FaPlus />
                    </IncreaseBtn>
                </ChangeQuantity>
            </TextContent>
        </Container>
    )
}

export default BasketItem