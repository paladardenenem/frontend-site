import React from 'react';
import {
  Wrapper,
  Container,
  Head,
  CategoryContainer,
  MenuContainer
} from '../styles/pages/Cardapio';

import { AiOutlineCheck } from 'react-icons/ai';
// import { Container } from './styles';
import cardapioImg from '../assets/fotos/fotos_cortadas/amarelinha.jpg';
import SEO from '../components/SEO';

interface MenuProps {
  name: string;
  image: string;
  category: string;
}
const Cardapio: React.FC = () => {
  const menu = {};
  return (
    <Wrapper>
      <SEO title="Cardápio" />
      <Head>
        <h1>cardápio</h1>
      </Head>
      <Container>
        <CategoryContainer>
          <h2>categorias</h2>
          <ul>
            <li>
              <a href="">Todos os sabores</a>
            </li>
            <li>
              <a href="">Cardápio Brincadeiras </a>
            </li>
            <li>
              <a href="">Cardápio Caldinhos </a>
            </li>
            <li>
              <a href="">Cardápio etc </a>
            </li>
            <li>
              <a href="">Cardápio etc </a>
            </li>
          </ul>
          <div>
            <p>
              <strong>Papinha congelada com:</strong>
            </p>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Ingredientes naturais </span>
            </div>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Sem sal ou conservantes</span>
            </div>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Embalagem BPA Free </span>
            </div>
            <p>
              É muita <strong>praticidade e amor!</strong>
            </p>
          </div>
        </CategoryContainer>
        <MenuContainer>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
          <div>
            <img src={cardapioImg} alt="" />
            <span>nome</span>
          </div>
        </MenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Cardapio;
