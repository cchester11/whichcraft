import React, { useState, useEffect } from "react";
import '../stylesheets/main.css';
import axios from 'axios';

export default function NewsLettersContainer() {
      // state for the entire newletter json object storing all newsletter data
      const [newsletters, setNewsLetters] = useState([])

      async function grabNewsLetters() {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewsletters")
                  let newsLetterObs = response.data.data.newsLetters

                  setNewsLetters(newsLetterObs)

                  console.log('request sent')
            } catch (error) {
                  return {
                        Error: error
                  }
            }
      }

      useEffect(() => {
            grabNewsLetters()
      }, [newsletters])

      return (
            // master container for all newsletters
            <div className="container-fluid newsletter-master ml-3 mr-3">
                  {/* grab newsletters state and run map function to grab each large newsletter object */}
                  {newsletters.map((newsletter, index) => (
                        // container that will hold each large newsletter object
                        <div id={`entry-${index + 1}`} key={index} className="container per-newsletter mt-4 ml-2 d-flex flex-column justify-content-center">
                              {Object.entries(newsletter).map(([property, value]) => (
                                    // console.log('property:' + property, 'value:' + value)
                                    <div key={property}>
                                          {value.element === "heading" &&
                                                <div className="container-fluid d-flex justify-content-center">
                                                      <h1 className="newsletter-title m-4">{value.text}</h1>
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
                                                      <li className="list-group-item fw-lighter">{value.text}</li>
                                                </ul>
                                          }
                                          {property.startsWith("wine-item") && value.paragraph1.element === "paragraph" && 
                                                <ul className="list-group list-group-flush">
                                                      <li className="list-group-item fw-lighter">{value.paragraph1.text}</li>
                                                </ul>
                                          }
                                          {property.startsWith("wine-item") && value.paragraph2.element === "paragraph" && 
                                                <ul className="list-group list-group-flush">
                                                      <li className="list-group-item fw-lighter">{value.paragraph2.text}</li>
                                                </ul>
                                          }
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      )
};