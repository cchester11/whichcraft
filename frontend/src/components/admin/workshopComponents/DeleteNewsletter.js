import React, { useState, useEffect } from "react";
import axios from "axios";

// This component needs:
// 1. A form
// 2. A submit button
// Functionality:
// 1. Either the admin can type the title of a newsletter into an input or the admin can select a newsletter to delete from an options list
// 2. A submit handler that sends a request to the delete newsletter api

export default function DeleteNewsletter() {
      const [letterToDelete, setLetterToDelete] = useState("");
      const [letterTitles, setLetterTitles] = useState([]);

      const grabLetterTitles = async () => {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewslettertitles");
                  setLetterTitles(response.data.data)
            } catch (error) {
                  window.alert("Error: " + error)
            }
      };

      const submitHandler = async () => {
            try {
                  if (letterToDelete.trim() === "") {
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
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Delete Newsletter</h1>
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