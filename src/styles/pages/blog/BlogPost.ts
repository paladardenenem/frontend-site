import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
  margin: 5rem 0;

  h1 {
    margin-bottom: 5rem;
    color: ${props => props.theme.colors.danger};
    font-size: 3.5rem;
    font-weight: 800;
  }
  img {
    width: 80rem;
    height: 40rem;
    margin-bottom: 5rem;
  }

`;

export const Content = styled.div`
  text-align: justify;
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${props => props.theme.colors.textDark};
    margin: 2rem 0;
  }
`;
