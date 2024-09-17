import styled from "styled-components"

const StyledContainer = styled.div`
    margin-left:-6rem;
    position:relative;
    width: 10vw;
    height: 10vw;
    cursor: pointer;
    
    & img{
        width:100%;
        height:100%;
        border-radius:30%;
    }
    & p{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color:white;
        font-weight:400;
        font-size:1.8vw;
    }

    @media (max-width: 1000px) {
        width: 15vw;
        height: 15vw;

        & p{
            font-size:2.3vw;
        }   
    }



    @media (max-width: 650px) {
        width: 28vw;
        height: 28vw;
        & p{
            font-size:4.3vw;
        }
    }
    /* @media (max-width: 650px) {
        width: 28vw;
        height: 28vw;
        & p{
            font-size:1.2rem;
        }
    } */
`

const CarouselItem = ({ name, image }: { name: string, image: string }) => {
    return (
        <StyledContainer>
            <img src={`/carouselSmall/${image}`} alt="image" />
            <p>{name}</p>
        </StyledContainer>
    )
}

export default CarouselItem