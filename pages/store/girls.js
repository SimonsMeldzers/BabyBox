import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import StoreBanner from '@/components/StoreBanner';


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

function Boys() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
        <StoreBanner title='PRECES MEITENĒM' breadcrumbLink='/store/girls' breadcrumbName='Meitenēm'/>
        
      <Footer/>
    </ThemeProvider>
  )
};

export default Boys;