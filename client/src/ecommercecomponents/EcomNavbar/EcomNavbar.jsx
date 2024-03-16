import React,{useContext, useState, useEffect} from 'react'
import "./EcomNavbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import EcomCart from '../EcomCart/EcomCart';
import { useSelector,useDispatch } from 'react-redux';

import { FaBars, FaTimes } from 'react-icons/fa';

function EcomNavbar() {
    const [open,setOpen] = useState(false)
    
    
    
    
    

    useEffect(() => {
   
      }, [])

      const logout = () => {
      
      }

      
  
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
  
    const toggleDesktopMenu = ()=> {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeCart = () => {
      setOpen(false);
    };
    const products = useSelector(state=>state.cart.products)
  return (
    <>
    <div className="">
    <nav className='bg-black-900 p-4 '>

{/* Desktop */}
<div className="container mx-auto flex justify-between items-center">
  <Link to="/">
    {/* <div className="logo text-white text-2xl font-semibold" >Logo</div> */}
    Guitar Harmionics
  </Link>
    <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                {[
            ['Guitar', '/ecommerceproducts/6'],
            ['Base Guitar', '/ecommerceproducts/8'],
            ['Mandolin', '/ecommerceproducts/7'],
            ['Ukulele', '/ecommerceproducts/4'],
            
        ].map(([title, url]) => (
            <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
    </nav>
                <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                {[
            ['Violin', '/ecommerceproducts/5'],
             ['Synthesizer', '/ecommerceproducts/9'],     
            ['Home', '/ecommercehome/'],
            ['About', '/blog'],
            
            
            
        ].map(([title, url]) => (
          <>
            <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
          </>
        ))}
            <div className='rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'
             onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span className='order-first hover:order-last  hover:border-black-800 ' style={{border:"1px solid white", borderRadius:"5 0px",borderBlockColor:"white", position:"absolute"}}>{products.length}</span>
                </div>

    </nav>
    <nav>

    
        
        {[
       ['Login', '/login'],
       ['Register', '/register'],
   
       
         ].map(([title, url]) => (

             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
         ))}
         
    </nav>
    {/* Mobile menu button */}
    
    <button
      onClick={toggleMobileMenu}
      className="md:hidden text-white hover:text-gray-300"
    >
      {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>




{/* Mobile */}
{isMobileMenuOpen && (
    <div className="fixed top-0 right-0 h-screen w-3/4 bg-slate-800 text-white p-6 z-50">
         <button
            onClick={toggleDesktopMenu}
            className="md:hidden text-white hover:text-gray-300"
            >
            {isMobileMenuOpen ? <FaTimes />   :  <FaBars />}
        </button>
      <nav className="flex flex-col space-y-4">
      {[
            ['Learning', '/learning'],
            ['Tuning', '/tune'],
            ['Matronome', '/matronome'],
            ['Store', '/ecommercehome'],
            
        ].map(([title, url]) => (
            <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
      </nav>
      <nav className="flex flex-col space-y-4">
      {[
            ['Home', '/'],
            ['About', '/blog'],
         
            
          ].map(([title, url]) => (
            <>
            <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            </>
            ))}
            <div className='cartIcon' onClick={()=>setOpen(!open)}>
                   <ShoppingCartOutlinedIcon/>

                   <span className=' items-center justify-center ' style={{border:"1px solid white", borderRadius:"50px", position:"absolute"}}>{products.length}</span>
               </div>
      </nav>
    
    </div>
  )}

</nav>
  {open && <EcomCart  onClose={closeCart} />}
    </div>
    </>
  )
}

export default EcomNavbar