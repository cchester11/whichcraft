import React from "react";

// This component needs:
// 1. A dynamic form
// 2. State management for all newsletter items
// 3. Submit button
// Functionality:
// 1. Dynamic form
//          Needs to allow admin to choose what component he wants to add next (a drop down that has options like 'image', 'header', 'paragraph', etc)
// 2. Submit handler that sends all stored state to the create newsletter endpoint
// 3. A way to send images to the images directory and map the images url to stored state for transfer to the json

export default function CreateNewsletter() {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addNewsletterForm" className="form-label">Add Newsletter</label>
                        <input className="form-control form-control-sm" id="addNewsletterForm" type="text" placeholder="Ex: Hocus Pocus" aria-label="add newsletter control form"></input>
                        <button className="btn btn-large btn-primary">Submit</button>
                  </div>
            </div>
      )
};