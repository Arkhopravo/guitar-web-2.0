import React from 'react'
import styled from 'styled-components'
import { color } from './constants/colors'
import { media } from './constants/breakpoints'
import './AppInfo.scss'
import {Link} from 'react-router-dom'

const AppInfo = () => {
  return (
    <div>
      <Link to='/' >
      <button class="btn">
        Home
      </button>
      </Link>
    </div>
  )
}

export default AppInfo