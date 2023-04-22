import sanityClient from '@sanity/client'
import imageUrlBuider from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'ahbc4h3t',
    dataset: 'production',
    apiversion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source);