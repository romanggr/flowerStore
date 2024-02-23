import styled from "styled-components"
import BlogItem from "../ui/BlogItem";

const StyledContainer = styled.main`
    margin:4rem auto;
    width:85vw;
    display:flex;
    flex-wrap:wrap;
    gap:5rem;
`

const data = [
    {
        title: "Flower Fairyland: Your Garden Inside!",
        content: "Discover the story behind each flower we offer in our store. Learn about their unique history and legendary properties. Our flowers are not just decorations; they are real stories that add warmth and beauty to your home.",
        image: "flower.jpg"
    },
    {
        title: "Gardening Tips for All Seasons",
        content: "Explore our expert gardening tips for every season. Whether you're a seasoned gardener or just starting, we have valuable insights to make your garden flourish throughout the year.",
        image: "flower.jpg"
    },
    {
        title: "The Art of Floral Arrangements",
        content: "Learn the art of creating stunning floral arrangements that can transform any space. Discover tips on color combinations, flower pairings, and arrangement techniques to make your own beautiful bouquets.",
        image: "flower.jpg"
    },
    {
        title: "Indoor Plants: A Breath of Fresh Air",
        content: "Bring the outdoors in with our guide to indoor plants. Explore a variety of houseplants that not only enhance your home decor but also purify the air. Embrace the beauty and benefits of indoor greenery.",
        image: "flower.jpg"
    },
    {
        title: "Flower Fairyland: Your Garden Inside!",
        content: "Discover the story behind each flower we offer in our store. Learn about their unique history and legendary properties. Our flowers are not just decorations; they are real stories that add warmth and beauty to your home.",
        image: "flower.jpg"
    },
    {
        title: "Gardening Tips for All Seasons",
        content: "Explore our expert gardening tips for every season. Whether you're a seasoned gardener or just starting, we have valuable insights to make your garden flourish throughout the year.",
        image: "flower.jpg"
    },
    {
        title: "The Art of Floral Arrangements",
        content: "Learn the art of creating stunning floral arrangements that can transform any space. Discover tips on color combinations, flower pairings, and arrangement techniques to make your own beautiful bouquets.",
        image: "flower.jpg"
    },
    {
        title: "Indoor Plants: A Breath of Fresh Air",
        content: "Bring the outdoors in with our guide to indoor plants. Explore a variety of houseplants that not only enhance your home decor but also purify the air. Embrace the beauty and benefits of indoor greenery.",
        image: "flower.jpg"
    }
];

const Blog = () => {
    return (
        <StyledContainer>
            {data.map((item, i) => <BlogItem content={item.content} image={item.image} title={item.title} key={i} />)}
        </StyledContainer>
    )
}

export default Blog