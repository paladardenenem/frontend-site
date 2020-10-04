import styled from 'styled-components';
import { lighten } from 'polished';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface ImageContainerProps {
  imgUrl: string | string[];
}
export const ImageHeaderContainer = styled.div<ImageContainerProps>`
  margin: 10rem 0;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  width: 80%;
  height: 40rem;
  border-radius: 3%;
  display: flex;
  align-items: flex-end;
  padding: 5rem;

  div {
    background: #fff;
    opacity: 0.8;
    height: 40%;
    border-radius: 3%;
    padding: 1rem 5rem;

    h1 {
      -webkit-line-clamp: 1 !important; /* number of lines to show */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 2.5rem;
      color: ${props => props.theme.colors.danger};
    }
    p {
      font-size: 1.4rem;
      margin: 1rem 0;
      -webkit-line-clamp: 2 !important; /* number of lines to show */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      color: ${props => props.theme.colors.danger};
      transition: color 0.2s;
      &:hover {
        color: ${lighten(0.2, '#d62828')};
      }
    }
  }
  @media (max-width: 760px) {
    margin: 5rem 0;

    div {
      h1 {
        font-size: 100%;
      }
      p {
        font-size: 80%;
      }
    }
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 2fr 1fr;
`;

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
`;

export const BlogThemeContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.danger};
    margin-bottom: 5px;
  }
  ul {
    list-style: none;

    li {
      padding: 0.5rem 0;
    }
  }
`;

export const BlogPost = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 0;
  border-top: 1px solid ${props => props.theme.colors.textDark};

  img {
    height: min(20vh, 25vh);
    border-radius: 10%;
  }

  div {
    h2 {
      color: ${props => props.theme.colors.danger};
      font-size: 2rem;
    }
    p {
      margin: 1rem 0;
      font-size: 1.4rem;
      text-align: justify;
      -webkit-line-clamp: 9 !important; /* number of lines to show */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      color: ${props => props.theme.colors.danger};
      transition: color 0.2s;
      &:hover {
        color: ${lighten(0.2, '#d62828')};
      }
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
