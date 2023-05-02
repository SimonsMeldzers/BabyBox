import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Typography } from '@mui/material';
import Link from 'next/link';

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

function store() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <div className='store-select-container'>
            
              <div className="store-select-boy">
              <Link href='/store/boys' style={{width: '100%', height: '100%', display:'flex', justifyContent:'center'}}>
                  <Typography className='store-select-boy-text' variant='h1'> Zēniem </Typography>
              </Link>
              </div>

            <div className="store-select-girl">
            <Link href='/store/girls' style={{width: '100%', height: '100%', display:'flex', justifyContent:'center'}}>
                <Typography className='store-select-girl-text' variant='h1'> Meitenēm </Typography>
            </Link>
            </div>

        </div>
        <Footer/>
    </ThemeProvider>
  )
}

export default store;