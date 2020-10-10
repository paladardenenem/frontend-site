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
    font-size: 50%;
  }
`;

const menuBoxAnimation = keyframes`
    from { opacity: 0; transform: scale(0) }
    to { opacity: 1; transform: scale(1)}
  `;
export const MenuContainer = styled.aside`
  display: grid;
  width: 100%;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  div {
    cursor: pointer;

    display: flex;
    flex-direction: column;
    animation: ${menuBoxAnimation} 1s;
    img {
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
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    div {
      img {
        height: min(10vh, 15vh);
      }
    }
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    div {
      img {
        height: min(9vh, 15vh);
      }
    }
  }
`;
