import styled from 'styled-components';
import { lighten } from 'polished';
export const Container = styled.div`
  margin: 4rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 5rem;
  background: #ffde59;
  img {
    max-height: 6vh;
    max-width: 8vw;
    position: absolute;
    z-index: 5;
    right: 95%;
    top: -35%;
  }
  form {
    display: flex;
    justify-content: space-between;

    flex-direction: row;
    span {
      max-width: 160px;
      font-size: 1.4rem;
    }
    input {
      border: 0;
      background: #fff;
      width: 22vw;
      padding: 10px;
    }
    button {
      cursor: pointer;
      background: #d62828;
      color: #fff;
      margin-left: 1rem;
      width: 20%;
      border: 0;
      border-radius: 5%;
      transition: background 0.2s;
      &:hover {
        background: ${lighten(0.2, '#d62828')};
      }
    }
  }

  @media (max-width: 425px) {
    padding: 1rem 1rem;
    max-width: 30rem;

    form {
      input {
        width: 30vw;
      }
      button {
        width: 40%;
      }
    }
  }
`;
