/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react';
import {
  Wrapper,
  ImageHeaderContainer,
  Container,
  BlogPost,
  BlogPostContainer,
  BlogThemeContainer,
  AddPostButton
} from '../../styles/pages/blog/BlogPage';
import { AiOutlinePlusCircle } from 'react-icons/ai';
interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  coverimgurl: string;
  slug: string;
  category: string;
}

interface BlogProps {
  blogposts: BlogPostProps[];
  categories: string[];
}

export default function Blog({ blogposts, categories }: BlogProps) {
  return (
    <Wrapper>
      <AddPostButton>
        <AiOutlinePlusCircle size={36} />
      </AddPostButton>
      <ImageHeaderContainer
        imgUrl={blogposts
          .slice(blogposts.length - 1, blogposts.length)
          .map(post => post.coverimgurl)}
      >
        <div>
          <h1>
            {blogposts
              .slice(blogposts.length - 1, blogposts.length)
              .map(post => post.title)}
          </h1>
          <p>
            {blogposts
              .slice(blogposts.length - 1, blogposts.length)
              .map(post => post.content)}
          </p>
          <a href="">leia mais </a>
        </div>
      </ImageHeaderContainer>
      <Container>
        <BlogPostContainer>
          {blogposts.map(post => (
            <BlogPost key={post.id}>
              <img src={post.coverimgurl} alt={post.slug} />
              <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <br />
                <a href="">leia mais </a>
              </div>
            </BlogPost>
          ))}
        </BlogPostContainer>
        <BlogThemeContainer>
          <h1>temas</h1>
          <ul>
            {categories.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </BlogThemeContainer>
      </Container>
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async (): Promise<
  GetStaticPropsResult<BlogProps>
> => {
  const response = await fetch('http://localhost:8080/posts');

  const blogposts: BlogPostProps[] = await response.json();

  const categories: string[] = [];

  blogposts.map(post => {
    categories.push(post.category);
  });

  return {
    props: {
      blogposts,
      categories
    },
    revalidate: 10
  };
};
