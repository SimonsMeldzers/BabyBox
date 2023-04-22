import React from 'react'

const FeaturedProducts = ({featuredProducts}) => {
  return (
    <>
    {featuredProducts?.map((fproduct) => {
        console.log(fproduct.name)
    })}
    </>
  )
}

export default FeaturedProducts;