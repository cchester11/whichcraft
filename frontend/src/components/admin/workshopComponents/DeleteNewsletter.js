import React from "react";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type the title of a newsletter into an input or the admin can select a newsletter to delete from an options list
// 2. A submit handler that sends a request to the delete newsletter api

export default function DeleteNewsletter () {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Newsletter</h1>
                  <div className="mb-3">
                        <label for="deleteNewsletterForm" class="form-label">Delete Newsletter</label>
                        <input class="form-control form-control-sm" id="deleteNewsletterForm" type="text" placeholder="Ex: Hocus Pocus" aria-label="delete newsletter control form"></input>
                        <button className="btn btn-large btn-primary">Submit</button>
                  </div>
            </div>
      );
};