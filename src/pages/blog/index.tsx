/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  ImageHeaderContainer,
  Container,
  BlogPost,
  BlogPostContainer,
  BlogThemeContainer
} from '../../styles/pages/blog/BlogPage';

// import { Container } from './styles';

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  coverimgurl: string;
  slug: string;
  categories: string[];
}

interface BlogProps {
  blogposts: BlogPostProps[];
}
export default function Blog() {
  const [blogposts, setBlogPosts] = useState<BlogPostProps[]>([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/posts').then(response => {
      response.json().then(data => {
        setBlogPosts(data);

        data.map(d => {
          setCategories([...categories, d.category]);
          console.log(d.category);
        });
        console.log(categories);
      });
    });
  }, []);
  return (
    <Wrapper>
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
            <li>introdução alimentar </li>
            <li>comportamento </li>
            <li>aleitamento materno </li>
          </ul>
        </BlogThemeContainer>
      </Container>
    </Wrapper>
  );
}
