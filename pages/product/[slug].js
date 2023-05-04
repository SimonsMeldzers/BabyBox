import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button, IconButton, Typography } from '@mui/material';
import Link from 'next/link';

import { client, urlFor } from '@/lib/client';
import Image from 'next/image';

const theme = createTheme({
    palette: {
       primary: {
          main: '#FFFBEB',
          light: '#FFFCF2',
          dark: '#FFF8DD',
          contrastText: '#000000',
       },
       secondary: {
        main: '#F8CBA6',
        contrastText: '#FFFFFF',
     },
    },
    typography: {
      "fontFamily": `"League Spartan", sans-serif`,
      "fontWeightRegular": 300,
    }
  });

function ProductDetails({ product, products}) {
  const { image, name, details, price, category } = product;
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(Math.max(count - 1, 1));
  };
  

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>

        <div className="slug-container">

          <div className='slug-content'>
            <div className="slug-img-container">
              <div className='slug-img-sub-container'>
              <img src={urlFor(image && image[0])} className='slug-img'/>
              <div className='slug-small-img-container'>
                {image?.map((item, i) => (
                  <img
                    src={urlFor(item)}
                    className='slug-small-img'
                    key={i}
                  />
                ))}
              </div>
              </div>
            </div>

            <div className="slug-desc-container">
                  <Typography variant='h4' component='h1' className='slug-desc-name'> {name} </Typography>
                  <Typography variant='h5' component='h2' className='slug-desc-category'> {category.charAt(0).toUpperCase() + category.slice(1)} </Typography>

                  <Typography variant='h6' component='h2' className='slug-desc-contents'> Apraksts: </Typography>
                  <Typography variant='subtitle1' component='p' className='slug-desc-details'> {details} </Typography>

                  <Typography variant='h4' className='slug-desc-price'> {price}€ </Typography>
                  <div className='slug-desc-quantity'>
                    <Typography variant='h6' className='slug-desc-contents'> Quantity: </Typography>
                    <div className='slug-desc-quantity-counter'>
                      <IconButton onClick={handleIncrement} id='plus'>+</IconButton> 
                      <button disabled id='number'>{count}</button> 
                      <IconButton onClick={handleDecrement} id='minus'>-</IconButton>
                    </div>
                  </div>
                  <div className="slug-desc-buttons">
                    <Button className='slug-desc-button-cart'> Pievienot Grozam</Button>
                    <Button className='slug-desc-button-buy'> Pirkt Tagad</Button>
                  </div>
            </div>
          </div>

        </div>

        <Footer/>
    </ThemeProvider>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);
  
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
};


export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
      props: { product, products }
    }
}

export default ProductDetails;