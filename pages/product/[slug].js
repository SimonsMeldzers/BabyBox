import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button, IconButton, Typography } from '@mui/material';

import { client, urlFor } from '@/lib/client';
import Product from '@/components/Product';

import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';

import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/router';

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
  const [showLoader, setShowLoader] = useState(true);
  const { image, name, details, price, category } = product;
  const [selectedImage, setselectedImage] = useState(0);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [slug]);

  // Listen for route changes and update the slug value accordingly
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowLoader(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);


  const slides = 
    products.map((item) => (

      <SwiperSlide key={item._id} style={{ marginRight: '100px' }}>
        <Product
          key={item._id}
          product={item}
        />
      </SwiperSlide>

    ));

    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <div className="slug-container">
        <div className="slug-content">
          <div className="slug-img-container">
            <div className="slug-img-sub-container">
              <img
                src={urlFor(image && image[selectedImage])}
                className="slug-img"
              />
              <div className="slug-small-img-container">
                {image?.map((item, i) => (
                  <div
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setselectedImage(i);
                    }}
                  >
                    <img
                      src={urlFor(item)}
                      className="slug-small-img"
                      key={i}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="slug-desc-container">
            <Typography variant="h4" component="h1" className="slug-desc-name">
              {" "}
              {name}{" "}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className="slug-desc-category"
            >
              {" "}
              {category?.charAt(0).toUpperCase() + category?.slice(1)}{" "}
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              className="slug-desc-contents"
            >
              {" "}
              Apraksts:{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className="slug-desc-details"
            >
              {" "}
              {details}{" "}
            </Typography>

            <Typography variant="h4" className="slug-desc-price">
              {" "}
              {price}€{" "}
            </Typography>
            <div className="slug-desc-quantity">
              <Typography variant="h6" className="slug-desc-contents">
                {" "}
                Quantity:{" "}
              </Typography>
              <div className="slug-desc-quantity-counter">
                <IconButton onClick={incQty} id="plus">
                  +
                </IconButton>
                <button disabled id="number">
                  {qty}
                </button>
                <IconButton onClick={decQty} id="minus">
                  -
                </IconButton>
              </div>
            </div>
            <div className="slug-desc-buttons">
              {showLoader ? (
                <CircularProgress color="secondary" />
              ) : (
                <>
                  <Button
                    className="slug-desc-button-cart"
                    type="button"
                    onClick={() => onAdd(product, qty)}
                  >
                    {" "}
                    Pievienot Grozam
                  </Button>
                  <Button
                    className="slug-desc-button-buy"
                    type="button"
                    onClick={handleBuyNow}
                  >
                    {" "}
                    Pirkt Tagad
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <Typography variant="h6" className="slug-recommend-label">
          {" "}
          Jums var arī patikt:{" "}
        </Typography>
        <div className="slug-recommend-container track">
          <Swiper
            style={{ padding: "5px 0px 5px 5px", marginTop: "30px" }}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.6,
                spaceBetween: 100,
              },
              320: {
                slidesPerView: 1.8,
                spaceBetween: -5,
              },
              410: {
                slidesPerView: 2.2,
                spaceBetween: -10,
              },
              480: {
                slidesPerView: 2.3,
                spaceBetween: 0,
              },
              590: {
                slidesPerView: 3.3,
                spaceBetween: 10,
              },
              890: {
                slidesPerView: 4.3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4.3,
                spaceBetween: 10,
              },
              1560: {
                slidesPerView: 4.3,
                spaceBetween: 10,
              },
            }}
          >
            {slides}
          </Swiper>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
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