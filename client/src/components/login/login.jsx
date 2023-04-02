

import React, { useState } from 'react'
import './login.css'

import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
     
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      alert('logged in')
      //save the auth toke to local storage and redirect
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem('token', json.authToken)
      navigate("/text");
    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{backgroundImage: 'url("https://source.unsplash.com/1260x750/?lock")', height: '100vh', backgroundSize: 'cover' }}>
     
      <div className='logincontainer'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <fieldset>
            <input type="email" className="form-control" name='email' value={credentials.email} placeholder="Enter email" onChange={onChange} aria-describedby="emailHelp" />
            </fieldset>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <fieldset>
            <input type="password" className="form-control" value={credentials.password} placeholder="Enter password" onChange={onChange} name='password' />
            </fieldset>
          </div>
          <button type="submit" className="m-3 btn btn-success">Login</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
  )
}
