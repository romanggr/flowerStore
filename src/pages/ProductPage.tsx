import styled from "styled-components";
import { IProduct } from "../helpers/types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6"
import { useState } from "react";

const StyledContainer = styled.div`
  margin: 3rem 7rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  height: 70vh;

  & img {
    height: 100%;
    max-width: 40vw;
    
  }

  &>div {
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }


  @media (min-width: 1500px) {
    & p {
        font-size:3.5rem;
    }
  }

  @media (max-width: 900px) {
    margin: 2rem 3rem;
    height: 60vh;
  }

  @media (max-width: 750px) {
  margin:2rem 1rem;


    &>div{
      gap: 2rem;
    }

    & img{
      width: 15rem;
      height:17rem;
      max-width: 100vw;
    }
  }

  @media (max-width: 500px) {
    width: 100vw;
    height: auto;
    margin: 2rem auto;
    flex-direction: column;
    

    & img {
      width: 30rem;
      max-width: 100vw;
      height: auto;
      margin: 0 0.5rem;
      
    }
  }
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  

  &>p {
    font-size: 2.4rem;
    font-weight: 600;

  }

    @media (max-width: 900px) {
    & p {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 750px) {
    &>p {
    font-size: 1.2rem;
    margin-top:0.4rem;
  
  }
    } 

  @media (max-width: 500px) {
    width: 100vw;
    margin:0 1rem;
    & > p {
        font-size:2.2rem;
        font-weight:700;
    }
  }
  
`;

const StyledBottom = styled.div`
  width: 35vw;

  & > h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

    @media (min-width: 1500px) {
    & p {
        font-size:1.5rem;
        line-height:1.8rem;
    }

    & h2 {
        font-size:3rem;

    }
    }

    @media (max-width: 750px) {
    width:42vw;
    & h2 {
    font-size: 1.2rem;

    }

    & p {
    font-size: 0.7rem;
    font-weight: 400;
    line-height: normal;
    }
    }

    @media (max-width: 500px) {
    width: 100vw;
    margin: 0 1rem 5rem;

    & > h2{
        margin:0 0 0.5rem;
    }

    & > p{
        font-size:0.8rem;
    }
    }
 
`;

const StyledOperations = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-end;

    & > p {
      font-size: 1.5rem;
      font-weight: 600;
    }

    & > button {
      border: none;
      padding: 0.5rem 0.5rem 0 0.5rem;
      border-radius: 1rem;
      font-size: 1.5rem;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 750px) {
    &>div{
      & > button {
        font-size:1rem;
        padding: 0.3rem 0.3rem 0 0.3rem;
        
      }
    }
  }
  

  @media (max-width: 500px) {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffffd5;
    padding: 1rem ;
    border-radius: 1.5rem 1.5rem 0 0;
    width: 100%;
    
    height:6rem;
    justify-content:center;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const IncreaseBtn = styled.button`
  background-color: var(--color--pink);
  color: white;
  font-size: 0.8rem;

  
`;

const DecreaseBtn = styled.button`
  background-color: transparent;
  color: var(--color--pink);
  font-size: 0.8rem;
`;

const StyledBtn = styled.button`
  border: 2px solid var(--color--pink);
  background-color: var(--color--pink);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: white;
    color: var(--color--pink);
  }

  & svg {
    font-size: 1.2rem;
  }

  @media (max-width: 750px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
   
  }

  @media (max-width: 500px) {
    width:40vw;
    font-size: 1rem;
    order:2;
  }
`;

const product: IProduct = {
  name: "Pink Embrace Bouquet",
  inBasket: false,
  image: "/rose.png",
  price: 29.99,
  discount: 10,
  description: "Step into a world of beauty with our 'Pink Embrace bouquet. Elegant and dreamy, it features carefully selected pink roses symbolizing love. Each rose radiates romance, complemented by sweet fragrance and gentle green leaves.It's an expression of deep love. Perfect for expressing gratitude or cherishing moments of happiness."
}

const ProductPage = () => {
  const [count, setCount] = useState<number>(1);
  const newPrice =
    (product.discount !== null && product.discount >= 0
      ? Math.round(product.price - (product.price * product.discount) / 100)
      : product.price
    ).toString() + ",00";

  return (
    <StyledContainer>
      <img src={product.image} alt="product_image" />
      <div>
        <StyledTop>
          <p>$ {newPrice}</p>
          <StyledOperations>
            <StyledBtn>
              Add to cart <FaBasketShopping />
            </StyledBtn>
            <div>
              <DecreaseBtn onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}>
                <FaMinus />
              </DecreaseBtn>
              <p>{count}</p>
              <IncreaseBtn onClick={() => setCount((count) => count + 1)}>
                <FaPlus />
              </IncreaseBtn>
            </div>
          </StyledOperations>
        </StyledTop>
        <StyledBottom>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </StyledBottom>
      </div>
    </StyledContainer>
  );
};

export default ProductPage;
