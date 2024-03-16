import React, { useContext } from 'react'
import HomeFooter from './HomeFooter/HomeFooter'
import HomeNavbar from './HomeNavbar/HomeNavbar'
import { DarkModeContext } from '../context/darkModeContext';

const HomeLayout = ({children}) => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div>
        <HomeNavbar/>
        <div className={` h-1 ${darkMode ? 'bg-white':'bg-black'}`}></div>
        {children}
        <HomeFooter/>    
    </div>
  )
}

export default HomeLayout