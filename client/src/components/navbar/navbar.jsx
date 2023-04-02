import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
/*  */
function Navbar() {
  const [click, setClick]= useState(false)
  const [clicked, setClicked]= useState(false)
  const [clicks, setClicks]= useState(false)
  const [clicky, setClicky]= useState(false)

  const handleClick=()=> setClick(!click)
  const handleClicked=()=>setClicked(!clicked)
  const handleClicks=()=> setClicks(!clicks)
  const handleClicky=()=> setClicky(!clicky)

  return (
    <div>
    <ul>
    <li><h3><Link className={click? "active": "change" } to='/' onClick={handleClick}>HomePage</Link></h3></li>
    <li><h3><Link className={clicked? "active": "change"} to='/signup' onClick={handleClicked}>SignUp</Link></h3></li>
    <li><h3><Link className={clicks? "active": "change"} to='/login' onClick={handleClicks}>Login</Link></h3></li>
    <li><h3><Link className={clicky? "active": "change"} to='/text' onClick={handleClicky}>Text-to-Image</Link></h3></li>
    </ul> 
    </div>
    
  )
  }
export default Navbar