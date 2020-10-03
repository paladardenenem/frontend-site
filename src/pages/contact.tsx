import React from 'react';

import {
  Container,
  Wrapper,
  ImageContent,
  Content
} from '../styles/pages/Contact';
import contactImg from '../assets/elementos/contato.png';
import Footer from '../components/Footer';
import { Head } from 'next/document';
const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <h1>contatos</h1>
            <div>
              <strong>Atendimento ao cliente e parcerias </strong>
              <span className="active">Débora Almeida </span>
              <span>debora@paladardenenem.com.br </span>
            </div>
            <div>
              <strong>Financeiro </strong>
              <span className="active">Lucas Veloso</span>
              <span>lucas@paladardenenem.com.br</span>
            </div>
            <div>
              <strong>Marketing</strong>
              <span className="active">Fabiane Almeida </span>
              <span>fabiane@paladardenenem.com.br </span>
            </div>
            <div>
              <strong>Outras dúvidas </strong>
              <span>contato@paladardenenem.com.br </span>
            </div>
            <div>
              <strong>Celular ou WhatsApp</strong>
              <span>(32) 98815-0096 </span>
              <span>Juiz de Fora/MG</span>
            </div>
          </Content>
          <ImageContent>
            <img src={contactImg} alt="Contato" />
          </ImageContent>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
