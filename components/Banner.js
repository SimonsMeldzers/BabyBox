import React from 'react'

import { Paper, Typography, Button } from '@mui/material';
import Link from 'next/link';

function Banner() {
  return (
    <>

    <Paper className='banner-container'>
        <div className='banner-content'>
            <Typography variant='h2' component='h1' className='banner-heading'> IZPĀRDOŠANA </Typography>
            <Typography variant='h4' component='h2' className='banner-discount'> LĪDZ PAT 50% ATLAIDES </Typography>
            <Typography variant='h6' component='h3' className='banner-discount-bottom'> SEZONAS PRECĒM </Typography>

            <Typography variant='h6' component='p' className='banner-code'> Izmanto kodu PROMO lai saņemtu papildus 10% atlaidi.</Typography>
            <Typography variant='h8' component='p' className='banner-code-bottom'> Piedāvājums spēkā līdz 30.05.2023</Typography>

            <Link href='/store'> <button className='banner-button'> VEIKALS </button></Link>
        </div>
    </Paper>
    </>
  )
}

export default Banner;