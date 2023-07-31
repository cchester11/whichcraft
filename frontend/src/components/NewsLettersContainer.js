import React from "react";
import '../stylesheets/main.css';
import axios from 'axios';

export default function NewsLettersContainer () {
      // make axios call to pull news letter data
      // how to structure the requested data so that it can be properly rendered in component below?
      // conditionals that provide the next newsletter value with a corresponding html element
      // for ex: if next newsletter property in the array is img then supply with img element

      return (
            <div cassName="container-fluid newsletter-master ml-3 mr-3">
                  // for each entry
                  <div id="entry-1" className="container per-newsletter mt-4 ml-2 d-flex flex-column justify-content-center">
                        
                  </div>
            </div>
      )
};