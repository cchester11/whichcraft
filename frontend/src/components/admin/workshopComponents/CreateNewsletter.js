import React, { useState} from "react";
import AddTitle from "./addNewsletterForms/AddTitle";
import logout from "../../../utilities/logout";

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
      const clientToken = localStorage.getItem('clientToken');

      const [currentForm, setCurrentForm] = useState("AddTitle");

      const renderForm = () => {
            switch(currentForm) {
                  case "AddTitle": 
                        return < AddTitle setCurrentForm = { setCurrentForm } />;
                  default:
                        return < AddTitle setCurrentForm = { setCurrentForm } />;
            }
      }

      return (
            <div>
                  {renderForm()}
                  <div className="d-flex justify-content-start logout-button-container m-3">
                        <button className="btn btn-large btn-primary" onClick={() => { logout(clientToken) }}>Logout</button>
                  </div>
            </div>
      )
};