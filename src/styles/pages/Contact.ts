import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;

export const WrapperColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ImageContent = styled.div`
  margin-left: 15rem;

  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 725px) {
    display: none;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromRight} 0.5s;
  h1 {
    color: ${props => props.theme.colors.danger};
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    strong {
      font-weight: bolder;
    }

    span {
      margin-top: 0.5vh;
      color: ${props => props.theme.colors.textDark};

      &.active {
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`;
