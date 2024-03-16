import React, { useContext } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home/Home'
import Tune from './pages/Tune/Tune'
import Login from './pages/Login/Login'
import Matronome from './pages/Matronome/Matronome'
import LearningHome from './pages/Learning/LearningHome/LearningHome'
import { EcommerceHome,EcommerceProducts,EcommerceProduct } from './pages/Ecommerce'
import Lessons from './pages/Learning/Lessons/Lessons'

import Music from './pages/Music/Music'

import BlogApp from './pages/Blog/pages/BlogApp'
import Register from './pages/Register/Register'


import SubscriptionPanel from './pages/Subscription/SubscriptionPanel'

import QuizeApp from './pages/Quiz/QuizeApp'



import Dzon from './pages/dappazon/Dzon'
import Projects from './pages/Blog/pages/Projects'
import AboutBlog from './pages/Blog/pages/AboutBlog'
import Dashboard from './pages/Blog/pages/Dashboard'

import { DarkModeContext } from './context/darkModeContext'
import PrivateRoute from './pages/Blog/components/PrivateRoute'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/login",
    element:<Login/>
  },

  {
    // path:"/shop",
    // element:<Shop/>
  },
  
  {
    path:"/subscriptions",
    element:<SubscriptionPanel/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/matronome",
    element:<Matronome/>
  },{
    path:"/learning",
    element:<LearningHome/>
  },{
    path:"/lessons/:id",
    element:<Lessons/>
  },
 
  
      {
        path:"/ecommercehome",
        element:<EcommerceHome/>
      },
      {
        path:"/ecommerceproducts/:id",
        element:<EcommerceProducts/>
      },{
      path:"/ecommerceproduct/:id",
      element:<EcommerceProduct/>
    },
    {
      path:'/tune',
      element:<Tune/>
  },
 
  {
    path:'/music',
    element:<Music/>
    
  },
 
  
  
  {
    path:'/quize',
    element:<QuizeApp/>
    
  },
 
  
  {
    path:'/blog',
    element:<BlogApp/>
    
  },
  {
    path:'/store',
    element:<Dzon/>
    
  },
  {
    path:'/about-blog',
    element:<AboutBlog/>
    
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/projects',
    element:<Projects/>
  }
])

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'} min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <RouterProvider router= {router}/>
    </div>
  )
}

export default App

