import React from 'react';
import '@/styles/globals.css'
import '@/styles/components/Navbar.css'
import '@/styles/components/Banner.css'
import '@/styles/components/FeaturedProducts.css'
import '@/styles/components/IconsSection.css'
import '@/styles/components/GiftsSection.css'
import '@/styles/components/Footer.css'
import '@/styles/components/StoreBanner.css'
import '@/styles/components/StoreProducts.css'

import '@/styles/contacts.css'
import '@/styles/store.css'
import '@/styles/slug.css'
import '@/styles/success.css'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { StateContext } from '@/context/StateContext';
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster/>
        <Component {...pageProps} />
    </StateContext>
  )
}
