import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

function EcomContact() {
  return (
    <div className='bg-blue-600 text-white p-4 flex justify-center'>
          <div className="w-1/2 flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
          className="p-3 border-none rounded-l-md"
          type="text" placeholder="Enter your e-mail..." />
          <button className='p-3 text-white bg-slate-700 rounded-r-md border-none'>JOIN US</button>
        </div>
        <div className="flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  )
}

export default EcomContact