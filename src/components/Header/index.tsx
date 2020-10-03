import React, { useRef, useState } from 'react';
import { Container } from './styles';
import Link from 'next/link';

import logosrc from '../../assets/marca/letra_logo_transparente.png';
const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const handdleToggle = () => {
    menuRef.current.classList.toggle('on');
    document.body.style.overflow = show ? 'hidden' : 'initial';
    setShow(!show);
  };
  return (
    <Container>
      <div className="container">
        <img src={logosrc} alt="Paladar de Nenem" id="logo" />
        <div className="menu-section" onClick={handdleToggle} ref={menuRef}>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>início</a>
                </Link>
              </li>
              <li>
                <Link href="/nossahistoria">
                  <a href="">nossa história</a>
                </Link>
              </li>
              <li>
                <a href="">cardápio</a>
              </li>
              <li>
                <a href="">loja virtual</a>
              </li>
              <li>
                <a href="">blog</a>
              </li>
              <li>
                <Link href="/contact">
                  <a href="">contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
