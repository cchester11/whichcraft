import React, { useState, useEffect } from "react";
import '../stylesheets/main.css';
import axios from "axios";

export default function BeersList() {
      // global variable to house the response
      const [beers, setBeers] = useState([]);

      async function getBeers() {
            try {
                  const response = await axios.get('http://localhost:3001/beer/allbeers');
                  let beerObs = response.data

                  let entries = []

                  for (let i = 0; i < beerObs.length; i++) {
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
                  <div className="row d-flex justify-content-center">
                        {beers.map((beer, index) => (
                              <div className="card" key={index} value={beer} style={{ width: "18rem" }}>
                                    <div className="card-body">
                                          <h5 className="card-title beer-title">
                                                {beer[0]}
                                          </h5>
                                          <h6
                                                className="card-subtitle mb-2 text-body-secondary beer-style"
                                          >
                                                <img
                                                      src="images/stout-beer.png"
                                                      height="40px"
                                                      width="30px"
                                                      alt=""
                                                />
                                                {beer[1]}
                                          </h6>
                                          <div
                                                className="container beer-facts mt-3 mb-3"
                                          >
                                                <ul className="list-group list-group-flush">
                                                      <li
                                                            className="list-group-item fw-lighter beer-fact"
                                                      >
                                                            {beer[2]}
                                                      </li>
                                                      <li
                                                            className="list-group-item fw-lighter beer-fact"
                                                      >
                                                            {beer[3]}
                                                      </li>
                                                      <li
                                                            className="list-group-item fw-lighter beer-fact"
                                                      >
                                                            {beer[4]}
                                                      </li>
                                                </ul>
                                          </div>
                                          <p
                                                className="card-text fw-lighter beer-description"
                                          >
                                                {beer[5]}
                                          </p>
                                          <a href="/" className="btn btn-warning"
                                          >Untappd</a>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}