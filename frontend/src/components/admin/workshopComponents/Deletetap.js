import React, { useState } from "react";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type in a tap name to the form input or a dropdown list can populate and the admin can select what tap to delete from the dropdown
// 2. A submit handler that will send a request to the delete tap api endpoint 

export default function Deletetap () {
      const [tapToDelete, setTapToDelete] = useState("");

      const submitHandler = () => {
            // I need to save the value the admin places in the input below to the tapToDelete state
            // then I need to send an axios request to /taps/deletetap
      };

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Tap</h1>
                  <div className="mb-3">
                        <label for="deleteTapForm" class="form-label">Delete Tap</label>
                        <input class="form-control form-control-sm" id="deleteTapForm" type="text" placeholder="Ex: Blue Owl Cherry Blossom" aria-label="delete beer control form"></input>
                        <button className="btn btn-large btn-primary">Submit</button>
                  </div>
            </div>
      );
};