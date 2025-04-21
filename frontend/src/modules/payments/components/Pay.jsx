// import React from 'react'
// import { OAuth } from '../../../sharde/service/oauth'

// const Pay = () => {

//   const orderNow= async ()=>{
     
//     const usercred= await OAuth();
//     console.log('User info ', usercred);
    
//   }
//   return (
//     <button onClick={orderNow} className='btn btn-primary'>Oder now</button>
//   )
// }

// export default Pay
import React from 'react'
import Oauth from '../../../sharde/service/oauth'

 const Pay = () => {
  const orderNow = async()=>{
    const usercred = await Oauth();
    console.log('User info ', usercred);
    

  }
  
  return (
    <>
     <button className='btn btn-primary' onClick={orderNow}>Order now</button>

    </>
  )
}
export default Pay;
