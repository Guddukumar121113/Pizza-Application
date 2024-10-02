import React, { useEffect, useState } from 'react'
import Header from '../../../sharde/components/Header'
import Product from './Product';
import { getApiCall } from '../../../sharde/service/api-client';
import Products from './Products';

const DaseBord = () => {
     const [loading, setLoading] = useState(true);
     const [pizzas, setPizzas] = useState([])

     const [errors, setErrors] = useState(null);
    useEffect(()=>{
    getPizzas();
    },[])

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
      <div className="row">
        <div className="col-8">
          <div className="row">

            {loading?<p>Loading....</p>:<Products products= {pizzas}/>}
            {/* <Product/>
            <Product/>
            <Product/> */}
          </div>
        </div>
        <div className="clo-4"></div>
      </div>
    </div>
  );
}

export default DaseBord
