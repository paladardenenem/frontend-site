import { lighten } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div``;

export const Head = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.danger};
    font-size: 4rem;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.danger};
    margin: 2rem 0;
  }

  ul {
    list-style: none;
    li {
      margin: 1.5rem 0;
    }
    a {
      color: ${props => props.theme.colors.textDark};
      transition: color 0.2s;
      font-size: 1.8rem;
      &:hover {
        color: ${lighten(0.2, '#d62828')};
      }
    }
  }

  > div {
    padding: 2rem;
    background: ${props => props.theme.colors.primary};
    div {
      margin: 1rem 0;
      display: flex;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 425px) {
    width: 100%;

    h2 {
      margin: 0rem 0;
    }
    ul {
      display: flex;
      gap: 1rem;
    }
  }
`;

const menuBoxAnimation = keyframes`
    from { opacity: 0; transform: scale(0) }
    to { opacity: 1; transform: scale(1)}
  `;
export const MenuContainer = styled.aside`
  display: grid;
  width: 80%;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(3, 1fr); //repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  div {
    cursor: pointer;

    align-items: center;
    display: flex;
    flex-direction: column;
    animation: ${menuBoxAnimation} 1s;
    img {
      border-radius: 5%;
      height: min(20vh, 25vh);
    }
    span {
      color: ${props => props.theme.colors.danger};
      font-weight: bold;
      margin: 1rem 0;
    }
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    div {
      img {
        height: 15vh;
      }
    }
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    div {
      img {
        height: 25vh;
        width: 25vh;
      }
    }
  }

  @media (max-width: 321px) {
    div {
      img {
        height: 20vh;
        width: 20vh;
      }
    }
  }
`;
