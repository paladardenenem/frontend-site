import React from 'react';
import PostLayout from '../../_layouts/Postlayout';
import { getPosts, getSinglePost } from '../../lib/ghost';
import { GetStaticPropsContext } from 'next';
import { PostOrPage } from '@tryghost/content-api';
import { useRouter } from 'next/dist/client/router';

interface PathsProps {
  params: string[];
}
export default function Post(props: PostOrPage) {
  const router = useRouter();

  console.log(props);
  if (router.isFallback) {
    return <div />;
  }

  return (
    <PostLayout
      title={props.title}
      content={props.html}
      thumbnailUrl={props.feature_image}
    />
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: await getSinglePost(String(context.params.slug))
  };
}

export async function getStaticPaths() {
  const response = await getPosts();

  const paths: any = response.map(post => {
    return {
      params: { slug: post.slug }
    };
  });

  return {
    paths: paths,
    fallback: true
  };
}
