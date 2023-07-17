import React from 'react';
import '../stylesheets/main.css';

export default function NewsLetterNavButtons () {
      return (
            <nav
                  class="d-flex justify-content-end mt-1 nav-buttons-master align-items-center"
            >
                  <ul class="newsletter-navbuttons-container">
                        <ul>
                              <a
                                    class="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-1"
                                    >1</a
                              >
                        </ul>
                        <ul>
                              <a
                                    class="newsletter-nav-button btn btn-outline-warning"
                                    href="#entry-2"
                                    >2</a
                              >
                        </ul>
                        <ul>
                              <a
                                    class="newsletter-nav-button btn btn-outline-warning"
                                    href="#"
                                    >3</a
                              >
                        </ul>
                        <ul>
                              <a
                                    class="newsletter-nav-button btn btn-outline-warning"
                                    href="#"
                                    >4</a
                              >
                        </ul>
                        <ul>
                              <a
                                    class="newsletter-nav-button btn btn-outline-warning"
                                    href="#"
                                    >5</a
                              >
                        </ul>
                  </ul>
            </nav>
      )
}