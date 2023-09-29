import React from "react";
import axios from "axios";
import '../../stylesheets/main.css';

export default function AdminWorkshop () {
      const clientToken = localStorage.getItem('clientToken');
      // still need to send a request to server
      // render logic below if match property comes back as true
      const logout = async () => {
            const response = await axios.post('http://localhost:3001/admin/destroyauth', {
                  clientToken: clientToken
            })

            const match = response.data.match;

            if(match === true) {
                  localStorage.removeItem('clientToken')
                  document.location.reload()
            } else {
                  window.alert('You are not logged in')
                  document.location.reload()
            }
      }

      return (
            <div>
                  <h1>Admin Workshop</h1>
                  <button className="btn btn-large btn-primary" onClick={() => { logout() }}>Logout</button>
            </div>
      )
}