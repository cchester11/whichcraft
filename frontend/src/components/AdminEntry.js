import React from "react";

export default function AdminEntry() {
      return (
            <div className="container d-flex flex-column" style={{ width:'40%' }}>
                  <div className="mb-3">
                        <label for="username_login" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username_login" placeholder="username" />
                  </div>
                  <div className="mb-3">
                        <label for="password_login" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password_login" placeholder="password" />
                  </div>
            </div>
      )
};