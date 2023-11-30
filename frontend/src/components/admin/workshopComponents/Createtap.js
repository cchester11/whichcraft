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
      // add state here for all the beer elements

      // submit handler that will send the elements to the endpoint

      // toggle modal handler

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Tap</h1>
                  <div className="m-4">
                        <label htmlFor="addTapTitle" className="form-label">Tap Title</label>
                        <input className="form-control form-control-sm mb-3" id="addTapTitle" type="text" placeholder="Ex: Vista Dark Skies" aria-label="add title control form"></input>
                        <label htmlFor="addTapStyle" className="form-label">Tap Style</label>
                        <input className="form-control form-control-sm mb-3" id="addTapStyle" type="text" placeholder="Ex: Dark Lager" aria-label="add style control form"></input>
                        <label htmlFor="addTapAbv" className="form-label">ABV</label>
                        <input className="form-control form-control-sm mb-3" id="addTapAbv" type="text" placeholder="Ex: 8%" aria-label="add tap control form"></input>
                        <label htmlFor="addTapIbu" className="form-label">IBU</label>
                        <input className="form-control form-control-sm" id="addTapIbu" type="text" placeholder="Ex: 24" aria-label="add tap control form"></input>
                        <label htmlFor="addTapNumber" className="form-label">Tap Number</label>
                        <input className="form-control form-control-sm" id="addTapNumber" type="text" placeholder="Ex: #13" aria-label="add tap control form"></input>
                        <label htmlFor="addTapNotes" className="form-label">Additional Notes</label>
                        <textarea className="form-control" rows="3" id="addTapNotes" type="text" placeholder="Ex: This is a light and interesting lager barrel aged in Still Austin whiskey barrels." aria-label="add tap control form"></textarea>

                        <button className="btn btn-large btn-primary mt-3 mb-3">Submit</button>
                  </div>
                  <div className="d-flex justify-content-start logout-button-container m-3">
                        <button className="btn btn-large btn-primary" onClick={() => { logout(clientToken) }}>Logout</button>
                  </div>
            </div>
      );
};