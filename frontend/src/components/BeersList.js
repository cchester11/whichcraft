import React, { useState, useEffect } from "react";
import '../stylesheets/main.css';
import axios from "axios";

export default function BeersList() {
      // global variable to house the response
      const [ beers, setBeers ] = useState([]);

      async function getBeers() {
            try {
                  const response = await axios.get('http://localhost:3001/beer/allbeers');
                  console.log(response.data)
            } catch (error) {
                  console.error(error);
            }
      }

      useEffect(() => {
            getBeers()
      }, [])
      
      return (
            <div className="container text-center beer-menu">
                  <div className="row">
                        {beers.map((beer, index) => (
                              <div className="card" key={index} value={beer}>
                                    <h5>{beer}</h5>
                              </div>
                        ))}
                  </div>
            </div>
      )
}