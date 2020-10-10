import React from 'react';

import {
  Container,
  FaceBookIcon,
  InstagramIcon,
  YoutubeIcon,
  InfoContainer,
  SocialMediaContainer,
  WorkinfoContainer
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <SocialMediaContainer>
        <span>
          Acompanhe nossas <br /> redes sociais
        </span>
        <div>
          <a href="https://www.facebook.com/paladardenenem">
            <FaceBookIcon />
          </a>
          <a href="https://www.instagram.com/paladardenenem/">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/channel/UC-cpzr1eae5L5Y4uMsXPNpQ">
            <YoutubeIcon />
          </a>
        </div>
      </SocialMediaContainer>
      <WorkinfoContainer>
        <span>
          <strong>Horário de Funcionamento</strong>
        </span>
        <br />
        <span>Segunda a sexta feira de 10h às 20h</span> <br />
        <span>Sábado de 11h as 19h</span>
      </WorkinfoContainer>
      <InfoContainer>
        <span>Juiz de Fora/MG</span> <br />
        <span>CNPJ 37.163.082/0001-03</span> <br />
        <span>Whatsapp (32)98815-6900</span> <br />
        <span>paladardenenem@gmail.com</span>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
