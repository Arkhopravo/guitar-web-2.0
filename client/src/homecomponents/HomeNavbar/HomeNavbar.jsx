// import React,{useState,useEffect, useContext} from 'react'
// import './HomeNavbar.scss'
// import { Link, useNavigate } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import MenuIcon from '@mui/icons-material/Menu';

// import { FaBars, FaTimes } from 'react-icons/fa';

// const LearnNav = () => {
  
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
  
  
//     const toggleDesktopMenu = ()=> {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     }

//     useEffect(() => {
      
  
      
//     }, [])
  
//     const logout = () => {
      
//     }
    
   
    

    

//     const navigate = useNavigate(true);



  
 

//   return (
//     <>
//     {/* <nav className='homenavbar'>
//          <div className="logo">
//          <Link to="/">
//                     <img src="/images/logo_300x300.png" alt='guiterlogo' style={{height:"50px" ,width:"120px"}}/>
//          </Link>
//          </div>

//          <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>

//             <ul className='left-menu'>
//             <li>
//             <Link to="/learning" style={{textDecoration:"none", color:"white"}}>Learning</Link>
//             </li>
//             <li>
//             <Link to="/tune" style={{textDecoration:"none", color:"white"}}>Tuning</Link>
//             </li>
//             <li>
//             <Link to="/matronome" style={{textDecoration:"none", color:"white"}}>Matronome</Link>
//             </li>
//             <li>
//             <Link to="/ecommercehome" style={{textDecoration:"none", color:"white"}}>Store</Link>
//             </li>
            
            

            
            
            
//              </ul>

            
            
//             <ul className="right-menu">
//             <li>
//             <Link to="/">
//                 <div >Home</div>
//                 </Link>
//             </li>
//             <li>
//             <Link to="/blog">
//                 <div >About</div>
//                 </Link>
                
//             </li>
//             <li>
//                 <div >Services</div>
//             </li>
//             <li>
//                 <div >Contact</div>
//             </li>
//             </ul>

//             </div>


        
//         <div className="mr-20 ">

//         {username && (
//           <>
//             <div className="gap-5-x justify-between flex ">

//                   <Link to="/" className='cursor-pointer' >{username}</Link>
//                   <div className='w-10' />
//                   <a onClick={logout}  className='cursor-pointer' >Logout</a>
//             </div>
//                 </>
//               )}

//               {!username && (
//                 <>
//                  <Link to="/login" className='cursor-pointer' >Login</Link>
//                  <div className=""></div>
//                 <Link to="/register" className='cursor-pointer' >Register</Link>
//                 </>
//               )}

//           </div>

//             <div className="mobile-toggle" onClick={toggleMobileMenu}>
//             <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
//             <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
//             <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
//             </div>
//     </nav> */}


//     <nav className='bg-black-900 p-4 '>

//     {/* Desktop */}
//     <div className="container mx-auto flex justify-between items-center">
//       <Link to="/">
//        <span>Guitar Harmionics</span>
//       </Link>
//         <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
//                     {[
//                 ['Learning', '/learning'],
//                 ['Tuning', '/tune'],
//                 ['Matronome', '/matronome'],
//                 ['Store', '/ecommercehome'],
//             ].map(([title, url]) => (
//                 <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//             ))}
//         </nav>
//                     <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
//                     {[
//                 ['Home', '/'],
//                 ['About', '/blog'],
//                 ['Subscription', '/subscriptions'],
//                 ['Contact', '/'],
                
//             ].map(([title, url]) => (
//                 <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//             ))}

//         </nav>
//         <nav>
      
//             {/* {username && (
//               <>
//                   {[
//                       [`${username}`, '/profile'],
                                   
                            
//                         ].map(([title, url]) => (
//                             <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//                   ))}
//                    <a onClick={logout}  className='cursor-pointer rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900' >Logout</a>
//               </>
//             )} */}

//             {/* {!username && (
//               <>
//                  {[
//                 ['Login', '/login'],
//                 ['Register', '/register'],
            
                
//                   ].map(([title, url]) => (
//                       <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//                   ))}
//               </>
//             )} */}
          
//                {[
//                 ['Login', '/login'],
//                 ['Register', '/register'],
            
                
//                   ].map(([title, url]) => (
//                       <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//                   ))}
//         </nav>
//         {/* Mobile menu button */}
        
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-white hover:text-gray-300"
//         >
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>


  

//     {/* Mobile */}
//     {isMobileMenuOpen && (
//         <div className="fixed top-0 right-0 h-screen w-3/4 bg-slate-800 text-white p-6 z-50">
//              <button
//                 onClick={toggleDesktopMenu}
//                 className="md:hidden text-white hover:text-gray-300"
//                 >
//                 {isMobileMenuOpen ? <FaTimes />   :  <FaBars />}
//             </button>
//           <nav className="flex flex-col space-y-4">
//           {[
//                 ['Learning', '/learning'],
//                 ['Tuning', '/tune'],
//                 ['Matronome', '/matronome'],
//                 ['Store', '/ecommercehome'],
                
//             ].map(([title, url]) => (
//                 <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//             ))}
//           </nav>
//           <nav className="flex flex-col space-y-4">
//           {[
//                 ['Home', '/'],
//                 ['About', '/blog'],
//                 ['Subscription', '/subscriptions'],
//                 ['Contact', '/'],
                
//             ].map(([title, url]) => (
//                 <Link to={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
//             ))}
//           </nav>
        
//         </div>
//       )}

//     </nav>
    
// </>
//   )
// }

// export default LearnNav



import React, { useContext } from 'react';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useSelector } from 'react-redux';

const HomeNavbar = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector(state => state.user); // Assuming currentUser is the key for user data in Redux store
  const { toggle, darkMode } = useContext(DarkModeContext);

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
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/learning"} as={'div'}>
          <Link to="/learning">tutorials</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/tune"} as={'div'}>
          <Link to="/tune">Tune</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/matronome"} as={'div'}>
          <Link to="/matronome">matronome</Link>
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
  );
};

export default HomeNavbar;
