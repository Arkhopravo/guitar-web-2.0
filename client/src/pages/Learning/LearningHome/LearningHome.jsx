import React from 'react'
import './LearningHome.scss'

import LearnNav from '../../../componentslearning/LearnNav/LearnNav'
import LearnFooter from '../../../componentslearning/LearnFooter/LearnFooter'
import { Link } from 'react-router-dom'
import CoursesItems from '../../../componentslearning/CoursesItems/CoursesItems'
import HomeLayout from '../../../homecomponents/HomeLayout'
function LearningHome() {
  return (
    <div className='learnhome'>
      <HomeLayout>

        
        <CoursesItems/>

        
      </HomeLayout>
    </div>
  )
}

export default LearningHome