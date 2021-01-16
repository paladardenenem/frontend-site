import { GetStaticProps, GetStaticPropsResult } from 'next';
import React, { useCallback, useState, useEffect } from 'react';
import {
  Wrapper,
  Container,
  ImageBlock,
  ContentContainer,
  MiniContentContainer,
  MiniContent,
  ImageMiniContent,
  MiniContentFooter
} from '../../styles/pages/blog/BlogPage';
import { PostOrPage, Tags } from '@tryghost/content-api';
import { getPosts, getTags } from '../../lib/ghost';
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';
import Link from 'next/link';

interface BlogProps {
  blogposts: PostOrPage[];
  blogtags: Tags;
}

export default function Blog({ blogposts, blogtags }: BlogProps) {
  return (
    <Wrapper>
      {blogposts.map(post => (
        <Container key={post.id}>
          <ImageBlock src={post.feature_image}></ImageBlock>
          <ContentContainer>
            <label htmlFor="">Blog</label>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <span>
              <a href="noContent">Leia Mais</a>
            </span>
          </ContentContainer>
        </Container>
      ))}
      <MiniContentContainer>
        {blogposts.map((post, index) => (
          <MiniContent invisible={index <= 2} key={post.id}>
            <ImageMiniContent src={post.feature_image}></ImageMiniContent>
            <div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <MiniContentFooter>
                <span> 11 de janeiro de 2021 </span>
              </MiniContentFooter>
            </div>
          </MiniContent>
        ))}
      </MiniContentContainer>
      <Footer />
      <SEO title="Blog" />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async (): Promise<
  GetStaticPropsResult<BlogProps>
> => {
  const blogposts = await getPosts();
  const blogtags = await getTags();

  return {
    props: {
      blogposts,
      blogtags
    },
    revalidate: 10
  };
};
