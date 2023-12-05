import React from "react";

export default function AddTitle () {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addNewsletterForm" className="form-label">Add Title</label>
                        <input className="form-control form-control-sm" id="addNewsletterForm" type="text" placeholder="Ex: Hocus Pocus" aria-label="add newsletter control form"></input>
                        <button className="btn btn-large btn-primary">Submit</button>
                  </div>
            </div>
      )
};