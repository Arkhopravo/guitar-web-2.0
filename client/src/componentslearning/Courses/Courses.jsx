import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Courses.scss'
import { useParams } from 'react-router-dom'


function Courses({item}) {

  return (
    <>
    
    <Link to={item.id === 4? '/music ' : `/lessons/${item.id}`} 
    
    className='link'
    style={{textDecoration:"none", color: "white"}} key={item.id}
    >
    <div className='wrapper'>
        <img src={item.img} alt="" className=' rounded-lg'/>
     
      <h1 className='mt-2 ml-2 mr-2 mb-2'>{item.title}</h1>
     

      <div className="flex flex-col mt-1">

      <button class="btn">
          Click Me
      </button>

      <span className='mt-2 ml-2 mr-2 mb-2'>{item.desc}</span>
      </div>
    </div>
    </Link>

    
    </>
    
  )
}

export default Courses