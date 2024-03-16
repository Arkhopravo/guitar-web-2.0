import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiUser } from 'react-icons/hi';
import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../../context/darkModeContext';
import { Link, useLocation } from 'react-router-dom';

const DashSidebar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar className={`w-full md:w-56 ${darkMode ? 'dark' : ''}`}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              href="#"
              active={tab === 'profile'}
              className={`${
                darkMode
                  ? 'bg-slate-500 text-white hover:bg-gray-400 hover:text-slate-800'
                  : 'bg-gray-200 hover:bg-slate-400 hover:text-zinc-100'
              }`}
              icon={HiUser}
              label={'user'}
              labelColor='dark'
               as='div'
            >
              <div className="flex justify-between">
                Profile
              </div>
            </Sidebar.Item>
          </Link>

            <Sidebar.Item 
            href="#"
            className={`${
              darkMode
                ? 'bg-slate-500 text-white hover:text-black hover:bg-gray-400'
                : 'bg-gray-200 hover:bg-slate-400 hover:text-zinc-100'
            }`}
            icon ={HiArrowSmRight}
          >
            <div className="flex justify-between">
              
              <span>Sign out</span>
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
