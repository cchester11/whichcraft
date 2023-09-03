import React from "react";
import '../stylesheets/main.css';

export default function AdminHeader () {
      return (
            <nav className="navbar navbar-expand-lg navbar-custom bg-body-tertiary">
                  <img
                                    className="header-img"
                                    src="https://www.whichcraft.com/wp-content/uploads/2022/06/WhichCraftLogoATX.png"
                                    width="120px"
                                    height="120px"
                                    alt=""
                  />
                  <div className="container-fluid">
                        <a className="navbar-brand header-center-piece text-white" href="/">WHICHCRAFT</a>
                  </div>
            </nav>
      )
}