import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../utilities/logout";
import '../../stylesheets/main.css';

export default function AdminWorkshop() {
      const [optionSelection, setOptionSelection] = useState("");
      const history = useNavigate();
      const clientToken = localStorage.getItem('clientToken');

      // submit logic below. The number associated with each option in the select element will correspond to a route which the admin will be redirected to
      const submitHandler = () => {
            switch (optionSelection) {
                  default: 
                        history('/workshop');
                        break;
                  case "1":
                        history('/workshop/deletebeer');
                        break;
                  case "2":
                        history('/workshop/createbeer');
                        break;
                  case "3":
                        history('/workshop/deletenewsletter');
                        break;
                  case "4":
                        history('/workshop/createnewsletter');
                        break;
            };
      }

      return (
            <div className="container-fluid workshop-container">
                  <h1>Admin Workshop</h1>
                  <select 
                  className="form-select" 
                  aria-label="Default select example" 
                  id="selectMenu"
                  value={optionSelection}
                  onChange={(event) => setOptionSelection(event.target.value)}
                  >
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