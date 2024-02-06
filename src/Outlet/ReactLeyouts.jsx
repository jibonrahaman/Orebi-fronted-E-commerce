import React from 'react'
import Nav from '../Components/NavPage/Nav'
import FooterPage from '../Components/FooterPart/FooterPage'
import { Outlet } from 'react-router-dom'

function ReactLeyouts() {
  return (
    <div>
        <Nav />
             <Outlet />
         
        <FooterPage />
        
    </div>
  )
}

export default ReactLeyouts