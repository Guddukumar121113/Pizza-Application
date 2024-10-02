import React from 'react'
  import Logo from '../widgets/Logo'
import NevBar from '../widgets/NevBar'

const Header = () => {
  return (
    <div className=' alert alert-info text-center '>
       <h3> <Logo/> &nbsp; &nbsp; Pizza App</h3>
       <NevBar/>
    </div>
  )
}

export default Header
