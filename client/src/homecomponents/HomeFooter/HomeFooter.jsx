import React from 'react'
import './HomeFooter.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function HomeFooter() {
  return (
    <div className="homefooter">
      <div className="footeritem">

    <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Guitars</span>
          <span>Bass Guitars</span>
          <span>Mandoline</span>
          <span>Ukulele</span>
          <span>Synthesizer</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to our premier online destination for all your musical needs! Whether you're a seasoned musician or just starting your musical journey, our website is the perfect place to find a wide range of guitars and other instruments. 


          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Facebook
          </span>
            <span>Twitter</span>
            <span>Instagram</span>

        </div>
      </div>
        <div className='mobileItems'>
            <h1>Mobile App</h1>
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40" 
            alt="" />
            <img src="
            https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40
            " alt="" />

            </div>
    </div>


      <div className="bottom">
        <div className="left">
          <span className="logo">GuitarHarmionics</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
            {/* <FacebookIcon/>
            <GoogleIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <TwitterIcon/> */}
        </div>
      </div>
   </div>
  )
}

export default HomeFooter