import React, { useState, useEffect } from "react";
import '../stylesheets/main.css';
import axios from "axios";

export default function BeersList() {
      // global variable to house the response
      const [ beers, setBeers ] = useState([]);

      async function getBeers() {
            try {
                  const response = await axios.get('http://localhost:3001/beer/allbeers');
                  let beerObs = response.data

                  let entries = []

                  for(let i = 0; i < beerObs.length; i ++) {
                        let curr = beerObs[i]

                        entries.push([
                              curr.title, 
                              curr.style,
                              curr.abv,
                              curr.IBU,
                              curr.beerNumber,
                              curr.AdditionalNotes
                        ])
                  }

                  setBeers(entries)
            } catch (error) {
                  console.error(error);
            }
      }

      useEffect(() => {
            getBeers()
      }, [])

      useEffect(() => {
            console.log("beers state", beers)
      }, [beers])
      
      return (
            <div className="container text-center beer-menu">
                  <div className="row">
                        {beers.map((beer, index) => (
                              <div className="card" key={index} value={beer}>
                                    <p>{beer[0]}</p>
                              </div>
                        ))}
                  </div>
            </div>
      )
}