import React from 'react';
import '../stylesheets/main.css';

export default function NewsLetterNavButtons() {
      return (
            <nav
                  className="d-flex justify-content-end mt-1 nav-buttons-master align-items-center"
                  id="newsLetterNav"
            >
                  <ul className="newsletter-navbuttons-container">
                        <ul>
                              <a
                                    className="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-1"
                              >1</a>
                        </ul>
                        <ul>
                              <a
                                    className="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-2"
                              >2
                              </a>
                        </ul>
                        <ul>
                              <a
                                    className="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-3"
                              >3</a>
                        </ul>
                        <ul>
                              <a
                                    className="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-4"
                              >4</a>
                        </ul>
                        <ul>
                              <a
                                    className="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-5"
                              >5</a>
                        </ul>
                  </ul>
            </nav>
      )
}