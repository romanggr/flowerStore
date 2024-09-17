import styled from "styled-components"
import Footer from "../ui/Footer"
import FlowersCarousel from "../ui/FlowersCarousel"
import Products from "../ui/Products"
import ShopCarousel from "../ui/ShopCarousel"

const StyledContainer = styled.main`
    width:86vw;
    margin: 2rem auto;


    @media (max-width:768px) {
        width:100vw;
    }
    
`

const Shop = () => {
    return (
        <>
            <StyledContainer>
                <ShopCarousel />
                <FlowersCarousel />
                <Products />
            </StyledContainer>
            <Footer />
        </>
    )
}

export default Shop