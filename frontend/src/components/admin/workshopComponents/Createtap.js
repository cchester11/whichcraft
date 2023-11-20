import React from "react";

// this component needs:
// 1. Form
//          Will include inputs for 'title', 'style', 'abv' 'ibu', 'tapNumber', 'additional notes'
// 2. Submit button
// Functionality:
// 1. State management which will store input values
// 2. Submit handler which will use axios and send tap data to create tap api endpoint

export default function Createtap () {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Tap</h1>
            </div>
      );
};