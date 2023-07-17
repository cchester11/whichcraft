import React from "react";
import '../stylesheets/main.css'

export default function Nav () {
      return (
            <nav className="navbar navbar-expand-lg navbar-custom mb-5">
                  <div className="container-fluid">
                        <a className="navbar-brand">
                              <img
                                    className="header-img"
                                    src="https://www.whichcraft.com/wp-content/uploads/2022/06/WhichCraftLogoATX.png"
                                    width="120px"
                                    height="120px"
                                    alt=""
                              />
                        </a>
                        <div className="d-flex flex-column col-8">
                              <h2 className="header-center-piece">WHICHCRAFT</h2>
                              <h5 className="header-center-piece">
                                    TAP ROOM AND BOTTLE SHOP
                              </h5>
                        </div>
                        <div className="d-flex align-items-center">
                              <a
                                    className="link-icon"
                                    href="https://www.facebook.com/WhichCraftMueller/"
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <img
                                          src="images/facebook.png"
                                          alt="Facebook"
                                          className="social-icon"
                                          height="30px"
                                          width="30px"
                                    />
                              </a>
                              <a
                                    className="link-icon"
                                    href="https://www.instagram.com/whichcraftatx/?hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <img
                                          src="images/instagram.png"
                                          alt="Instagram"
                                          className="social-icon"
                                          height="30px"
                                          width="30px"
                                    />
                              </a>
                        </div>
                        <button
                              className="navbar-toggler col-4"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNavDropdown"
                              aria-controls="navbarNavDropdown"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                        >
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                              className="collapse navbar-collapse justify-content-end"
                              id="navbarNavDropdown"
                        >
                              <ul className="navbar-nav ms-auto">
                                    <li className="nav-item dropdown">
                                          <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                          >
                                                <img
                                                      src="images/menu.png"
                                                      width="30px"
                                                      height="30px"
                                                      alt=""
                                                />
                                          </a>
                                          <ul className="dropdown-menu">
                                                <li>
                                                      <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            >Newsletter</a
                                                      >
                                                </li>
                                                <li>
                                                      <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            >Beer Menu</a
                                                      >
                                                </li>
                                                <li>
                                                      <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            >Food Menu</a
                                                      >
                                                </li>
                                                <li>
                                                      <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            >About</a
                                                      >
                                                </li>
                                          </ul>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      )
}