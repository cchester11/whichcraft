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
                              curr.tapCategory,
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

      const tapsByCategory = taps.reduce((acc, tap) => {
            const category = tap[5] || "Other";

            acc[category] = acc[category] || [];

            acc[category].push(tap)

            return acc
      }, {})

      console.log(tapsByCategory)

      return (
            <div className="accordion accordion-flush" id="taps-accordion">
                  {/* loops through each key in the tapsByCategory object */}
                  {Object.entries(tapsByCategory).map(([category, tapsInCategory], index) => (
                        <div className="accordion-item" key={index}>
                              <h2 className="accordion-header" id={`heading-${index}`}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                          {category}
                                    </button>
                              </h2>
                              <div className="accordion-collapse collapse" id={`collapse${index}`} data-bs-parent="taps-accordion">
                                    <div className="accordion-body">
                                          {/* we've already extracted the tapsInCategory so we don't need to employ the Object logic. We can just employ the map method directly */}
                                          <div className="hstack gap-5">
                                                {tapsInCategory.map((tap, index) => (
                                                      <div className="card overflow-x-scroll" id={index}>
                                                            <div className="card-body d-flex flex-row">
                                                                  <div>
                                                                        <h5 className="card-title border-bottom">
                                                                              {tap[0]}
                                                                        </h5>
                                                                        <h6 className="card-subtitle mb-2">
                                                                              {tap[1]}
                                                                        </h6>
                                                                        <p className="card-text">
                                                                              {tap[6]}
                                                                        </p>
                                                                  </div>
                                                                  <div>
                                                                        <ul className="list-group list-group-flush m-2">
                                                                              <li className="list-group-item">ABV: {tap[2]}</li>
                                                                              <li className="list-group-item">IBU: {tap[3]}</li>
                                                                              <li className="list-group-item">Tap Number: {tap[4]}</li>
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      )
}