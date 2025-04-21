import React, {  useContext } from 'react'
import { CartContext } from '../../dasebord/context/cart-context';
import Product from '../../dasebord/components/Product';
 import Pay from '../../payments/components/Pay';

const Cart = () => {
 const ctx   =useContext(CartContext);
 const total= ()=>{
    return ctx.carts.reduce((sum, Product)=>sum+ Product.price, 0);
 }
  return (
    <div>
      <p>Total items in Cart {ctx.carts.length}</p>

         {ctx.carts.map(Product=><>
         <p>{Product.name} {Product.price}</p></>)}
         <p>
            Total Bill is {total()}
            
         </p>{ctx.carts.length>0 && <Pay/>}
         
    </div>
  )
}

export default Cart
