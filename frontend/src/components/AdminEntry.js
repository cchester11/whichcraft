import React from "react";
import axios from "axios";

export default function AdminEntry() {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')

      const handleLogin = (event, username, password) => {
            event.preventDefault()

            axios.post('/api/admin/login', {
                  username: username,
                  password: password
            }, () => {
                  console.log(Response)
            })
      }

      return (
            <div className="container d-flex flex-column" style={{ width:'40%' }}>
                  <div className="mb-3">
                        <label htmlFor="username_login" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username_login" placeholder="username" />
                  </div>
                  <div className="mb-3">
                        <label htmlFor="password_login" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password_login" placeholder="password" />
                  </div>
                  <button type="submit" className="btn btn-large btn-primary" onSubmit={handleLogin()}>Login</button>
            </div>
      )
};