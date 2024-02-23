import { firstLetterToUpperCase } from "../helpers/helpers"
import { IOrderItem } from "../helpers/types"
import styled, { css } from 'styled-components'
import OrderCarousel from "./OrderCarousel"


const StyledContainer = styled.div`
    margin:0;
    width:100%;
    height:20rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin:0 auto;
    @media (max-width: 1400px) {
        width:100%;
        
    }

    /* @media (max-width: 764px) {
        width:60vw;
        margin:0 auto;
    } */

    /* @media (max-width: 450px) {
        width:80vw;
    } */
`

const StyledTop = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;

    &>p{
        font-size:1.2rem;
        font-weight:700;
    }

`

const StyledBottom = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    
    &>p{
        
        padding-left:1rem;
    }

    &>h3{
        display:flex;
        justify-content:end;
        font-weight:700;
        font-size:1.2rem;
        padding-right:1rem;
    }

   & button{
    grid-column: span 2;
    width:100%;
    padding:0.6rem 1rem;
    font-size:1.2rem;
    color:white;
    border-radius:0.7rem;
   }
`

const StyledButton = styled.button<{ status: "processing" | "completed" | "canceled" }>`
    // processing
    ${(props) =>
        props.status === "processing" &&
        css`
            background-color:#111;
            border:3px solid #111;
    `}

    // completed
    ${(props) =>
        props.status === "completed" &&
        css`
            background-color:#48CD45;
            border:3px solid #48CD45;
    `}

    // canceled
    ${(props) =>
        props.status === "canceled" &&
        css`
            background-color:red;
            border:3px solid red;
    `}
`

const OrderItem = ({ item }: { item: IOrderItem }) => {
    const totalPrice = item.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    return (
        <StyledContainer>
            <StyledTop>
                <p>Order #{item.id}</p>
                <p>{item.date}</p>
            </StyledTop>
            <OrderCarousel items={item.products} />
            <StyledBottom>
                <p>Total price</p>
                <h3>${totalPrice}</h3>
                <StyledButton status={item.status}>{firstLetterToUpperCase(item.status)}</StyledButton>
            </StyledBottom>
        </StyledContainer>
    )
}

export default OrderItem