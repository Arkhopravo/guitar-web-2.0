import React from 'react'
import './EcomFooter.scss'
function EcomFooter() {
  return (
   <div className="ecomfooter">
    <div className="footeritems">

    
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
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Guitar Harmionics Store</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" height={50} width={300} />
        </div>
      </div>
   </div>
  )
}

export default EcomFooter