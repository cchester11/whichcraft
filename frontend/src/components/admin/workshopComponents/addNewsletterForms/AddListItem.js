import React, { useState } from "react";

export default function AddListItem(props) {
      const [listItem, setListItem] = useState("");

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <label htmlFor="addNewsletterForm" className="form-label">Add List Item</label>
                        <input
                              className="form-control form-control-sm"
                              id="addNewsletterForm"
                              type="text"
                              placeholder="Ex: 6.5% Vista Hive Mind - This honey ale was brewed with wild yeast and 150 lbs of Central Texas Honey donated by 25 Central Texas beekeepers."
                              aria-label="add newsletter control form"
                              value={listItem}
                              onChange={(event) => setListItem(event.target.value)}
                        >
                        </input>
                        <button
                              className="btn btn-large btn-primary"
                              onClick={() => {
                                    props.newsLetterOb.push({
                                          subheading: {
                                                element: "list",
                                                text: listItem
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