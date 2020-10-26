import styled, { keyframes, css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
`;

export const Container = styled.div`
  margin-top: 10vh;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
  img {
    max-height: 80vh;
  }
  div {
    max-width: 38vw;

    h1 {
      color: ${props => props.theme.colors.danger};
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
    p {
      color: ${props => props.theme.colors.textDark};
      font-size: 1.4rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 768px) {
    img {
      max-height: 50rem;
      width: auto;
    }
    div {
      p {
        margin-bottom: 1rem;
      }
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;

    div {
      margin-top: 3rem;
      max-width: 80vw;
    }
  }
`;
export const Content = styled.div`
  margin-top: 5rem;
  padding: 0 15rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${props => props.theme.colors.danger};
    font-size: 2.8rem;
    margin-bottom: 2rem;
    text-align: left;
  }
  p {
    color: ${props => props.theme.colors.textDark};
    font-size: 1.4rem;
    margin-bottom: 3rem;
    max-width: 100rem;
  }
  p + h1 {
    margin-top: 5rem;
  }

  @media (max-width: 425px) {
    padding: 0 3rem;
  }
`;
export const ContainerColumn = styled.div``;

export const ImageContent = styled.div``;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);

  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`;

export const DepositionsContainer = styled.div`
  width: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

export const Deposition = styled.div``;

const arrowIconsCss = css`
  height: 30px;
  width: 30px;
  fill: ${props => props.theme.colors.danger};
`;

export const ArrowLeft = styled(FaChevronLeft)`
  ${arrowIconsCss}
  margin-right: 20px;
`;

export const ArrowRight = styled(FaChevronRight)`
  ${arrowIconsCss}
`;
