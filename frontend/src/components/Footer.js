import React from "react";
import '../stylesheets/main.css';

export default function Footer() {
      return (
            <footer className="container-fluid d-flex justify-content-start mt-3">
                  <h6 className="footer-copyright fw-lighter text-light">
                        Copyright 2023 Whichcraft
                  </h6>
                  <div className="d-flex align-items-center col-2">
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
            </footer>
      )
}