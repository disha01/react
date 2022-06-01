import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
   
      <Link className="navbar-brand" to="/">{props.title}</Link>
        <Link className="nav-a active" aria-current="page" to="/" > Home</Link>
        <Link className="nav-a" to="/about"  >about</Link>

   
  </div>
</nav>
        

     
  )
}
