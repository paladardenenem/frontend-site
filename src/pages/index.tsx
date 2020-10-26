import React from 'react';

import {
  Container,
  Wrapper,
  Hero,
  Divider,
  Content,
  Divisor,
  NewslatterContainer,
  VideoContainer
} from '../styles/pages/Home';
import capaSrc from '../assets/bebe/capa.jpg';
import producaoSrc from '../assets/marca/producao1.jpg';
import elements from '../assets/elementos/legumes.png';
import caldinhosSrc from '../assets/fotos/caldinhos.jpg';
import brincadeirasSrc from '../assets/fotos/fotos_cortadas/brincadeiras.jpg';
import pinturaAmarelaSrc from '../assets/elementos/pintura_amarela.png';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <SEO
        title="Página Inicial"
        description="Paladar de neném, Com nossos produtos, buscamos levar praticidade para a rotina dos pais, que terão mais tempo para aproveitar a primeira infância dos filhos."
      />
      <Container className="image">
        <img src={capaSrc} alt="Joao Lucas" />
        <h1>
          O que tem no <br />
          <strong>congelador</strong> <br />
          pra eu papar
          <br />
          <span>hoje?</span>
        </h1>
      </Container>
      <Hero>
        <div className="container">
          <aside>
            <h1>nossas papinhas</h1>
            <p>
              Com nossos produtos, buscamos levar praticidade para a rotina dos
              pais, que terão mais tempo para aproveitar a primeira infância dos
              filhos. Nossas papinhas são preparadas com ingredientes naturais e
              selecionados, para proporcionar uma alimentação saudável para
              bebês, sem uso de sal ou conservantes.
            </p>
            <Link href="/nossahistoria">
              <a href="">conheça a nossa história </a>
            </Link>
          </aside>
          <img src={producaoSrc} alt="Producao" />
        </div>
      </Hero>
      <Divider>
        <img src={elements} alt="Legumes" />
      </Divider>
      <Hero>
        <Content>
          <h1>conheça nossos cardápios</h1>
          <div className="product-content">
            <img src={caldinhosSrc} alt="caldinhos" />
            <div className="product-info">
              <div className="product-title">
                <img src={pinturaAmarelaSrc} alt="pintura_amarela" />
                <span>caldinhos</span>
              </div>
              <p>
                Os caldos que amamos adaptados para bebês. O sabor e a textura
                agradam a todas as idades, especialmente no início da introdução
                alimentar, quando o bebê ainda está se acostumando a ingerir
                alimentos sólidos.
              </p>
              <Link href="/cardapio">
                <a href="">confira os sabores</a>
              </Link>
            </div>
          </div>
          <div className="product-content reverse">
            <img src={brincadeirasSrc} alt="brincadeiras" />
            <div className="product-info">
              <div className="product-title">
                <img src={pinturaAmarelaSrc} alt="pintura_amarela" />
                <span>brincadeiras</span>
              </div>
              <p>
                A montagem em camadas coloridas permite separar os ingredientes
                no prato, estimulando o paladar do bebê a diferenciar os
                sabores. Já a textura de purê com pequenos pedaços ajuda a
                estimular a mastigação.
              </p>
              <Link href="/cardapio">
                <a href="">confira os sabores</a>
              </Link>
            </div>
          </div>
        </Content>
      </Hero>
      <Divider>
        <Divisor />
      </Divider>
      <NewslatterContainer>
        <NewsletterForm />
      </NewslatterContainer>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=uE4YMJFJfiI"></ReactPlayer>
      </VideoContainer>
      <Footer />
    </Wrapper>
  );
};

export default Home;
