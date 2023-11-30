import React, { useEffect, useState } from "react";
import axios from "axios";
import logout from "../../../utilities/logout";
import WorkshopModal from "./modals/Modal";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type in a tap name to the form input or a dropdown list can populate and the admin can select what tap to delete from the dropdown
// 2. A submit handler that will send a request to the delete tap api endpoint 
// Notes:
// 1. Change form to the search implementation so that as the admin types in a title, it will be found for him
//    Implementation:
//          1. Write a get api in taps controllers that will grab all beer titles stored in json
//          2. Call that api endpoint here
//          3. Place returned values in an array
//          4. Loop through that array to place options in the datalist element

export default function Deletetap () {
      const clientToken = localStorage.getItem('clientToken');

      const [tapToDelete, setTapToDelete] = useState("");
      const [tapTitles, setTapTitles] = useState([]);
      const [successModal, setSuccessModal] = useState(false);
      const [modalHeaderState, setModalHeaderState] = useState("");
      const [modalBodyState, setModalBodyState] = useState("");

      const grabTapTitles = async () => {
            try {
                  const response = await axios.get("http://localhost:3001/taps/alltaptitles");
                  setTapTitles(response.data.data)
            } catch (error) {
                  window.alert('Error: ' + error)
            }
      };

      const toggleSuccessModal = () => {
            setSuccessModal(false);
      };

      const submitHandler = async () => {
            try {
                  if(tapToDelete.trim() === "") {
                        alert("Please enter a tap name");
                        return;
                  };
                  
                  const response = await axios.post("http://localhost:3001/taps/deletetap", {
                        title: tapToDelete
                  });

                  console.log(response.data.message);

                  setTapToDelete("");
                  setSuccessModal(true);
                  setModalHeaderState(response.data.header);
                  setModalBodyState(response.data.message);
            } catch (error) {
                  setModalHeaderState("Error")
                  setModalBodyState(error)
            }
      };

      // here is the useEffect that launches the axios call and function above
      useEffect(() => {
            grabTapTitles()
      }, []);
      
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Tap</h1>
                  <div className="m-4">
                        <label htmlFor="deleteTapForm" className="form-label">Delete Tap</label>
                        <input 
                              className="form-control form-control-sm"
                              list="titleList"
                              id="deleteTapForm" 
                              type="text" 
                              placeholder="Ex: Blue Owl Cherry Blossom" 
                              aria-label="delete beer control form"
                              value={tapToDelete}
                              onChange={(event) => setTapToDelete(event.target.value)}
                        >
                        </input>
                        <datalist id="titleList">
                              {/* map through all titles from json here */}
                              {tapTitles.map((title, index) => (
                                    <option key={index} value={title}></option>
                              ))}
                        </datalist>
                        <button className="btn btn-large btn-primary" onClick={submitHandler}>Submit</button>
                  </div>
                  <div className="d-flex justify-content-start logout-button-container m-3">
                        <button className="btn btn-large btn-primary" onClick={() => { logout(clientToken) }}>Logout</button>
                  </div>
                  < WorkshopModal isOpen={successModal} toggle={toggleSuccessModal} headerState={modalHeaderState} bodyState={modalBodyState} />
            </div>
      );
};