import styled from "styled-components"

const StyledContainer = styled.div`
    width:18rem;
    margin:20vh auto;

    & p{
        text-align:center;
        font-size:1.3rem;
        font-weight:500;
    }

    & img{
        width:100%;
    }

    @media (max-width: 480px) {
        width:12rem;
    }
`

const ErrorPage = ({ content }: { content: string }) => {
    return (
        <StyledContainer>
            <img src="/error.png" alt="error" />
            <p>{content}</p>
        </StyledContainer>
    )
}

export default ErrorPage