import React, { useContext } from 'react'
import BlogHeader from '../components/BlogHeader'
import { Button } from 'flowbite-react';
import { DarkModeContext } from '../../../context/darkModeContext';

const BlogApp = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div >
    <BlogHeader/>  
      BlogApp
      {/* <Button >Click me</Button> */}
    </div>
  )
}

export default BlogApp