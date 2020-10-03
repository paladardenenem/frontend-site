import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff775;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;

    margin: auto;
  }

  img {
    width: 150px;
    margin-left: max(10vw, max(5px, 2rem));
    padding: 15px 0;
  }

  nav ul {
    display: flex;
  }

  nav ul li {
    list-style: none;
  }

  nav ul li a {
    text-decoration: none;
    color: black;
    text-transform: lowercase;
    font-size: 1.6rem;

    padding: 2.4rem;
    transition: all 250ms linear 0s;
  }

  nav ul li a:hover {
    color: #d62828;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #d62828;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }

    /* fullscreen */
    .menu-section.on {
      position: absolute;
      top: 14px;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: #fff775;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-section.on nav {
      display: block;
    }

    .menu-section.on .menu-toggle {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .menu-section.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
      opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
      margin-top: -8rem;
      text-align: center;
      display: block;
    }

    .menu-section.on nav ul a {
      transition-duration: 0.5s;
      font-size: 2rem;
      line-height: 3rem;
      display: block;
    }

    @media (max-width: 430px) {
      #logo {
        height: 25%;
        width: 25%;
      }
    }
  }
`;
