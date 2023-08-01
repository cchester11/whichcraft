import React, { useEffect } from "react";
import '../stylesheets/main.css';
import axios from 'axios';

export default function NewsLettersContainer() {
      async function grabNewsLetters() {
            try {
                  const response = await axios.get("http://localhost:3001/newsletters/allnewsletters")
                  
                  console.log(response.data.data.newsLetters)
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