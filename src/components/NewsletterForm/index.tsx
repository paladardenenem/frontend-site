import React from 'react';

import { Container } from './styles';
import newsletterIcon from '../../assets/elementos/newsletter.png';
const NewsletterForm: React.FC = () => {
  return (
    <Container>
      <img src={newsletterIcon} alt="newsletter" />
      <form>
        <span>inscreva-se na nossa newsletter</span>
        <input type="text" placeholder="digite seu melhor e-mail" />
        <button type="button">Enviar</button>
      </form>
    </Container>
  );
};

export default NewsletterForm;
