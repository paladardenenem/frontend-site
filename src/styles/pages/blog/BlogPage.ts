import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.div`
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1002px) {
    flex-direction: column;
  }

  @media (max-width: 666px) {
    display: none;
  }
`;

export const ImageBlock = styled.img`
  width: 601.98px;
  height: 603px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 1002px) {
    width: 512px;
  }
`;
export const ContentContainer = styled.div`
  width: 512px;
  height: 503px;
  margin-left: -12rem;
  z-index: 5;

  background: #ffffff;
  border: 1px solid #eee;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0 5rem;
  gap: 1rem;

  label {
    color: ${props => props.theme.colors.danger};
  }
  h1 {
    color: ${props => props.theme.colors.danger};
  }
  p {
    text-align: justify;
    font-family: 'Montserrat';

    font-size: 14px;
    line-height: 17px;
    color: #50514f;
  }
  span,
  a {
    color: ${props => props.theme.colors.danger};
  }

  @media (max-width: 1002px) {
    margin-left: 0;
  }
`;

export const MiniContentContainer = styled.div`
  margin: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  @media (max-width: 1002px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 666px) {
    grid-template-columns: 1fr;
  }
`;

interface MiniContentProps {
  invisible?: boolean;
}
export const MiniContent = styled.div<MiniContentProps>`
  cursor: pointer;
  max-width: 314px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: ${props => (props.invisible ? 'none' : '')};
  > div {
    h2 {
      color: ${props => props.theme.colors.danger};
    }
    p {
      font-size: 14px;
      color: #50514f;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 13; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    gap: 1rem;
    display: flex;
    flex-direction: column;
    border: 2px solid #eee;
    padding: 2rem;
    height: 430px;
    position: relative;

    border-bottom: 1px dashed #eee;
  }

  @media (max-width: 666px) {
    display: block;
  }
`;
export const ImageMiniContent = styled.img`
  width: 314px;
  height: 237px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;
export const MiniContentFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
`;
