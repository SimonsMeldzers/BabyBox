import React from 'react'

import { Paper, Typography, Button } from '@mui/material';

function Banner() {
  return (
    <>

    <Paper className='banner-container'>
        <div className='banner-content'>
            <Typography variant='h2' component='h1' className='banner-heading'> HUGE SALE </Typography>
            <Typography variant='h4' component='h2' className='banner-discount'> UP TO 50% OFF </Typography>
            <Typography variant='h6' component='h3' className='banner-discount-bottom'> SPECIAL OFFERS </Typography>

            <Typography variant='h6' component='p' className='banner-code'> Use code PROMO for additional 10% off at checkout.</Typography>
            <Typography variant='h8' component='p' className='banner-code-bottom'> Code available until April 30th</Typography>

            <Button href='/' variant='contained' className='banner-button'> SHOP NOW </Button>
        </div>
    </Paper>
    </>
  )
}

export default Banner;