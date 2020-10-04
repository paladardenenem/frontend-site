import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

// import { Container } from './styles';
interface IBlogPost {
  id: string;
  title: string;
  content: string;
  'cover-img-url': string;
  slug: string;
}

export default function BlogPost(data: IBlogPost) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {data.content}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id }
    };
  });
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<IBlogPost> = async context => {
  const { slug } = context.params;
  const response = await fetch(
    `http://localhost:3333/products?category_id=${slug}`
  );

  const products = await response.json();
  return {
    props: {
      products
    },
    revalidate: 60
  };
};
