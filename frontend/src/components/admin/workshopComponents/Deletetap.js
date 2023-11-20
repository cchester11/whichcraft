import React from "react";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type in a tap name to the form input or a dropdown list can populate and the admin can select what tap to delete from the dropdown
// 2. A submit handler that will send a request to the delete tap api endpoint 

export default function Deletetap () {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Tap</h1>
            </div>
      );
};