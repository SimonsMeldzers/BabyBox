import sanityClient from '@sanity/client'
import imageUrlBuider from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'ahbc4h3t',
    dataset: 'production',
    apiVersion: '2021-08-31', 
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source);