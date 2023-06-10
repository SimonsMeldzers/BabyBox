import { Breadcrumbs, Typography, Link } from '@mui/material';
import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import BoyIcon from '@mui/icons-material/Boy';

function StoreBanner({title, breadcrumbLink, breadcrumbName}) {
  return (
    <div className='store-banner-container'>
        <Typography className='store-banner-title' variant='h3' component='h1'>
            {title}
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Galvenā
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/store"
          >
            <StoreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Veikals
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href={breadcrumbLink}
          >
            <BoyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {breadcrumbName}
          </Link>
        </Breadcrumbs>
    </div>
  )
};

export default StoreBanner;