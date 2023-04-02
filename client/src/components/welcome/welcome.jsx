import React from 'react'
import {Link} from 'react-router-dom'

import './welcome.css'

function welcome() {
  return (
    <div>
        <h1>Welcome This page</h1>
          <div>
          <h3><Link to='/signup'>Create an account</Link></h3>
          <h3><Link to='/login'>Already a  user</Link></h3>
          </div>
    </div>
  )
}

export default welcome