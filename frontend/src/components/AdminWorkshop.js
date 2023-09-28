import React from "react";
import '../stylesheets/main.css';

export default function AdminWorkshop () {
      // still need to send a request to server
      // render logic below if match property comes back as true
      const logout = async () => {
            localStorage.removeItem('clientToken')
            document.location.reload()
      }

      return (
            <div>
                  <h1>Admin Workshop</h1>
                  <button className="btn btn-large btn-primary" onClick={() => { logout() }}>Logout</button>
            </div>
      )
}