import React from 'react'
import { Carousel } from 'flowbite-react';

const EcomSlider = () => {
  return (
    <div className="h-64 sm:h-56 xl:h-80 2xl:h-96">
          <Carousel >
            <img src="https://www.desktopbackground.org/download/1280x720/2014/10/22/844016_full-hd-1080p-guitar-wallpapers-backgrounds-hd-guitar-photos_2560x1600_h.jpg" alt=""/>
            <img src="https://wallpapercave.com/wp/wp3145662.jpg" alt=""/>
            <img src="/images/product-category-acoustic-guitars.jpg" alt=""/>
          </Carousel>
          
    </div>
  )
}

export default EcomSlider