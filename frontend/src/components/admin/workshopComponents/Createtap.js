import React from "react";
import logout from "../../../utilities/logout";

// this component needs:
// 1. Form
//          Will include inputs for 'title', 'style', 'abv' 'ibu', 'tapNumber', 'additional notes'
// 2. Submit button
// Functionality:
// 1. State management which will store input values
// 2. Submit handler which will use axios and send tap data to create tap api endpoint

export default function Createtap () {
      const clientToken = localStorage.getItem('clientToken');

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Tap</h1>
                  <div className="m-4">
                        <label htmlFor="addTapForm" className="form-label">Add Tap</label>
                        <input className="form-control form-control-sm" id="addTapForm" type="text" placeholder="Ex: Vista Dark Skies" aria-label="add tap control form"></input>
                        <button className="btn btn-large btn-primary">Submit</button>
                  </div>
                  <div className="d-flex justify-content-start logout-button-container m-3">
                        <button className="btn btn-large btn-primary" onClick={() => { logout(clientToken) }}>Logout</button>
                  </div>
            </div>
      );
};