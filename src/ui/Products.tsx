import styled from "styled-components"
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import ProductsItem from "./ProductsItem";

const StyledContainer = styled.div`
    margin: 5rem 1rem;
    display:flex;
    gap:2rem;
    align-items:flex-start;

    @media (max-width: 768px) {
        margin-top:3rem;
        flex-direction:column;
        align-items:center;
    }
`

const StyledFilter = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    
    &>button{
        color: var(--color--white);
        transition:0.2s ease;
    }

    @media (max-width: 768px) {
        flex-direction:row;
    }
`

const FilterBtn = styled.button`
    background-color:var(--color--pink);
    border:3px solid var(--color--pink);
    border-radius:40%;
    font-size:2rem;
    padding:0.8rem 0.8rem 0.5rem;
    
    
    &:hover{
        background-color:var(--color--pink-light);
        color:var(--color--pink);
           
        }

    @media (max-width:550px) {
    padding:0.5rem 0.5rem 0.2rem;
       
    }
`
const CloseBtn = styled.button`
    padding:0.3rem 0.4rem;
    border:3px solid #D21C2E;
    background-color:#D21C2E;
    border-radius:50%;
    font-size: 1rem;

    &:hover{
        background-color:#d21c2e3e;
        color:#D21C2E;
        }

`

const StyledProducts = styled.div`
    display:flex;
    gap:4rem;
    flex-wrap:wrap;
    justify-content:center;

    @media (max-width:1024px) {
        gap:2rem;
    }

    
`
const productsData = [
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 29.99, discount: 15, id: 1 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 49.99, discount: null, id: 2 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 19.99, discount: 2, id: 3 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 39.99, discount: 8, id: 4 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 59.99, discount: null, id: 5 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 24.99, discount: 3, id: 6 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 34.99, discount: null, id: 7 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 44.99, discount: 6, id: 8 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 54.99, discount: 10, id: 9 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 14.99, discount: null, id: 10 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 69.99, discount: 7, id: 11 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 19.99, discount: null, id: 12 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 29.99, discount: 4, id: 13 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 39.99, discount: null, id: 14 },
    { image: "product.png", name: "A thousand arrows of the Cupid", price: 49.99, discount: 12, id: 15 },
];




const Products = () => {
    return (
        <StyledContainer>
            <StyledFilter>
                <FilterBtn>
                    <CiFilter />
                </FilterBtn>
                <CloseBtn>
                    <IoMdClose />
                </CloseBtn>
            </StyledFilter>
            <StyledProducts>
                {productsData.map(item => <ProductsItem key={item.id} id={item.id} discount={item.discount} image={item.image} name={item.name} price={item.price} />)}
            </StyledProducts>
        </StyledContainer>
    )
}

export default Products