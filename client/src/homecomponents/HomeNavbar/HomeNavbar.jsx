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
