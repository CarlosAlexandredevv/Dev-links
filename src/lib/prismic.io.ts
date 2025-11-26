import * as prismic from '@prismicio/client';

export async function createClient() {
  const client = prismic.createClient('carlosalexandredevvv', {
    accessToken: process.env.PRISMIC_TOKEN,
  });

  return client;
}
