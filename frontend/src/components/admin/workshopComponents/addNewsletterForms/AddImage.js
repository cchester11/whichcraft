import React, { useState } from "react";

export default function AddImage(props) {
      const [imageItem, setImageItem] = useState("");

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <div class="mb-3">
                              <label htmlFor="formFile" className="form-label">Add Image</label>
                              <input 
                                    className="form-control" 
                                    type="file" 
                                    id="formFile"
                                    value={imageItem}
                                    onChange={(event) => setImageItem(event.target.value)}
                              >
                              </input>
                        </div>
                        <button
                              className="btn btn-large btn-primary m-3"
                              onClick={() => {
                                    /* dont forget to define image name*/
                                    props.newsLetterOb.push({
                                          imageItem: {
                                                element: "image",
                                                image: `images/${imageItem}`,
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