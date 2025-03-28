import { Fragment } from 'react'
import { Header } from "../Header/Header"
import { Footer } from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
   <Fragment>

     <Header/>

      <Outlet />

     <Footer/>
     
   </Fragment>
  )
}

export default Root