import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { client } from '@/lib/client'


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoreBanner from '@/components/StoreBanner';
import StoreProducts from '@/components/StoreProducts';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


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

function Girls({featuredProducts}) {
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortedProducts, setSortedProducts] = useState(featuredProducts);

  const handleChange = (event) => {
    setSortOrder(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const sortOrderValue = 'price ' + sortOrder;
      const featuredQuery = `*[_type == "product"] | order(${sortOrderValue})`;
      const fetchedProducts = await client.fetch(featuredQuery);
      setSortedProducts(fetchedProducts); // Update the state with fetched products
      return fetchedProducts;
    };
    
    const updateFeaturedProducts = async () => {
      const fetchedProducts = await fetchData();
      featuredProducts = fetchedProducts; // Update the prop directly
      console.log(fetchedProducts)
    };

    updateFeaturedProducts();
  }, [sortOrder]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
        <StoreBanner title='Preces Meitenēm' breadcrumbLink='/store/girls' breadcrumbName='Meitenēm'/>

        <div className="store-sorting">
          <FormControl variant="standard" color='secondary' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Filtrēt</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleChange}
              label="Filtrēt"
              value={sortOrder}
            >
              <MenuItem value='desc'>Cena dilstoši</MenuItem>
              <MenuItem value='asc'>Cena augoši</MenuItem>
            </Select>
          </FormControl>
        </div>

        <StoreProducts featuredProducts={sortedProducts}/>
      <Footer/>
    </ThemeProvider>
  )
};

export const getServerSideProps = async () => {
  const featuredQuery = `*[_type == "product"]`;
  const featuredProducts = await client.fetch(featuredQuery);
  return {
    props: { featuredProducts },
  };
};

export default Girls;