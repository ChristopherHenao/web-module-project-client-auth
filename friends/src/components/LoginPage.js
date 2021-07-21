import React, { useState } from 'react'
import axios from 'axios'

const initialUserInfo = {
    username: "",
    password: ""
  }

const LoginPage = () => {

    const [ userInfo, setUserInfo ] = useState(initialUserInfo)

    const login = () => {
      axios.post('http://localhost:5000/api/login', userInfo)
      
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
    }
  
    const handleChange = (e) => {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      login()
    } 

    return (
        <div className='App-header'>
            <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            name= 'username'
            onChange={handleChange}
            value={userInfo.username}
            />

            <input 
            type='password' 
            name= 'password'
            onChange={handleChange}
            value={userInfo.password}
            />

            <button>Login</button>
          </form>
        </div>
    )
}

export default LoginPage