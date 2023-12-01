import React, { useState, useEffect } from "react";
import '../../stylesheets/main.css';
import axios from "axios";

export default function TapsList() {
      // global variable to house the response
      const [taps, settaps] = useState([]);

      async function gettaps() {
            try {
                  const response = await axios.get('http://localhost:3001/taps/alltaps');
                  let tapObs = response.data

                  let entries = []

                  for (let i = 0; i < tapObs.length; i++) {
                        let curr = tapObs[i]

                        entries.push([
                              curr.title,
                              curr.style,
                              curr.abv,
                              curr.IBU,
                              curr.tapNumber,
                              curr.AdditionalNotes
                        ])
                  }

                  settaps(entries)
            } catch (error) {
                  console.error(error);
            }
      }

      useEffect(() => {
            gettaps()
      }, []);

      return (
            <div className="container-fluid text-center tap-menu">
                  <div className="row d-flex justify-content-center">
                        {taps.map((tap, index) => (
                              <div className="card m-2" key={index} value={tap} style={{ width: "18rem" }}>
                                    <div className="card-body">
                                          <h5 className="card-title tap-title">
                                                {tap[0]}
                                          </h5>
                                          <h6
                                                className="card-subtitle mb-2 text-body-secondary tap-style"
                                          >
                                                <img
                                                      src="images/regular-tap.png"
                                                      height="40px"
                                                      width="30px"
                                                      alt=""
                                                />
                                                {tap[1]}
                                          </h6>
                                          <div
                                                className="container tap-facts mt-3 mb-3"
                                          >
                                                <ul className="list-group list-group-flush">
                                                      <li
                                                            className="list-group-item fw-lighter tap-fact"
                                                      >
                                                            ABV: {tap[2]}
                                                      </li>
                                                      <li
                                                            className="list-group-item fw-lighter tap-fact"
                                                      >
                                                            IBU: {tap[3]}
                                                      </li>
                                                      <li
                                                            className="list-group-item fw-lighter tap-fact"
                                                      >
                                                            Tap Number: {tap[4]}
                                                      </li>
                                                </ul>
                                          </div>
                                          <p
                                                className="card-text fw-lighter tap-description"
                                          >
                                                {tap[5]}
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