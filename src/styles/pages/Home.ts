import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  h1 {
    position: absolute;
    z-index: 5;
    top: 10%;
    left: 12%;
    font-size: 4.6rem;
    color: #50514f;
    font-weight: 500;

    strong {
      font-weight: 800;
    }
    span {
      color: #d62828;
      font-weight: 800;
    }
  }
  @media (max-width: 430px) {
    h1 {
      top: 14%;
      left: 8%;
      font-size: 1.4rem;
    }
  }
`;

export const Hero = styled.section`
  margin: 20px 0;

  aside h1 {
    color: #d62828;
    font-size: 2rem;
    line-height: 1rem;
    margin: 10px 0px 0px;
    font-weight: bold;
  }

  aside p {
    color: #50514f;
    font-size: 1.4rem;
    max-width: 23rem;
    margin: 10px 0px 5px;
  }

  aside a {
    color: #d62828;
    font-weight: bold;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    img {
      max-width: 35rem;
      padding: 15px 0;
    }
  }

  @media (max-width: 425px) {
    div.container {
      img {
        margin-top: 2rem;
        max-width: 32rem;
      }
    }
    aside {
      p {
        max-width: 35rem;
      }
    }
  }
`;

export const Divider = styled.section`
  display: flex;
  justify-content: center;
  img {
    max-height: 15vh;
    max-width: 15vw;
  }
`;
export const Divisor = styled.div`
  height: 2px;
  width: 80vw;
  background: #fcdf58;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #d62828;
    font-weight: bold;
    font-size: 3.2rem;
  }
  .product-content {
    margin: 6rem 0;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-areas: 'one' 'two';
    max-width: 100%;
    position: relative;
    padding: 0 5rem;

    &.reverse .product-info {
      grid-row-start: 1;
      text-align: right;
      .product-title span {
        right: 13%;
      }
    }
    img {
      grid-area: 'one';
      max-width: 22rem;
    }
    .product-info {
      grid-area: 'two';
      p {
        max-width: 39rem;
        margin: 1.9rem 0;
        font-size: 1.4rem;
        color: #50514f;
      }
      a {
        color: #d62828;
        text-decoration: none;
        font-weight: 700;
      }
      .product-title {
        position: relative;
        span {
          position: absolute;
          color: #d62828;
          font-weight: 700;
          font-size: 2.2rem;
          top: 13%;
          left: 10%;
        }
      }
    }
    @media (max-width: 425px) {
      & {
        padding: 0 5rem;

        grid-template-columns: 1fr;

        > img {
          margin: 2rem;
        }
      }
    }
  }
`;

export const NewslatterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
