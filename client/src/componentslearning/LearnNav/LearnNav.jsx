import React,{useState} from 'react'
import './LearnNav.scss'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';


const LearnNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openprofile, setOpenprofile] = useState(false);


    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };

   

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <>
    <nav className='learnnavbar'>
         <div className="logo">
         <Link to="/">
                  GuitarHarmonics
         </Link>
         </div>

         <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>

            <ul className='left-menu'>
            <li>
            <Link to="/learning" style={{textDecoration:"none", color:"white"}}>Learning</Link>
            </li>
            <li>
            <Link to="/tune" style={{textDecoration:"none", color:"white"}}>Tuning</Link>
            </li>
            <li>
            <Link to="/matronome" style={{textDecoration:"none", color:"white"}}>Matronome</Link>
            </li>
            <li>
            <Link to="/ecommercehome" style={{textDecoration:"none", color:"white"}}>Store</Link>
            </li>
            

            </ul>

            
            {/* <div > */}
            <ul className="right-menu">
            <li>
                <Link to="/">
                <div >Home</div>
                </Link>
            </li>
            <li>
                <div >About</div>
            </li>
            <li>
                <div >Services</div>
            </li>
            <li>
                <div >Contact</div>
            </li>
            </ul>

            </div>
            {isLoggedIn ? (
        <div className='icon'>
          <PersonOutlineOutlinedIcon className='profileicon' onClick={()=>setOpenprofile(!openprofile)} />
       {openprofile && 
          <div className='profilecontainer'>
        
          <button className='Btn' onClick={handleLogout}>
            <div className='sign'>
              <svg viewBox='0 0 512 512'>
                <path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z'></path>
              </svg>
            </div>
            <div className='text' >Logout</div>
          </button>
    </div>
       }
         
        </div>
      ) : (
        <div
          className='signInButton'
          tabIndex='0'
          onClick={handleLogin}
          >
          <p className='signInButtonText'>Sign In</p>
        </div>
      )}


            <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            </div>
    </nav>
  
      </>
  )
}

export default LearnNav