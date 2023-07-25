import React from "react";
import '../stylesheets/main.css';
import axios from "axios";

export default function BeersList() {
      // grab all data from backend using axios
      // map beer data into the rows below
      async function getBeers() {
            try {
                  const response = await axios.get('beers/allbeers');
                  console.log(response);
            } catch (error) {
                  console.error(error);
            }
      }

      getBeers()
      return (
            <div className="container text-center beer-menu">
                  <div className="row">
                        <div>Hello</div>
                  </div>
            </div>
      )
}