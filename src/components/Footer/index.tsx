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
          <a href="">
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
        <span>Sábado e Domingo de 11h as 19h</span>
      </WorkinfoContainer>
      <InfoContainer>
        <span>Juiz de Fora/MG</span> <br />
        <span>CNPJ 00000000000000</span> <br />
        <span>Whatsapp 6900-51889 )23</span> <br />
        <span>moc.liamg@menenedradalap</span>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
