import styled from "styled-components"

const StyledContainer = styled.div`
    position:relative;
    width: clamp(4rem, 8rem, 10rem);
    height: clamp(2rem, 8rem, 10rem);
    
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
        font-weight:600;
        font-size:1.2rem;
    }

    @media (max-width: 440px) {
        width:7rem;
        height:7rem;

        & p{
            font-weight:400;
            font-size:1rem;
        }
    }

    @media (max-width: 500px) {
        width:6rem;
        height:6rem;
    
    }
   
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