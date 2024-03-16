import React from 'react'


import HomeNavbar from '../../homecomponents/HomeNavbar/HomeNavbar'
import { Link } from 'react-router-dom'
import HomeCard from '../../homecomponents/HomeCard/HomeCard'
import HomeAbout from '../../homecomponents/HomeAbout/HomeAbout'
import HomeBlog from '../../homecomponents/HomeBlog/HomeBlog'
import HomeContactUs from '../../homecomponents/HomeContactUs/HomeContactUs'
import HomeFooter from '../../homecomponents/HomeFooter/HomeFooter'
import HomeLayout from '../../homecomponents/HomeLayout'
// import Chatbot from '../../homecomponents/Chatbot'

function Home() {


  return (
    <div className=''>
      {/* <Chatbot/> */}
      {/* <HomeNavbar/> */}
      <HomeLayout>

      <HomeCard/>
     
      <HomeAbout />
      <HomeBlog/>
      
      <HomeContactUs/>
      </HomeLayout>
      
      {/* <HomeFooter/> */}
    </div>
  )
}

export default Home