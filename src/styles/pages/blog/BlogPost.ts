import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaFacebookSquare, FaShareAlt } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 60vw;
  margin: 5rem 0;

  h1 {
    margin-bottom: 5rem;
    color: ${props => props.theme.colors.danger};
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
  }
  img {
    width: 77rem;
    height: 40rem;
    margin-bottom: 5rem;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  text-align: justify;
  p {
    font-size: 1.8rem;
    line-height: 24px;
    color: ${props => props.theme.colors.textDark};
    margin: 2rem 0;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PostAuthorData = styled.div`
  span {
    font-weight: bold;
  }
  p {
    font-size: 1.8rem;
    line-height: 24px;
    color: ${props => props.theme.colors.textDark};
  }
`;
export const PostSocialMedia = styled.div``;

export const ClicableField = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const iconsCss = css`
  width: 32px;
  height: 32px;
  margin-right: 5px;
  transition: fill 0.2s;
  &:hover {
    fill: ${props => props.theme.colors.danger};
  }
`;
export const ShareIcon = styled(FaShareAlt)`
  ${iconsCss}
`;
export const FacebookIcon = styled(FaFacebookSquare)`
  ${iconsCss}
`;
export const InstagramIcon = styled(AiOutlineInstagram)`
  ${iconsCss}
`;
export const WhatsappIcon = styled(AiOutlineWhatsApp)`
  ${iconsCss}
`;
export const SeparationLine = styled.div`
  margin: 20px 0;
  border-top: 1px dashed #333;
`;
