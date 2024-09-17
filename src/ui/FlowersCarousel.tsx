import styled from "styled-components"
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";

const CarouselContainer = styled.div`

`;

const data = [
    {
        name: "Narcissus",
        image: "Narcissus.jpg"
    },
    {
        name: "Anemones",
        image: "Anemones.png"
    },
    {
        name: "Astilbe",
        image: "Astilbe.png"
    },
    {
        name: "Lavenders",
        image: "Lavenders.png"
    },
    {
        name: "Tulips",
        image: "Tulips.png"
    },
    {
        name: "Narcissus",
        image: "Narcissus.jpg"
    },
    {
        name: "Anemones",
        image: "Anemones.png"
    },
    {
        name: "Astilbe",
        image: "Astilbe.png"
    },
    {
        name: "Lavenders",
        image: "Lavenders.png"
    },
    {
        name: "Tulips",
        image: "Tulips.png"
    },

];




const FlowersCarousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        swipeToSlide: true,
        arrows: false,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };
    return (
        <CarouselContainer>
            <Slider {...settings}>
                {data.map((item, i) => <CarouselItem key={i} image={item.image} name={item.name} />)}
            </Slider>
        </CarouselContainer>
    )
}

export default FlowersCarousel