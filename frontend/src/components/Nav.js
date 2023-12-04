import React from "react";
import '../stylesheets/main.css';

export default function Nav() {
      return (
            <nav className="navbar navbar-expand-lg navbar-custom">
                  <div className="container-fluid">
                        <a href="/" className="navbar-brand">
                              <img
                                    className="header-img"
                                    src="https://www.whichcraft.com/wp-content/uploads/2022/06/WhichCraftLogoATX.png"
                                    width="120px"
                                    height="120px"
                                    alt=""
                              />
                        </a>
                        <div className="d-flex flex-column align-items-center col-12">
                              <div className="d-flex align-items-center">
                                    <h2 className="header-center-piece">TAP ROOM AND BOTTLE SHOP</h2>
                              </div>
                              <button
                                    className="navbar-toggler col-12"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                                          <div className="dropdown nav-item">
                                                <button className="btn border-0 dropdown-toggle nav-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      Newsletters
                                                </button>
                                                <ul className="dropdown-menu">
                                                      <li><a className="dropdown-item" href="#entry-1">Hocus Pocus</a></li>
                                                      <li><a className="dropdown-item" href="#entry-2">Merry Christmas</a></li>
                                                </ul>
                                          </div>
                                          <button className="nav-item nav-button border-0 btn">
                                                <a className="nav-link" href="#ontap">Taps</a>
                                          </button>
                                          <button className="nav-item nav-button border-0 btn">
                                                <a className="nav-link" href="/">Food Menu</a>
                                          </button>
                                          <button className="nav-item nav-button border-0 btn">
                                                <a className="nav-link" href="/">About</a>
                                          </button>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}