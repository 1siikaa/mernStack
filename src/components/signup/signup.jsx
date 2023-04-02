import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './signup.css'



function Signup() {
    const [enter, setEnter]=useState({name:'', email:'', password:'', address:''})
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const response = await fetch("http://localhost:3001/signup", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: enter.name, email: enter.email, password: enter.password, address: enter.address})
    
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
          alert('Account has created successfully')
          localStorage.setItem('token', json.authToken)
          navigate("/login")
    
        }
        else {
          console.log(json.message)
          alert("Enter Valid Credentials")
        }
      }
    
    catch(err){
        console.log(err.name, err.message)
    }
}
    
      const onChange = (e) => {
        setEnter({ ...enter, [e.target.name]: e.target.value })
      }

  return (
    <div style={{ backgroundImage: 'url("https://source.unsplash.com/1200x500/?lock")', backgroundSize: 'cover',height: '100vh' }}>
      
        <div className='signupcontainer' >
          <form  onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name" className="form-label">Name</label>
              <fieldset>
              <input type="text" className="form-control" name='name' value={enter.name} placeholder="Enter name" onChange={onChange} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="input">
              <label htmlFor="email" className="form-label">Email address</label>
              <fieldset>
              <input type="text" className="form-control" name='email' value={enter.email}  placeholder="Enter email"  onChange={onChange} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="input">
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' placeholder="Enter address" value={enter.address} onChange={onChange} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            
            <div className="input">
            
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <fieldset>
              <input type="text" className="form-control" placeholder="Enter password" value={enter.password} onChange={onChange} name='password' />
              </fieldset>
               <p>password should contain atleast one special character, <br/> one upperCase , one lowerCase letter, one digit, <br/> and minimum length should be 8. </p>
            </div>
            <button type="submit" className="input btn btn-success">Signup</button>
            <Link to="/login" className="input mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
  )
} 

export default Signup
