import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BlogHeader from '../components/BlogHeader'
import DashSidebar from '../components/DashboardComponents/DashSidebar'
import DashProfile from '../components/DashboardComponents/DashProfile'

const Dashboard = () => {
  const location = useLocation()
  const [tab, setTab] = useState('')

  useEffect(() => {
    const usrlParams = new URLSearchParams(location.search)
    const tabFromUrl = usrlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  
  }, [location.search])
  

  return (
    <>
    <BlogHeader/>
     <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar/>
      </div>
      {/* profile */}
      {tab === 'profile' && <DashProfile/>}
     </div>
    </>
  )
}

export default Dashboard