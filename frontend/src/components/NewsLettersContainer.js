import React, { useState, useEffect } from "react";
import '../stylesheets/main.css';
import axios from 'axios';

export default function NewsLettersContainer() {
      const [newsletters, setNewsLetters] = useState([])

      async function grabNewsLetters() {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewsletters")
                  let newsLetterObs = response.data.data.newsLetters
                  let entries = []

                  for (let i = 0; i < newsLetterObs.length; i++) {
                        let curr = newsLetterObs[i]

                        entries.push([
                              curr
                        ])
                  }

                  setNewsLetters(entries)
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
            console.log('newsletters: ', newsletters)
      }, [newsletters])

      return (
            // master container for all newsletters
            <div className="container-fluid newsletter-master ml-3 mr-3">
                  {/* grab newsletters state and run map function to grab each large newsletter object */}
                  {newsletters.map((newsletter, index) => (
                        // container that will hold each large newsletter object
                        <div id={`entry-${index + 1}`} key={index} className="container per-newsletter mt-4 ml-2 d-flex flex-column justify-content-center">
                              {/* from here use a function like the one below to access each property of the newsletter
                              run a loop preferably that will assign each property an element */}
                              {newsletter.map((item) => (
                                    <div>
                                          <p>hello</p>
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      )
};