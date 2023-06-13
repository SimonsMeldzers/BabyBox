import React, { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { client } from "@/lib/client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreBanner from "@/components/StoreBanner";
import StoreProducts from "@/components/StoreProducts";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import CalendarViewWeekOutlinedIcon from "@mui/icons-material/CalendarViewWeekOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFBEB",
      light: "#FFFCF2",
      dark: "#FFF8DD",
      contrastText: "#000000",
    },
    secondary: {
      main: "#F8CBA6",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `"League Spartan", sans-serif`,
    fontWeightRegular: 300,
  },
});

function All({ featuredProducts }) {
  const { view, handleViewChange } = useStateContext();

  const router = useRouter();

  // Determines the number isnside the URL (For GiftsSection "Under x$ products")
  let parsedProductId = parseInt(Object.keys(router.query)[0], 10);
  parsedProductId = isNaN(parsedProductId) ? 1000 : parsedProductId;

  const filteredProducts = featuredProducts.filter(
    (featuredProducts) => featuredProducts.price < parsedProductId
  );

  const [sortOrder, setSortOrder] = useState("desc");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);

  const handleChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const featuredQuery = `*[_type == "product"] | order(${sortOrder})`;
      const fetchedProducts = await client.fetch(featuredQuery);
      const filteredProducts = fetchedProducts.filter(
        (featuredProducts) => featuredProducts.price < parsedProductId
      );
      setSortedProducts(filteredProducts); // Update the state with fetched products
      return filteredProducts;
    };

    fetchData();
  }, [sortOrder]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <StoreBanner
        title="Visas Preces"
        breadcrumbLink="/store/all"
        breadcrumbName="Visiem"
      />

      <div className="store-sorting">
        <FormControl
          variant="standard"
          color="secondary"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Filtrēt
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            onChange={handleChange}
            value={sortOrder}
          >
            <MenuItem value="price desc">Cena dilstoši</MenuItem>
            <MenuItem value="price asc">Cena augoši</MenuItem>
            <MenuItem value="name desc">Z-A</MenuItem>
            <MenuItem value="name asc">A-Z</MenuItem>
          </Select>
        </FormControl>
        {/* CSS for togglebuttons is located in FeaturedProducts.css */}
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          color="secondary"
          className="toggle-button-container"
        >
          <ToggleButton
            id="toogle-button-default"
            value="default"
            aria-label="default"
          >
            <CalendarViewWeekOutlinedIcon />
          </ToggleButton>
          <ToggleButton
            id="toogle-button-large"
            value="large"
            aria-label="large"
          >
            <ViewWeekOutlinedIcon />
          </ToggleButton>
          <ToggleButton id="toogle-button-xl" value="xl" aria-label="xl">
            <GridViewRoundedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <StoreProducts featuredProducts={sortedProducts} />
      <Footer />
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const featuredQuery = `*[_type == "product"]`;
  const featuredProducts = await client.fetch(featuredQuery);
  return {
    props: { featuredProducts },
  };
};

export default All;
