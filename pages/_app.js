import React from 'react';
import '@/styles/globals.css'
import '@/styles/components/Navbar.css'
import '@/styles/components/Banner.css'
import '@/styles/components/FeaturedProducts.css'
import '@/styles/components/IconsSection.css'
import '@/styles/components/GiftsSection.css'
import '@/styles/components/Footer.css'

import '@/styles/contacts.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
