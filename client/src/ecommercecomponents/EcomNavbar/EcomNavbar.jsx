// import React,{useContext, useState, useEffect} from 'react'
// import "./EcomNavbar.scss"

// import {Link} from 'react-router-dom'
// import EcomCart from '../EcomCart/EcomCart';
// import { useSelector,useDispatch } from 'react-redux';

// import { FaBars, FaTimes } from 'react-icons/fa';

// function EcomNavbar() {
//     const [open,setOpen] = useState(false)
    
    
    
    
    

//     useEffect(() => {
   
//       }, [])

//       const logout = () => {
      
//       }

      
  
//       const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
  
  
//     const toggleDesktopMenu = ()=> {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     }


//   return (
//     <>
//     <div className="">
//     <nav className='bg-black-900 p-4 '>

// {/* Desktop */}
// <div className="container mx-auto flex justify-between items-center">
//   <Link to="/">
//     {/* <div className="logo text-white text-2xl font-semibold" >Logo</div> */}
//     Guitar Harmionics
//   </Link>
//     <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
//                 {[
//             ['Guitar', '/ecommerceproducts/6'],
//             ['Base Guitar', '/ecommerceproducts/8'],
//             ['Mandolin', '/ecommerceproducts/7'],
//             ['Ukulele', '/ecommerceproducts/4'],
            
//         ].map(([title, url]) => (
//             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//         ))}
//     </nav>
//                 <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
//                 {[
//             ['Violin', '/ecommerceproducts/5'],
//              ['Synthesizer', '/ecommerceproducts/9'],     
//             ['Home', '/ecommercehome/'],
//             ['About', '/blog'],
            
            
            
//         ].map(([title, url]) => (
//           <>
//             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//           </>
//         ))}
           
//     </nav>
//     <nav>

    
        
//         {[
//        ['Login', '/login'],
//        ['Register', '/register'],
   
       
//          ].map(([title, url]) => (

//              <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//          ))}
         
//     </nav>
//     {/* Mobile menu button */}
    
//     <button
//       onClick={toggleMobileMenu}
//       className="md:hidden text-white hover:text-gray-300"
//     >
//       {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//     </button>
//   </div>




// {/* Mobile */}
// {isMobileMenuOpen && (
//     <div className="fixed top-0 right-0 h-screen w-3/4 bg-slate-800 text-white p-6 z-50">
//          <button
//             onClick={toggleDesktopMenu}
//             className="md:hidden text-white hover:text-gray-300"
//             >
//             {isMobileMenuOpen ? <FaTimes />   :  <FaBars />}
//         </button>
//       <nav className="flex flex-col space-y-4">
//       {[
//             ['Learning', '/learning'],
//             ['Tuning', '/tune'],
//             ['Matronome', '/matronome'],
//             ['Store', '/ecommercehome'],
            
//         ].map(([title, url]) => (
//             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//         ))}
//       </nav>
//       <nav className="flex flex-col space-y-4">
//       {[
//             ['Home', '/'],
//             ['About', '/blog'],
         
            
//           ].map(([title, url]) => (
//             <>
//             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//             </>
//             ))}
//             <div className='cartIcon' onClick={()=>setOpen(!open)}>
//                    <ShoppingCartOutlinedIcon/>

//                    <span className=' items-center justify-center ' style={{border:"1px solid white", borderRadius:"50px", position:"absolute"}}>{products.length}</span>
//                </div>
//       </nav>
    
//     </div>
//   )}

// </nav>
  // {open && <EcomCart  onClose={closeCart} />}
//     </div>
//     </>
//   )
// }

// export default EcomNavbar

import React, { useContext, useState } from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useSelector } from 'react-redux';
import EcomCart from '../EcomCart/EcomCart';

const EcomNavbar = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector(state => state.user); // Assuming currentUser is the key for user data in Redux store
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [open,setOpen] = useState(false)

  const closeCart = () => {
    setOpen(false);
  };

  const products = useSelector(state=>state.cart.products)

  return (
    <Navbar className={`border-b-1  ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Link to='/' className='self-center whitespace-nowrap text-xl md:text-md font-semibold'>
        <span className='px-2 py-1 text-sm  bg-gradient-to-r rounded-lg'>Guitar Harmionics</span>
      </Link>
      

      <div className="flex gap-2 md:order-2 ">
        <div className="flex justify-center  items-center">
          {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} className="text-yellow-500 text-4xl cursor-pointer" />
          ) : (
            <DarkModeOutlinedIcon onClick={toggle} className="text-gray-600 text-4xl cursor-pointer" />
          )}
        </div>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt='user' img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate ">{currentUser.email}</span>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Header>
          </Dropdown>
        ) : (
          <Link to='/login' className='text-xl m-2 p-2'>
            <Button className='text-xl' outline>SignIn</Button>
          </Link>
        )}

        <Navbar.Toggle />
        {/* <div className='rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900'
             onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span className='order-first hover:order-last  hover:border-black-800 ' style={{border:"1px solid white", borderRadius:"5 0px",borderBlockColor:"white", position:"absolute"}}>{products.length}</span>
                </div> */}

          <div className='rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900' onClick={() => setOpen(!open)}>
          
              <ShoppingCartOutlinedIcon />
              <span className='order-first hover:order-last hover:border-black-800' style={{ border: "1px solid white", borderRadius: "5px 0px", borderBlockColor: "white", position: "absolute" }}>{products.length}</span>
          </div>

          {open && <EcomCart  onClose={closeCart} />}
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/ecommerceproducts/6"} as={'div'}>
          <Link to="/ecommerceproducts/6">Guitar</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/ecommerceproducts/8"} as={'div'}>
          <Link to="/ecommerceproducts/8">Base Guitar</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/ecommerceproducts/7"} as={'div'}>
          <Link to="/ecommerceproducts/7">Mandolin</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/ecommerceproducts/4"} as={'div'}>
          <Link to="/ecommerceproducts/4">Ukulele</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/ecommerceproducts/5"} as={'div'}>
          <Link to="/ecommerceproducts/5">Violin</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/ecommerceproducts/9"} as={'div'}>
          <Link to="/ecommerceproducts/9">Synthesizer</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/learning"} as={'div'}>
          <Link to="/learning">tutorials</Link>
        </Navbar.Link>
        
      
        <Navbar.Link active={path === "/blog"} as={'div'}>
          <Link to="/blog">AboutUs</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/ecommercehome"} as={'div'}>
          <Link to="/ecommercehome">Shop</Link>
        </Navbar.Link>
        
        <Navbar.Link active={path === "/subscriptions"} as={'div'}>
          <Link to="/subscriptions">subscription</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default EcomNavbar