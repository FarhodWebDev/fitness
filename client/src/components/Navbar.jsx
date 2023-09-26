import React from 'react'
import { useLocation } from 'react-router'
function Navbar() {
    const location = useLocation()
    const hideNav = ["/login"];
    const shouldHideNav = hideNav.includes(location.pathname)
    if(shouldHideNav){
        return null
    }
  return (
    <div>
        
    </div>
  )
}

export default Navbar