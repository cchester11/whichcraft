import React from "react";

export default function ElementSelection(props) {
      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">What would you like to add next?</h1>
                  <div className="m-4">
                        <select className="form-select" aria-label="Default select example">
                              <option defaultValue={null}>Select an element</option>
                              <option value="1">Image</option>
                              <option value="2">Sub-header</option>
                              <option value="3">Paragraph</option>
                              <option value="4">List Item</option>
                        </select>
                        <button 
                              className="btn btn-large btn-primary"
                              onClick={() => {
                                    props.setCurrentForm()
                              }}
                        >
                              Submit
                        </button>
                  </div>
            </div>
      )
};