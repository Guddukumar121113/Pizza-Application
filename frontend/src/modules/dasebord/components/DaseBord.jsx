import React, { useEffect, useState } from 'react'
import Header from '../../../sharde/components/Header'
import Product from './Product';
import { getApiCall } from '../../../sharde/service/api-client';
import Products from './Products';
import CartView from '../../cart/pages/CartView';
import { CartContext } from '../context/cart-context';

const DaseBord = () => {
     const [loading, setLoading] = useState(true);
     const [pizzas, setPizzas] = useState([])

     const [errors, setErrors] = useState(null);
    //  let carts=[];

   const [carts, setCarts] = useState([]);
    useEffect(()=>{
    getPizzas();
    },[]) ;

    const addCart = (product)=>{
          
       const c= [...carts];
       c.push(product);
       setCarts(c);
    }

    const getPizzas =async ()=>{
        try{
        const PIZZA_ENDPOINT = import.meta.env.VITE_PIZZA_URL;
       const  pizzas =await getApiCall(PIZZA_ENDPOINT)
       console.log('Pizzas  hai', pizzas);
       setLoading(false);
       setPizzas(pizzas['Vegetarian']);
        }
        catch(err){
            setErrors(err);
        }
    }

  return (
    <div className='container'>
      <Header />
        <CartContext.Provider value= {{carts:carts, addCart: addCart}}> 

      <div className="row">
        <div className="col-9  " >
          <div className="row d-flex flex ">

            {loading?<p>Loading....</p>:<Products products= {pizzas}/>}
            {/* <Product/>
            <Product/>
            <Product/> */}
          </div>
        </div>
        <div className="col-3 ">
          <div className='alert alert-dark'>
              <h3 className=' text-center bg-white'>Carts</h3>
              <CartView/>

          </div>
            
        </div>
        
      </div>
      </CartContext.Provider>
    </div>
    
  );
}

export default DaseBord
