import React from 'react'
import './LearnFooter.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function LearnFooter() {
  return (
    <div className="learnfooter">
   
   <div className="footeritem">
   <div className="top">
        <div className="item">
          <h1>Home</h1>
          <span>About Us</span>
          <span>Guitar Lessons</span>
          <span>Start Here</span>
          <span>Easy Learning</span>
          <span>Hands On Session</span>
        </div>

        <div className="item">
          <h1>Lead Guitar Lessons</h1>
          <span>Blues Guitar Lessons</span>
          <span>Beginner Guitar Lessons</span>
          <span>How To Play Guitar</span>
          <span>FAQ</span>
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
          <span className="logo">GuitarHarmonics</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
         
        </div>

      </div>
   </div>
  )
}

export default LearnFooter