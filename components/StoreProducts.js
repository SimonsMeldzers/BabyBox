import { Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Product from '@/components/Product';

function StoreProducts({featuredProducts}) {
  return (
    <Paper className='featured-container' elevation={0}>
        <div className='product-container'>
            {featuredProducts?.map((fproduct) => <Product key={fproduct._id} product={fproduct}/>)}
        </div>
        
    </Paper>
  )
};

export default StoreProducts;