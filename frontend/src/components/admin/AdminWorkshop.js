import React from "react";
import logout from "../../utilities/logout";
import '../../stylesheets/main.css';

export default function AdminWorkshop() {
      const clientToken = localStorage.getItem('clientToken');

      // submit logic below. The number associated with each option in the select element will correspond to a route which the admin will be redirected to
      const submitHandler = () => {
            let selectMenu = document.getElementById('selectMenu'); // Use getElementById
            let optionSelection = selectMenu.value;

            console.log(optionSelection);
      }

      return (
            <div className="container-fluid workshop-container">
                  <h1>Admin Workshop</h1>
                  <select className="form-select" aria-label="Default select example" id="selectMenu">
                        <option selected>Choose a modification option</option>
                        <option value="1">Delete a beer tap</option>
                        <option value="2">Add a beer tap</option>
                        <option value="3">Delete a newsletter</option>
                        <option value="4">Add a newsletter</option>
                  </select>
                  <button className="btn btn-large btn-primary" onClick={() => { submitHandler() }}>Submit</button>
                  <div className="d-flex justify-content-start logout-button-container">
                        <button className="btn btn-large btn-primary" onClick={() => { logout(clientToken) }}>Logout</button>
                  </div>
            </div>
      )
}