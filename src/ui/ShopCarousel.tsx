import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselContainer = styled.div`
  position:relative;
  width: 100%;
  margin:0 auto 8rem;
  border-radius:3rem;
`;

const ImageContainer = styled.div`
      border-radius:3rem;
      overflow:hidden;
      height:40vw;

      & img{
        width:105%;
        height:40vw;
        margin-bottom:1rem;
      }

    @media (max-width: 768px) {
      border-radius:0;
      height:25rem;

      & img{
        object-fit: cover;
        object-position: 18% 0;
        width:120vw;
        height:25rem;
        margin-bottom:1rem;
      }
    }

`

const StyledPrev = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  background-color: white;
  padding: 1.5rem;
  border-radius: 50%;
  top: 50%;
  left: 10px; 
  transform: translate(-50%, -50%); 

  & svg {
    font-size: 2rem;
    color: var(--color--pink);
  }
`;

const StyledNext = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  background-color: white;
  padding: 1.5rem;
  border-radius: 50%;
  top: 50%;
  right: 10px; 
  transform: translate(50%, -50%);

  & svg {
    font-size: 2rem;
    color: var(--color--pink);
  }
`;


function SampleNextArrow(props: any) {
  return (
    <StyledNext onClick={props.onClick}><GrNext /></StyledNext>
  );
}

function SamplePrevArrow(props: any) {
  return (
    <StyledPrev onClick={props.onClick}><GrPrevious /></StyledPrev >
  );
}

const images = [
  "slider-image.png",
  "slider-image.png",
  "slider-image.png",
  "slider-image.png",
]

const ShopCarousel = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    fade: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
    ]
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((item, i) =>
          <div key={i}>
            <div>
              <ImageContainer>
                <img src={`/carouselBig/${item}`} alt="image" />
              </ImageContainer>
            </div>
          </div>)}
      </Slider>
    </CarouselContainer>
  );

}

export default ShopCarousel