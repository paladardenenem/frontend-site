import { GetStaticProps, GetStaticPropsResult } from 'next';
import React, { useCallback, useState } from 'react';
import {
  Wrapper,
  ImageHeaderContainer,
  Container,
  BlogPost,
  BlogPostContainer,
  BlogThemeContainer
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
  const [tagsToFilter, setTagsToFilter] = useState('');
  const handleFilter = useCallback((tagName: string) => {
    setTagsToFilter(tagName);
  }, []);
  return (
    <Wrapper>
      <SEO title="Blog" description="Blog paladar de nenem." />
      <ImageHeaderContainer imgUrl={blogposts[0].feature_image}>
        <div>
          <h1>{blogposts[0].title}</h1>
          <p>{blogposts[0].excerpt}</p>
          <a href="">leia mais </a>
        </div>
      </ImageHeaderContainer>
      <Container>
        <BlogPostContainer>
          {blogposts
            .filter(post => post.primary_tag.name !== tagsToFilter)
            .map(post => (
              <BlogPost key={post.id}>
                <img src={post.feature_image} alt={post.slug} />
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <br />
                  <Link href={`/blog/${post.slug}`}><a href="">leia mais </a></Link>
                </div>
              </BlogPost>
            ))}
        </BlogPostContainer>
        <BlogThemeContainer>
          <h1>temas</h1>

          <ul>
            {blogtags.map(tags => (
              <li key={tags.id}>
                <a onClick={e => handleFilter(tags.name)}>{tags.name}</a>
              </li>
            ))}
          </ul>
        </BlogThemeContainer>
      </Container>
      <Footer />
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
