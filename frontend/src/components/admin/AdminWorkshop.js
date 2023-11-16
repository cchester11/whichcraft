import React from "react";
import axios from "axios";
import '../../stylesheets/main.css';

export default function AdminWorkshop() {
      const clientToken = localStorage.getItem('clientToken');
      // still need to send a request to server
      // render logic below if match property comes back as true
      const logout = async () => {
            const response = await axios.post('http://localhost:3001/admin/destroyauth', {
                  clientToken: clientToken
            })

            const match = response.data.match;

            if (match === true) {
                  localStorage.removeItem('clientToken')
                  document.location.reload()
            } else {
                  window.alert('You are not logged in')
                  document.location.reload()
            }
      }

      // submit logic below. The number associated with each option in the select element will correspond to a route which the admin will be redirected to
      const submitHandler = () => {
            console.log('submit handler')
      }

      return (
            <div className="container-fluid workshop-container">
                  <h1>Admin Workshop</h1>
                  <select className="form-select" aria-label="Default select example">
                        <option selected>Choose a modification option</option>
                        <option value="1">Delete a beer tap</option>
                        <option value="2">Add a beer tap</option>
                        <option value="3">Delete a newsletter</option>
                        <option value="4">Add a newsletter</option>
                  </select>
                  <button className="btn btn-large btn-primary" onClick={() => { submitHandler() }}>Submit</button>
                  <div className="d-flex justify-content-start logout-button-container">
                        <button className="btn btn-large btn-primary" onClick={() => { logout() }}>Logout</button>
                  </div>
            </div>
      )
}