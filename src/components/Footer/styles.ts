import styled, { css } from 'styled-components';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { lighten } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  gap: 20px;
  justify-content: space-between;
  justify-items: center;
  font-size: 0.8em;

  top: 100%;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  min-height: 8rem;
  padding: 4rem;
  span {
    color: ${props => props.theme.colors.textDark};
    font-family: 'Montserrat', sans-serif;
  }

  div {
    max-width: 25rem;
  }

  @media (max-width: 500px) {
    font-size: 60%;
    grid-template-columns: 1fr 1fr;
  }
`;

const iconsCss = css`
  max-height: 36px;
  max-width: 36px;
  height: 20%;
  width: 20%;
  margin: 10px 10px 0 0;
  &:hover {
    fill: ${lighten(0.1, '#d62828')};
  }
  fill: ${props => props.theme.colors.danger};
`;
export const FaceBookIcon = styled(FaFacebookSquare)`
  ${iconsCss}
`;

export const InstagramIcon = styled(FaInstagram)`
  ${iconsCss}
`;

export const YoutubeIcon = styled(FaYoutube)`
  ${iconsCss}
`;

export const InfoContainer = styled.div`
  text-align: right;
  @media (max-width: 500px) {
    text-align: justify;
  }
`;

export const SocialMediaContainer = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const WorkinfoContainer = styled.div`
  @media (max-width: 500px) {
    text-align: left;
  }
`;
