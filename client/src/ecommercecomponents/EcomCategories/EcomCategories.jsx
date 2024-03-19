import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';

const Button = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <button className={`z-3 p-3 rounded-md m-2 absolute justify-center items-center ${darkMode? 'bg-slate-600 ':'bg-slate-300'}  `}>
      Click Me
    </button>
  )
}

const EcomCategories = () => {
  return (
  
  
    <div className="">
     <div className=" items-center justify-center md:grid md:grid-rows-3 md:grid-flow-col md:mx-56 mx-24 gap-2 w-4/6">
        <div className=''>
          <Link to="/ecommerceproducts/4">
          <Button/>
          <img className='rounded-md' src="https://img.freepik.com/premium-photo/boy-girl-playing-guitar-woods_942686-6139.jpg" alt="" loading="lazy"/>
          </Link>
        </div>
        
        <div className="">
          <Link to="/ecommerceproducts/5">

          <Button/>
          <img className='  rounded-md' src="https://img.freepik.com/premium-photo/man-playing-guitar-front-mountain-landscape_925551-345.jpg?w=900" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className=''>
          <Link to="/ecommerceproducts/6">
          <Button/>
          <img className='rounded-md' src="https://img.freepik.com/premium-photo/young-playing-guitar-enjoy-with-friends_988095-456.jpg?w=1060" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className=''>
          <Link to="/ecommerceproducts/7">
          <Button/>
          <img className=' rounded-md' src="https://img.freepik.com/premium-photo/stock-photo-back-school_896782-14873.jpg?w=900" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className="">
          <Link to="/ecommerceproducts/8">

          <Button/>
          <img className='rounded-md' src="https://img.freepik.com/premium-photo/vasant-panchami-festival-day-india-concept-spring-india_145644-16929.jpg?w=1060" alt="" loading="lazy"/>
          </Link>
        </div>
      </div>
    </div>


  );
};

export default EcomCategories;
