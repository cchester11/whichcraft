import React, { useState } from "react";

export default function AddImage (props) {
      const [imageItem, setImageItem] = useState(null);

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addNewsletterForm" className="form-label">Add Image</label>
                        <input
                              className="form-control form-control-sm"
                              id="addNewsletterForm"
                              type="text"
                              placeholder=""
                              aria-label="add newsletter control form"
                              value={imageItem}
                              onChange={(event) => setImageItem(event.target.value)}
                        >
                        </input>
                        <button
                              className="btn btn-large btn-primary m-3"
                              onClick={() => {
                                    /* dont forget to define image name*/
                                    props.newsLetterOb.push({
                                          imagename: {
                                                element: "image",
                                                image: `images/${imagename}.png`,
                                                resize: true
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