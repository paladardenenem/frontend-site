import React from 'react';
import Head from 'next/head';
import {
  Container,
  Wrapper,
  Content,
  PostInfo,
  PostAuthorData,
  PostSocialMedia,
  ShareIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  SeparationLine,
  ClicableField
} from '../styles/pages/blog/BlogPost';
import Footer from '../components/Footer';
import { NewslatterContainer } from '../styles/pages/Home';
import NewsletterForm from '../components/NewsletterForm';

interface PostLayoutProps {
  title: string;
  description?: string;
  thumbnailUrl?: string;
  content: string;
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="Blog do Diego" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.thumbnailUrl} />
      </Head>
      <Wrapper>
        <Container>
          <h1>{props.title}</h1>
          <img src={props.thumbnailUrl} alt={props.title} />
          <PostInfo>
            <PostAuthorData>
              <span>Por Fabiane Almeida </span>
              <p>Publicado em xx/xx/xx Atualizado em xx/xx/xx</p>
            </PostAuthorData>
            <PostSocialMedia>
              <ClicableField type="button">
                <ShareIcon></ShareIcon>
              </ClicableField>
              <ClicableField type="button">
                <FacebookIcon></FacebookIcon>
              </ClicableField>
              <ClicableField type="button">
                <InstagramIcon></InstagramIcon>
              </ClicableField>
              <ClicableField type="button">
                <WhatsappIcon></WhatsappIcon>
              </ClicableField>
            </PostSocialMedia>
          </PostInfo>
          <SeparationLine />
          <Content dangerouslySetInnerHTML={{ __html: props.content }} />
          <SeparationLine />
          <NewslatterContainer>
            <NewsletterForm />
          </NewslatterContainer>
        </Container>
        <Footer />
      </Wrapper>
    </main>
  );
}
