import React, { useState } from "react";

export default function AddImage(props) {
      const [imageItem, setImageItem] = useState("");

      // file change function used when a file is placed into the 'choose file' input
      const handleFileChange = (event) => {
            const file = event.target.files[0];
            setImageItem(file);
      };

      // handle submission function runs when the parent form is submitted
      const handleUpload = async (event) => {
            event.preventDefault();

            // initializing FormData will set a new object which will store the file selected and input by the admin
            const formData = new FormData();
            formData.append("imageInput", imageItem);

            try {
                  const response = await fetch("http://localhost:3001/images/uploadimage", {
                        method: "post",
                        body: formData
                  })

                  console.log(response);

                  props.newsLetterOb.push({
                        imageItem: {
                              element: "image",
                              image: `images/${imageItem.name}`,
                              resize: true
                        }
                  });

                  props.setCurrentForm("ElementSelection");
            } catch (error) {
                  console.error("Error uploading image:", error)
            }
      };

      return (
            <div>
                  <h1 className="container-fluid d-flex justify-content-center tap-menu-header mt-5">Add Newsletter</h1>
                  <div className="m-4">
                        <div className="mb-3">
                              <label htmlFor="formFile" className="form-label">Add Image</label>
                              <form 
                                    action="/images/uploadimage" 
                                    encType="multipart/form-data" 
                                    method="post"
                                    onSubmit={handleUpload}
                              >
                                    <input
                                          className="form-control"
                                          type="file"
                                          id="formFile"
                                          name="imageInput"
                                          onChange={handleFileChange}
                                    >
                                    </input>
                                    <button
                                          type="submit"
                                          className="btn btn-large btn-primary m-3"
                                    >
                                          Submit
                                    </button>
                              </form>
                        </div>
                  </div>
            </div>
      )
};