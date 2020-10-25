import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5rem;
  gap: 5rem;
  align-items: center;
  position: relative;

  > button {
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  aside {
    img {
      max-height: 200px;
      height: 100%;
      border-radius: 5%;
    }
  }

  section {
    max-width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;
    h2 {
      color: ${props => props.theme.colors.danger};
    }
    p {
      text-align: justify;
      padding: 1rem 0;
      font-size: 1.4rem;
    }
    button {
      cursor: pointer;
      margin-top: 1rem;
      width: 40%;
      height: 4rem;
      font-family: 'Montserrat';
      font-weight: bold;
      color: #fff;

      background: ${props => props.theme.colors.danger};
      border: 0;
    }
  }

  @media (max-width: 766px) {
    flex-direction: column;

    section {
      max-width: 56vw;

      p {
        font-size: 1.5rem;
      }
    }
  }
`;
