import styled from "styled-components"

const StyledSpinnerContainer = styled.div`
  width:100%;
  height:70vh;
  display:flex;
  align-items:center;
  justify-content:center;
`

const StyledSpinner = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: var(--color--pink) var(--color--pink) transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent var(--color--pink) var(--color--pink);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }

  &::before {
    width: 52px;
    height: 52px;
    border-color: var(--color--pink) var(--color--pink) transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

const Spinner = () => {
    return (
        <StyledSpinnerContainer>
            <StyledSpinner />
        </StyledSpinnerContainer>
    )
}

export default Spinner