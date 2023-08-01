import React, { useEffect } from "react";
import '../stylesheets/main.css';
import axios from 'axios';

export default function NewsLettersContainer() {
      // const [newsletters, setNewsLetters] = useState([])

      async function grabNewsLetters() {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewsletters")
                  let newsLetterObs = response.data.data.newsLetters
                  let entries = []

                  for(let i = 0; i < newsLetterObs.length; i ++) {
                        let curr = newsLetterObs[i]

                        entries.push([
                              curr
                        ])
                  }

                  console.log(entries)
            } catch (error) {
                  return {
                        Error: error
                  }
            }
      }

      useEffect(() => {
            grabNewsLetters()
      }, [])

      return (
            <div className="container-fluid newsletter-master ml-3 mr-3">
                  <div id="entry-1" className="container per-newsletter mt-4 ml-2 d-flex flex-column justify-content-center">

                  </div>
            </div>
      )
};