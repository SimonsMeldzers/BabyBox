import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import { urlFor } from '@/lib/client';
import { useStateContext } from '@/context/StateContext';

function Product({product : {image, name, slug, price, category}}) {
    const { view } = useStateContext();

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };

    let productCardStyle = "product-card";
    let productImageStyle = "product-image";

    if (view == "default"){
        productCardStyle = "product-card";
        productImageStyle = "product-image";
    } else if(view == "large"){
      productCardStyle = "product-card-large";
      productImageStyle = "product-image-large";
    }else if(view == "xl"){
      productCardStyle = "product-card-xl";
      productImageStyle = "product-image-xl";
    }
    

  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div className={productCardStyle}>
            <img 
                onMouseOver={handleHover}
                onMouseOut={handleLeave}
                src={hovered ? urlFor(image[1] || image[0]) : urlFor(image && image[0])} 
                className={productImageStyle}
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