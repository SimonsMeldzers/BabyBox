import React from 'react'

import { Grid, Paper, Typography } from '@mui/material';

import Product from './Product';
import Link from 'next/link';

const FeaturedProducts = ({featuredProducts}) => {
  return (
    <Paper className='featured-container' elevation={0}>
        <Typography variant='h3' component='h1' className='featured-heading'> Aktuālas preces</Typography>
        <Typography variant='h6' component='h2' className='featured-sub-heading'> Sezonas populārkie piedāvājumi. </Typography>
        <div className='product-container'>
            {featuredProducts?.map((fproduct) => <Product key={fproduct._id} product={fproduct}/>)}
        </div>
        <Link href='/store' className='featured-button'><Typography variant='h6'> Skatīt vairāk </Typography></Link>
    </Paper>
  )
}

export default FeaturedProducts;