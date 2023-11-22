import React, { useState, useEffect } from "react";
import axios from "axios";

// This component needs:
// 1. A dynamic form
// 2. State management for all newsletter items
// 3. Submit button
// Functionality:
// 1. Dynamic form
//          Needs to allow admin to choose what component he wants to add next (a drop down that has options like 'image', 'header', 'paragraph', etc)
// 2. Submit handler that sends all stored state to the create newsletter endpoint
// 3. A way to send images to the images directory and map the images url to stored state for transfer to the json

export default function CreateNewsletter () {
      const [letterToDelete, setLetterToDelete] = useState("");
      const [letterTitles, setLetterTitles] = useState([]);

      const grabLetterTitles = async() => {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewslettertitles");
                  setLetterTitles(response.data.data)
            } catch (error) {
                  window.alert("Error: " + error)
            }
      };

      const submitHandler = async () => {
            try {
                  if(letterToDelete.trim() === "") {
                        alert("Please enter a tap name");
                        return;
                  }

                  const response = await axios.post("http://localhost:3001/newsletters/deletenewsletter")

                  window.alert(response.data.message)

                  setLetterToDelete("");
            } catch (error) {
                  window.alert("Error: " + error)
            }
      };

      useEffect(() => {
            grabLetterTitles()
      }, []);

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="mb-3">
                        <label htmlFor="deleteLetterForm" className="form-label">Delete Newsletter</label>
                        <input
                              className="form-control form-control-sm"
                              list="titleList"
                              id="deleteLetterForm"
                              type="text"
                              placeholder="Ex: Hocus Pocus"
                              aria-label="delete a newsletter control form"
                              value={letterToDelete}
                              onChange={(event) => setLetterToDelete(event.target.value)}
                        >
                              {/* read value of the input, setstate, place state value as value of input */}
                        </input>
                        <datalist id="titleList">
                              {letterTitles.map((title, index) => (
                                    <option key={index} value={title}></option>
                              ))}
                        </datalist>
                        <button className="btn btn-large btn-primary" onClick={submitHandler}>Submit</button>
                  </div>
            </div>
      );
};