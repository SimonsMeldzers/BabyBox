import React, { useState } from 'react'

import Link from 'next/link';
import { urlFor } from '@/lib/client';

function Product({product : {image, name, slug, price, category}}) {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };
  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div className='product-card'>
            <img 
                onMouseOver={handleHover}
                onMouseOut={handleLeave}
                src={hovered ? urlFor(image[1] || image[0]) : urlFor(image && image[0])} 
                width={250}
                height={250}
                className="product-image"
            />
            <p className="product-name">
                {name}
            </p>
            <p className="product-price">
                {price}€
            </p>
            </div>
        </Link>
    </div>
  )
}

export default Product;