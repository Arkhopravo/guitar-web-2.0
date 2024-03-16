import React from 'react'
import './HomeContactUs.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function HomeContactUs() {
  return (
    <div className="follow">

    <div className="followimage">
    <img src="https://wallpapercave.com/wp/TwtveMZ.jpg" alt="background"  />
    <div className="contact-container">
    <h1 style={{color:"white", padding:"10px"}}>Contact Us</h1>
    <form className="contact-form">
      <div className="input-container">
        {/* <label htmlFor="name">Name</label> */}
        <input type="text" id="name" name="name" placeholder='name' />
      </div>
      <div className="input-container">
        {/* <label htmlFor="email">Email</label> */}
        <input type="email" id="email" name="email" placeholder='email' />
      </div>
      <div className="input-container">
        {/* <label htmlFor="message">Message</label> */}
        <textarea id="message" name="message" rows="4" placeholder='message' />
      </div>
      <button class="Btn">
          Jelly Button
        </button>
    </form>
  </div>
 </div>    
</div>
  )
}

export default HomeContactUs