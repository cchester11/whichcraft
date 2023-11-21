import React, { useState } from "react";
import axios from "axios";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type in a tap name to the form input or a dropdown list can populate and the admin can select what tap to delete from the dropdown
// 2. A submit handler that will send a request to the delete tap api endpoint 
// Notes:
// Change form to the search implementation so that as the admin types in a title, it will be found for him

export default function Deletetap () {
      const [tapToDelete, setTapToDelete] = useState("");

      const submitHandler = async () => {
            // I need to save the value the admin places in the input below to the tapToDelete state
            // then I need to send an axios request to /taps/deletetap
            try {
                  if(tapToDelete.trim() === "") {
                        alert("Please enter a tap name");
                        return;
                  };
                  
                  const response = await axios.post("http://localhost:3001/taps/deletetap", {
                        title: tapToDelete
                  });

                  window.alert(response.data.message)
                  console.log(response);

                  setTapToDelete("");
            } catch (error) {
                  alert("Error: " + error)
            }
      };

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Tap</h1>
                  <div className="mb-3">
                        <label htmlFor="deleteTapForm" className="form-label">Delete Tap</label>
                        <input 
                              className="form-control form-control-sm" 
                              id="deleteTapForm" 
                              type="text" 
                              placeholder="Ex: Blue Owl Cherry Blossom" 
                              aria-label="delete beer control form"
                              value={tapToDelete}
                              onChange={(event) => setTapToDelete(event.target.value)}
                        >
                        </input>
                        <button className="btn btn-large btn-primary" onClick={submitHandler}>Submit</button>
                  </div>
            </div>
      );
};