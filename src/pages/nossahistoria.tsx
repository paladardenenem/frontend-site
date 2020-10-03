/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from '../components/Footer';

import {
  Container,
  Wrapper,
  ImageContent,
  Content,
  ContainerColumn,
  DepositionsContainer,
  Deposition,
  ArrowLeft,
  ArrowRight
} from '../styles/pages/History';
import coverimg from '../assets/familia.jpeg';
// const depositions = [
//   {
//     text:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti optio alias nostrum doloremque, fugiat perferendis qui voluptatibus. Veritatis adipisci officia incidunt debitis, autem quam rem quidem distinctio, molestiae consequatur illum!',
//     author: 'JohnDoe'
//   },
//   {
//     text:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti optio alias nostrum doloremque, fugiat perferendis qui voluptatibus. Veritatis adipisci officia incidunt debitis, autem quam rem quidem distinctio, molestiae consequatur illum!',
//     author: 'JohnDoe2'
//   },
//   {
//     text:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti optio alias nostrum doloremque, fugiat perferendis qui voluptatibus. Veritatis adipisci officia incidunt debitis, autem quam rem quidem distinctio, molestiae consequatur illum!',
//     author: 'JohnDoe3'
//   }
// ];
const History: React.FC = () => {
  const i = 0;
  return (
    <Wrapper>
      <Container>
        <img src={coverimg} alt="" />
        <div>
          <h1>nossa história</h1>
          <p>
            Sabe aquela história de que um bebê muda tudo? Então... aqui foi
            verdade em todos os sentidos. Além de trazer mais amor para as
            nossas vidas, foi um bebê que fez surgir em nós o desejo de
            empreender.
          </p>
          <p>
            Somos três! Mamãe, papai e titia do João Lucas! Unimos nossas
            habilidades com o propósito de facilitar a vida dos pais que querem
            aproveitar mais o tempo com seus filhos. Porque, vamos combinar... o
            tempo voa e eles crescem muito rápido para ficarmos perdendo horas
            na cozinha.
          </p>
          <p>
            Produzir papinhas saborosas, atrativas e com os nutrientes
            necessários exige tempo e uma pitada de amor. Pensamos em todos os
            detalhes, desde as combinações dos ingredientes e a praticidade de
            preparo, até a facilidade que o neném tem para ingerir esses
            alimentos.
          </p>
          <p>
            Fazemos tudo com amor, como se fosse para o nosso bebê. Afinal, ele
            é o nosso maior degustador!
          </p>
          <p>
            Queremos deixar o dia a dia das mamães e papais mais prático. Ter
            uma papinha do Paladar de Neném no congelador é uma forma de
            aproveitar todos os momentos juntos!
          </p>
        </div>
      </Container>
      <Content>
        <h1>nossos valores</h1>
        <p>
          Nós também somos uma família e temos um bebê em casa. Por isso,
          sabemos da importância da alimentação balanceada e do afeto na vida da
          criança. Com nossos produtos, ajudamos no desenvolvimento do paladar a
          partir da introdução alimentar, após os seis meses de idade. Assim, as
          papinhas naturais congeladas buscam complementar o leite materno, para
          que o neném cresça forte e saudável. Sem se preocupar com o preparo do
          alimento, mamães e papais também podem passar mais tempo com seus
          filhos, curtindo a primeira infância.
        </p>
        <h1>nossos produtos</h1>
        <p>
          As papinhas do Paladar de Neném são feitas com ingredientes naturais
          frescos. As receitas possuem diferentes texturas e não utilizamos sal,
          óleo ou conservantes durante o preparo. O produto é congelado em
          embalagens livres de Bisfenol-A (BPA Free). Na hora da refeição, basta
          aquecer e a comidinha estará pronta para servir.
        </p>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default History;
