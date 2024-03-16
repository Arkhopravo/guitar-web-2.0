// import React,{useState} from 'react'
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { Carousel } from 'react-bootstrap';
// import "./EcomSlider.scss";
// function EcomSlider() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const data = [
//       "https://i0.wp.com/acousticguitar.com/wp-content/uploads/2015/11/Taylor-Builders-Edition-.jpg?fit=1920%2C1280&ssl=1",
//       "https://cdn11.bigcommerce.com/s-phjunl0/images/stencil/original/carousel/140/Carousel-Martin-NEW-GUIDE---Sinker.jpg?c=2",
//       "https://cdn11.bigcommerce.com/s-phjunl0/images/stencil/original/carousel/142/Carousel-Eastman-Mandolin.jpg?c=2",
      
//     ];
//     const prevSlide = () => {
//         setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
//       };
//       const nextSlide = () => {
//         setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
//       };
//   return (
//     <div className="slider">
//         <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
//         <img src={data[0]} alt=""  />
//         <img src={data[1]} alt="" />
//         <img src={data[2]} alt="" />
        
//       </div>
//       <div className="icons">
//         <div className="icon" onClick={prevSlide}>
//           <WestOutlinedIcon />
//         </div>
//         <div className="icon" onClick={nextSlide}>
//           <EastOutlinedIcon />
//         </div>
//       </div>
//     </div>




//   )
// }

// export default EcomSlider


import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./EcomSlider.scss";

const EcomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
     <div className="slider-container">
      
      <Slider {...settings} className='-mt-5 border-t-2'>
        <div>
          <img className='images'
          src="public/images/Taylor-Builders-Edition-.jpg"
           alt="Image 1" />
        </div>
        <div>
          <img className='images'
          src="/public/images/Mandoline/Mandolin.jpg" 
          alt="Image 2" />
        
        </div>
        <div className='images'>
        <img 
          src="public\images\product-category-acoustic-guitars.jpg" 
          alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  )
}

export default EcomSlider