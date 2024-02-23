import styled from "styled-components"
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";

const CarouselContainer = styled.div`
  padding: 0.5rem 0;
  height: 9rem;

  @media (max-width:768px) {
    margin:-3rem 0 0;
  }
 
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
        slidesToShow: 8,
        swipeToSlide: true,
        arrows: false,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 565,
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