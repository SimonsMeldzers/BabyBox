import React from 'react'

import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const pages = ['Galvenā', 'Veikals', 'Kontakti'];
const pageLinks = {
  'Galvenā': '/',
  'Veikals': '/store',
  'Kontakti': '/contacts',
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  return (
    <>
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

            {/* Mobile */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color=""
            >
            <MenuIcon />        
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={pageLinks[page]}><Typography textAlign="center" sx={{fontFamily:'League Spartan'}}>{page}</Typography></Link>
                </MenuItem>
              ))}

            </Menu>

            <Link className='navbar-logo-mobile' href='/'><img id='navbar-logo-mobile' src="https://i.ibb.co/bNhRmWx/Group-1.png" /></Link>

          </Box>

          {/* Desktop */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} href={pageLinks[page]} className='navbar-links'>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#F8CBA7', display: 'block', fontSize:'18px', fontFamily:'League Spartan', fontWeight:'400'}}
              >
                {page}
              </Button>
              </Link>
            ))}
            <Link className='navbar-logo' href='/'><img src="https://i.ibb.co/bNhRmWx/Group-1.png" /></Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <IconButton href='/' color='secondary'><InstagramIcon className='navbar-icons'/></IconButton>
          <IconButton href='/' color='secondary'><FacebookOutlinedIcon className='navbar-icons'/></IconButton>
          <IconButton color='secondary' onClick={() => showCart === true ? setShowCart(false) : setShowCart(true)}><ShoppingBagOutlinedIcon className='navbar-icons'/></IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    
    {showCart && <Cart/>}
    </>
  );
}
export default ResponsiveAppBar;