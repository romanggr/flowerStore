import styled from "styled-components"
import ProductsItem from "./ProductsItem";
import Filter from "./Filter";

const StyledContainer = styled.div`
    margin: 3rem 1rem 5rem;
    display:flex;
    gap:2rem;
    align-items:flex-start;



    @media (max-width: 768px) {
        margin-top:3rem;
        flex-direction:column;
        align-items:flex-start;
        
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
            <Filter />
            <StyledProducts>
                {productsData.map(item => <ProductsItem key={item.id} id={item.id} discount={item.discount} image={item.image} name={item.name} price={item.price} />)}
            </StyledProducts>
        </StyledContainer >
    )
}

export default Products

