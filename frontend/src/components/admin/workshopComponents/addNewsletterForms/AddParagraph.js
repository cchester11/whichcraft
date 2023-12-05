import React, { useState } from "react";

export default function AddParagraph(props) {
      const [paragraph, setParagraph] = useState("");

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addParagraph" className="form-label">Add Paragraph</label>
                        <textarea
                              className="form-control"
                              rows="10"
                              id="addTapNotes"
                              type="text"
                              placeholder="Ex: This is a light and interesting lager barrel aged in Still Austin whiskey barrels."
                              aria-label="add tap control form"
                              value={paragraph}
                              onChange={(event) => setParagraph(event.target.value)}
                        >
                        </textarea>
                        <button
                              className="btn btn-large btn-primary"
                              onClick={() => {
                                    props.newsLetterOb.push({
                                          paragraph_1: {
                                                element: "paragraph",
                                                text: paragraph
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