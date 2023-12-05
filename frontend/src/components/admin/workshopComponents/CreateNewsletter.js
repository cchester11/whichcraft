import React, { useState, useEffect} from "react";
import AddTitle from "./addNewsletterForms/AddTitle";
import logout from "../../../utilities/logout";
import ElementSelection from "./addNewsletterForms/ElementSelection";
import AddSubHeader from "./addNewsletterForms/AddSubHeader";
import AddParagraph from "./addNewsletterForms/AddParagraph";
import AddListItem from "./addNewsletterForms/AddListItem";

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
      const [newsLetterOb] = useState([]);

      console.log(newsLetterOb)

      const renderForm = () => {
            switch(currentForm) {
                  case "AddTitle": 
                        return < AddTitle setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
                  case "ElementSelection":
                        return < ElementSelection setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
                  case "2":
                        return < AddSubHeader setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
                  case "3":
                        return < AddParagraph setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
                  case "4":
                        return < AddListItem setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
                  default:
                        return < AddTitle setCurrentForm = { setCurrentForm } newsLetterOb = { newsLetterOb } />;
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