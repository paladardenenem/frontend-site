/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Container, Item, StyledCarrousel } from './styles';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];
function ReactCarousel() {
  return (
    <Container>
      <h1>depoimentos</h1>
      <Carousel
        focusOnSelect={false}
        pagination={false}
        breakPoints={breakPoints}
      >
        <Item>
          <span>
            "A Maria devorou a papinha em dez minutos! Até eu queria comer. Que
            delícia!"
          </span>
          <span className="signature">Carla A.</span>
        </Item>
        <Item>
          <span>
            "O Benício comeu tudinho e adorou. A montagem da papinha é linda!"
          </span>
          <span className="signature">Aline F.</span>
        </Item>
        <Item>
          <span>
            "A papinha é super saborosa. Dá para sentir o carinho que colocam em
            cada detalhe!"
          </span>
          <span className="signature"> Caroline R.</span>
        </Item>
        <Item>
          <span>
            "O Matheus comeu a papinha e adorou! É muito bem feita e gostosa!"
          </span>
          <span className="signature">Cynthia R.</span>
        </Item>
      </Carousel>
    </Container>
  );
}

export default ReactCarousel;
