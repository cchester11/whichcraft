import React from 'react';
import '../../stylesheets/main.css';

export default function NewsLetterNavButtons() {
      return (
            // <nav
            //       className="d-flex justify-content-end mt-1 nav-buttons-master align-items-center"
            //       id="newsLetterNav"
            // >
            <div>
                  <nav id="newsLetterNav" class="navbar  newsletters-navbar px-3 mb-3 d-flex justify-content-end mt-1 nav-buttons-master align-items-center">
                        <ul class="nav nav-pills">
                              <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Select Article</a>
                                    <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                          <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                          <li><hr class="dropdown-divider"></hr></li>
                                          <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                    </ul>
                              </li>
                        </ul>
                  </nav>
            </div>
      )
}