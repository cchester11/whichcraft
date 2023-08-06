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

                  console.log(newsletters)
            } catch (error) {
                  return {
                        Error: error
                  }
            }
      }

      useEffect(() => {
            grabNewsLetters()
      }, [])

      useEffect(() => {
            console.log(newsletters)
      }, [newsletters])

      return (
            // master container for all newsletters
            <div className="container-fluid newsletter-master ml-3 mr-3">
                  {/* grab newsletters state and run map function to grab each large newsletter object */}
                  {newsletters.map((newsletter, index) => (
                        // container that will hold each large newsletter object
                        <div id={`entry-${index + 1}`} key={index} className="container per-newsletter mt-4 ml-2 d-flex flex-column justify-content-center">
                              {Object.entries(newsletter).map(([property, value]) => (
                                    console.log(property, value)
                              ))}
                        </div>
                  ))}
            </div>
      )
};