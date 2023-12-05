import React, { useState } from "react";

export default function AddSubHeader (props) {
      const [subheader, setSubheader] = useState("");

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addNewsletterForm" className="form-label">Add Subheader</label>
                        <input 
                              className="form-control form-control-sm" 
                              id="addNewsletterForm" 
                              type="text" 
                              placeholder="Ex: New Beers this Week" 
                              aria-label="add newsletter control form"
                              value={subheader}
                              onChange={(event) => setSubheader(event.target.value)}
                        >
                        </input>
                        <button 
                              className="btn btn-large btn-primary"
                              onClick={() => {
                                    props.newsLetterOb.push({
                                          subheading: {
                                                element: "sub-heading",
                                                text: subheader
                                          }
                                    })
                                    props.setCurrentForm("ElementSelection")
                              }}
                        >
                              Submit
                        </button>
                  </div>
            </div>
      )
};