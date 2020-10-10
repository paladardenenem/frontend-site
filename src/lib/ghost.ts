import GhostContentAPI, { PostOrPage, Tags } from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://blog-paladardenenem.herokuapp.com',
  key: '83951d5fe52e0ad8411eb200e8',
  version: 'v3'
});

export async function getPosts(): Promise<PostOrPage[]> {
  const response = await api.posts
    .browse({
      limit: 'all',
      include: 'tags'
    })
    .catch(err => {
      console.error(err);
    });
  if (response) {
    return response;
  }
}

export async function getSinglePost(postSlug: string): Promise<PostOrPage> {
  const response = await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });

  if (response) {
    return response;
  }
}

export async function getTags(): Promise<Tags> {
  const response = await api.tags
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.log(err);
    });

  if (response) {
    return response;
  }
}
