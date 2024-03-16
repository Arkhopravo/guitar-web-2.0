import React from 'react'

import EcomFooter from '../../../ecommercecomponents/EcomFooter/EcomFooter'
import EcomNavbar from '../../../ecommercecomponents/EcomNavbar/EcomNavbar'
import EcomSlider from '../../../ecommercecomponents/EcomSlider/EcomSlider'
import EcomFeaturedProducts from '../../../ecommercecomponents/EcomFeaturedProducts/EcomFeaturedProducts'
import EcomCategories from '../../../ecommercecomponents/EcomCategories/EcomCategories'
import EcomContact from '../../../ecommercecomponents/EcomContact/EcomContact'
import { Link } from 'react-router-dom'
function EcommerceHome() {
 
  return (
    <div className='home' style={{height:"100%", width:"100%", objectFit:"contain"}}>
      <EcomNavbar/>
      <EcomSlider/>
     <div className="flex justify-left px-24 items-center ">
      <Link to="/store">
      <button className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center justify-center space-x-2'>
        <p className='text-3xl'>Want to Shop using Crypto?</p>
      </button>
      </Link>
     </div>
      <EcomFeaturedProducts types="featured"/>
      <EcomCategories/>
      <EcomFeaturedProducts types="trending"/>
      <EcomContact/>
      <EcomFooter/>
      </div>
  )
}

export default EcommerceHome