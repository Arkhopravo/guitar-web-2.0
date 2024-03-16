import React,{Fragment} from 'react'
import TuneHeader from './TuneHeader/TuneHeader'
import TuneFooter from './TuneFooter/TuneFooter'

const Layout = ({children}) => {

  return (
    <Fragment>
      <TuneHeader/>
        <main className='guitartuna-root' >{children}</main>
      <TuneFooter/>
    </Fragment>
  )
}

export default Layout