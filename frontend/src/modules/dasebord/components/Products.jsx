import React from 'react'
import Product from './Product';

const Products = ({products}) => {
    console.log('All Product arehe', products);
    
  return (
    <>{products.map(product=><Product key={product.id} product={product}/>)}</>
  );
}

export default Products
