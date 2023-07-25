import React from "react";
import '../stylesheets/main.css';
import axios from "axios";

export default function BeersList() {
      // global variable to house the response
      let beers;

      async function getBeers() {
            try {
                  const response = await axios.get('http://localhost:3001/beer/allbeers');
                  beers = response.data
                  
                  for(let i = 0; i < beers.length; i ++) {
                        let curr = beers[i]

                        console.log(curr)
                  }
            } catch (error) {
                  console.error(error);
            }
      }

      getBeers()
      return (
            <div className="container text-center beer-menu">
                  <div className="row">
                        <div className="">Hello</div>
                        {/* map data into cards */}
                  </div>
            </div>
      )
}