import React from 'react';
import '@/styles/globals.css'
import '@/styles/components/Navbar.css'
import '@/styles/components/Banner.css'
import '@/styles/components/FeaturedProducts.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
