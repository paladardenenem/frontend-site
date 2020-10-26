import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  button.rec.rec-arrow.rec {
    background-color: transparent;
    box-shadow: none;
    color: ${props => props.theme.colors.danger};
  }

  button.rec.rec-arrow.rec:hover,
  button.rec.rec-arrow.rec:active,
  button.rec.rec-arrow.rec:focus {
    box-shadow: none;
    background: ${props => props.theme.colors.danger};
    color: #fff;
  }
  div.rec {
    display: flex;
    min-width: 20vw;
    min-height: 15vh;
  }

  @media (max-width: 766px) {
    div.rec {
      min-width: 40vw;
    }
  }

  @media (max-width: 375px) {
    div.rec {
      min-width: 47vw;
    }
  }
  @media (max-width: 325px) {
    div.rec {
      min-width: 30vw;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.4rem;
  font-family: 'Montserrat';
  text-align: right;
  span {
    margin-top: 2rem;
    text-align: justify;

    height: 7rem;
  }

  .signature {
    position: absolute;
    bottom: -40%;
    right: 0;
  }
  @media (max-width: 325px) {
    font-size: 1.2rem;

    .signature {
      position: absolute;
      right: 0;
    }
  }
`;

export const StyledCarrousel = styled(Carousel)`
  /* button {
    background: transparent;
    color: ${props =>
    props.theme.colors
      .danger};
    border: none !important;
    box-shadow: none !important;

    &:hover,
    &:focus {
    }
  } */
`;
