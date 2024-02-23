import styled from "styled-components"
import { IBlogItem } from "../helpers/types"

const StyledItem = styled.div`
    width:38vw;
    display:flex;
    gap:2rem;

    &>div{
        display:flex;
        flex-direction:column;
        gap:1rem;
    }

    & img{
        width:12rem;
        height:12rem;
    }

    & h2{
        font-weight:600;
        font-size:1.5rem;
    }

    @media (max-width: 1024px) {
        width:70vw;
        margin:0 auto;

       
    }

    @media (max-width: 768px) {
        width:80vw;
        margin:0 auto;

        & h2{
        font-weight:600;
        font-size:1rem;
    }
    & p {
        font-size:0.7rem;
    }
    & img{
        width:9rem;
        height:9rem;
    }
    }
`

const BlogItem = ({ content, image, title }: IBlogItem) => {
    return (
        <StyledItem>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <img src={`./${image}`} alt="image" />
        </StyledItem>
    )
}

export default BlogItem