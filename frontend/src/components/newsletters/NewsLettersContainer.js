// react hooks and functionality
import React, { useState, useEffect } from "react";
// import hard coded css
import '../../stylesheets/main.css';
// axios library used to send request to the server
import axios from 'axios';
// import our resizeImage utility
import resizeImage from "../../utilities/resizeImage";

export default function NewsLettersContainer() {
      // state for the entire newletter json object storing all newsletter data
      const [newsletters, setNewsLetters] = useState([]);
      // state containing resized images
      const [resizedImages, setResizedImages] = useState({});

      const grabNewsLetters = async () => {
            try {
                  // retrieve newsletter objects
                  const response = await axios.get("http://localhost:3001/newsletters/allnewsletters")
                  let newsLetterObs = response.data.data.newsLetters

                  console.log('request sent for newsletters')

                  // apply newsletter obs to newsletter state
                  setNewsLetters(newsLetterObs)

                  // variable in which our resizedImage will be stored
                  let resizedImagesObj = {};

                  //access each newsletter nested object
                  for(const newsletter of newsLetterObs) {
                        // process each property/value of each newsletter obj
                        for (const [property, value] of Object.entries(newsletter)) {
                              if(value.element === 'image' && value.resize) {
                                    // resize the image
                                    const resizedImage = await resizeImage(process.env.PUBLIC_URL + value.image, 900, 900);

                                    // place the resizedImage as a nested object in our resizedImagesObj variable
                                    resizedImagesObj[property] = resizedImage;
                              }
                        }
                  }

                  // set resizedImages state
                  setResizedImages(resizedImagesObj);

                  return;
            } catch (error) {
                  return {
                        Error: error
                  }
            }
      }

      useEffect(() => {
            grabNewsLetters()
      }, [])

      /**
            * Check property's "order" value
            * Push to order array
            * Check that array is sorted 
            * If "order" value does not equal previous "order" value ++ than return an error
      */

      return (
            // master container for all newsletters
            <div className="container-fluid newsletter-master ml-3 mr-3">
                  {/* grab newsletters state and run map function to grab each large newsletter object */}
                  {newsletters.map((newsletter, index) => (
                        // container that will hold each large newsletter object
                        <div id={`entry-${index + 1}`} key={index} className="container per-newsletter d-flex flex-column justify-content-center">
                              {Object.entries(newsletter).map(([property, value]) => (
                                    <div key={property} className="individual-newsletter">
                                          {/* apply the resize function here if  */}
                                          {value.element === "image" && value.resize && resizedImages[property] &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <img src={resizedImages[property]} alt={value.element} />
                                                </div>
                                          }
                                          {value.element === "image" && !value.resize &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <img src={process.env.PUBLIC_URL + value.image} alt={value.element} />
                                                </div>
                                          }
                                          {value.element === "heading" &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <h1 className="newsletter-title m-4">{value.text}</h1>
                                                </div>
                                          }
                                          {value.published &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <h1 className="newsletter-title m-4">{value.published}</h1>
                                                </div>
                                          }
                                          {value.element === "paragraph" &&
                                                <div className="container newsletter-section d-flex justify-content-center mt-5">
                                                      <p>{value.text}</p>
                                                </div>
                                          }
                                          {value.element === "sub-heading" &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <h3 className="newsletter-title m-4">{value.text}</h3>
                                                </div>
                                          }
                                          {value.element === "list" &&
                                                <ul className="list-group list-group-flush">
                                                      <span className="container mt-2"></span>
                                                      <li className="p-3 list-group-item newsletter-list-group-item mt-2 fw-lighter rounded-start news-letter-item">{value.text}</li>
                                                </ul>
                                          }
                                          {property.startsWith("wine-item") && value.paragraph1.element === "paragraph" &&
                                                <ul className="list-group list-group-flush">
                                                      <span className="container mt-2"></span>
                                                      <li className="p-3 list-group-item newsletter-list-group-item mt-2 fw-lighter rounded-start news-letter-item">{value.paragraph1.text}</li>
                                                </ul>
                                          }
                                          {property.startsWith("wine-item") && value.paragraph2.element === "paragraph" &&
                                                <ul className="list-group list-group-flush">
                                                      <span className="container mt-2"></span>
                                                      <li className="p-3 list-group-item newsletter-list-group-item mt-2 fw-lighter rounded-start news-letter-item">{value.paragraph2.text}</li>
                                                </ul>
                                          }
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      )
};