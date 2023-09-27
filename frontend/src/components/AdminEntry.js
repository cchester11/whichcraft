import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminEntry() {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')

      const navigate = useNavigate();

      const handleUsername = (event) => {
            const inputVal = event.target.value

            setUsername(inputVal)
      };

      const handlePassword = (event) => {
            const inputVal = event.target.value;

            setPassword(inputVal)
      };

      const handleLogin = async (username, password) => {
            // send a request to the login endpoint
            // endpoint checks for a good match and sends back a response
            const response = await axios.post('http://localhost:3001/admin/login', {
                  username: username,
                  password: password
            })

            const authStatus = response.data.loggedIn;
            const clientToken = response.data.adminToken;

            // if login request is good the response sends a loggedIn property of true and a token
            // store encrypted token in local storage
            // set authStatus to true to access workshop
            if(authStatus === true) {
                  localStorage.setItem('clientToken', clientToken)

                  navigate('/workshop')
            } else {
                  window.alert('Invalid login attempt');
                  document.location.reload()
            }
      };

      return (
            <div className="container d-flex flex-column" style={{ width:'40%' }}>
                  <div className="mb-3">
                        <label htmlFor="username_login" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username_login" placeholder="username" onChange={handleUsername}/>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="password_login" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password_login" placeholder="password" onChange={handlePassword}/>
                  </div>
                  <button type="submit" className="btn btn-large btn-primary" onClick={() => {
                        handleLogin(username, password)
                  }}>Login</button>
            </div>
      )
};